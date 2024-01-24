export interface Tranaction {
  id: number;
  to: string;
  from: string;
  amount: number;
  type: string;
}
export interface User {
  name: string;
  coins: number;
  avatar: string;
  walletAddress: string;
}
