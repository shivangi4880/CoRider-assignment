import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View, } from 'react-native';
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
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [tripName, setTripName] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const flashListRef = useRef<FlashList<Message>>(null);

  useEffect(() => {
    const loadInitial = async () => {
      setLoading(true);
      const response = await fetchChats(0);
      setMessages(response.chats.slice(0, 7)); // Load only 7 msgs initially
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
      setLoading(false);
      return;
    }

    //Store scroll height before updatng
    const prevLength = messages.length;

    setMessages((prev) => [...prev, ...response.chats]);
    setPage(nextPage);

    setTimeout(() => {
      if (flashListRef.current && prevLength > 0) {
        flashListRef.current.scrollToIndex({
          index: response.chats.length,
          animated: false,
        });
      }
    }, 0);

    setLoading(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <View style={styles.container}>
          <Header title={tripName} from={from} to={to} />

          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <FlashList
              ref={flashListRef}
              data={messages}
              inverted
              keyExtractor={(item) => item.id}
              estimatedItemSize={80}
              renderItem={({ item, index }) => {
                const showDate =
                  index === messages.length - 1 ||
                  new Date(messages[index + 1]?.time).toDateString() !==
                  new Date(item.time).toDateString();

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
              onEndReachedThreshold={0.2}
              ListFooterComponent={loading ? <ActivityIndicator /> : null}
              contentContainerStyle={styles.chatList}
              showsVerticalScrollIndicator={false}
            />
          </TouchableWithoutFeedback>

          <ChatInput />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
