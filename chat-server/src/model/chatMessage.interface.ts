export interface IChatMessage {
    id: number;
    roomId: number;
    messageType: number;
    content: string;
    createdBy: number;
}
