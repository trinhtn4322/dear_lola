
// Fix: Added the WishRequest interface to provide the expected type for geminiService.ts
export interface WishRequest {
  recipientName: string;
  personality: string;
  theme: string;
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
