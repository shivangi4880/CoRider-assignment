import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchChats } from '../api/chatService';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';
import Header from '../components/Header';
import styles from '../styles/ChatScreenStyles';
import { Message } from '../types/Message';

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState(true);

  const [tripName, setTripName] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    const loadInitial = async () => {
      setLoading(true);
      const response = await fetchChats(0);
      setMessages(response.chats.slice(0, 7)); 
      setTripName(response.name);
      setFrom(response.from);
      setTo(response.to);
      setLoading(false);
    };
    loadInitial();
  }, []);

  const loadOlderMessages = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const nextPage = page + 1;
    const response = await fetchChats(nextPage);

    if (response.chats.length === 0) {
      setHasMore(false);
    } else {
      setMessages(prev => [...prev, ...response.chats]);
      setPage(nextPage);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
          <View style={styles.container}>
            <Header title={tripName} from={from} to={to} />

            <FlashList
              data={messages}
              inverted
              keyExtractor={(item) => item.id.toString()}
              estimatedItemSize={100}
              renderItem={({ item, index }) => {
                const showDate =
                  index === messages.length - 1 ||
                  new Date(messages[index + 1]?.time).toDateString() !== new Date(item.time).toDateString();

                return (
                  <>
                    {showDate && (
                      <Text style={styles.dateLabel}>
                        {new Date(item.time).toLocaleDateString('en-US', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </Text>
                    )}
                    <ChatBubble message={item} />
                  </>
                );
              }}
              onEndReached={loadOlderMessages}
              onEndReachedThreshold={0.3}
              ListFooterComponent={loading ? <ActivityIndicator /> : null}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.chatList}
            />

            <ChatInput />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ChatScreen;
