
export interface WishRequest {
  recipientName: string;
  personality: string;
  theme: 'funny' | 'sweet' | 'poetic';
}

export interface FishMessage {
  text: string;
  fishType: string;
}

export enum AppState {
  LANDING = 'LANDING',
  OPENING = 'OPENING',
  CARD = 'CARD'
}
