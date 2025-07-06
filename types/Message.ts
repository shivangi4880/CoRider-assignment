export interface Sender {
  name: string;
  self: boolean;
  avatar?: string;
}

export interface Message {
  id: number;
  message: string;
  time: string;
  sender: Sender;
}
