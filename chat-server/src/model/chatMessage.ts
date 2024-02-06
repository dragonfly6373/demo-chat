import { IChatMessage } from "./chatMessage.interface";

export class ChatMessageDto implements IChatMessage {
    id: number;
    roomId: number;
    messageType: number;
    content: string;
    createdBy: number;
}
