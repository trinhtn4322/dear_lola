
export interface FishMessage {
  text: string;
  fishType: string;
}

export enum AppState {
  LANDING = 'LANDING',
  OPENING = 'OPENING',
  CARD = 'CARD'
}
