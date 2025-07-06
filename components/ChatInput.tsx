import { Entypo, Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import styles from '../styles/ChatInputStyles';

const ChatInput = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : "height"}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
    >
      <View style={styles.container}>
        {/* Reply text field*/}
        <TextInput
          style={styles.input}
          placeholder="Reply to @Rohit Yadav"
          placeholderTextColor="#888"
        />

        {/*Pin Menu*/}
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
            <Entypo name="attachment" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="send-outline" size={22} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/*Pop-up menu*/}
      {menuVisible && (
        <View style={styles.attachmentWrapper}>
          <View style={styles.attachmentMenu}>
            <TouchableOpacity style={styles.attachmentIcon}>
              <FontAwesome name="camera" size={18} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.attachmentIcon}>
              <Feather name="video" size={18} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.attachmentIcon}>
              <MaterialIcons name="insert-drive-file" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.triangle} />
        </View>
      )}

    </KeyboardAvoidingView>
  );
};

export default ChatInput;
