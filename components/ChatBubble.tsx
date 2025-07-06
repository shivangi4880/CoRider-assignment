import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../styles/ChatBubbleStyles';
import { Message } from '../types/Message';

type Props = { message: Message };

const ChatBubble: React.FC<Props> = ({ message }) => {
  const { sender } = message;

  if (!sender.is_kyc_verified) return null;

  const isSelf = sender.self;

  const cleanedMessage = message.message
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/Page \d+/gi, '');

  return (
    <View style={[styles.row, isSelf ? styles.right : styles.left]}>
      {!isSelf && <Image source={{ uri: message.sender.avatar || '' }} style={styles.avatar} />}
      <View style={[styles.bubble, isSelf ? styles.self : styles.other]}>
        {!isSelf && <Text style={styles.name}>{message.sender.name}</Text>}
        <Text style={[styles.message, isSelf ? styles.selfText : styles.otherText]}>
          {message.message.replace(/<br>/g, '\n').replace(/Page \d+/g, '')}
        </Text>
      </View>
    </View>
  );
};

export default ChatBubble;

