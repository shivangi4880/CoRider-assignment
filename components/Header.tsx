import { Feather, FontAwesome5, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/HeaderStyles';

interface HeaderProps {
  title: string;
  from: string;
  to: string;
}

const Header: React.FC<HeaderProps> = ({ title, from, to }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/*Trip no and icon*/}
      <View style={styles.topRow}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.editIcon}>
          <FontAwesome5 name="edit" size={20} color="black" />
        </TouchableOpacity>
      </View>
      {/*Location*/}
      <View style={styles.bottomRow}>
        <View style={styles.avatarGroup}>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} style={styles.avatar} />
          <Image source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} style={styles.avatar} />
        </View>
        <View style={styles.tripDetails}>
          <Text>
            <Text style={styles.label}>From </Text>
            <Text style={styles.location}>{from}</Text>
          </Text>
          <Text>
            <Text style={styles.label}>To </Text>
            <Text style={styles.location}>{to}</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <MaterialIcons name="more-vert" size={24} />
        </TouchableOpacity>
      </View>

      {/*Pop-up menu*/}
      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialIcons name="people-outline" size={20} style={styles.menuIcon} />
              <Text>Members</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Feather name="phone" size={16} style={styles.menuIcon} />
              <Text>Share Number</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Octicons name="report" size={16} style={styles.menuIcon} />
              <Text>Report</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Header;
