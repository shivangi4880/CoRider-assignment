import axios from 'axios';
import { Message } from '../types/Message';

export interface ChatApiResponse {
  chats: Message[];
  from: string;
  to: string;
  name: string;
  message: string;
  status: string;
}

export const fetchChats = async (page: number = 0): Promise<ChatApiResponse> => {
  try {
    const res = await axios.get(`https://qa.corider.in/assignment/chat?page=${page}`);
    const data = res.data;
    return {
      chats: data.chats || [],
      from: data.from || '',
      to: data.to || '',
      name: data.name || '',
      message: data.message || '',
      status: data.status || 'error',
    };
  } catch (error) {
    console.error("API fetch error:", error);
    return {
      chats: [],
      from: '',
      to: '',
      name: '',
      message: '',
      status: 'error',
    };
  }
};
