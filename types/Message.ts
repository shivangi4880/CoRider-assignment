export interface Sender {
  avatar: string;
  name: string;
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
  user_id: string;
}

export interface Message {
  id: string;
  message: string;
  sender: Sender;
  time: string;
}