export default interface iGame {
  id: string;
  name: string;
  players: [
    {
      name: string;
      direction: string;
      connected: boolean;
    }
  ];
}
