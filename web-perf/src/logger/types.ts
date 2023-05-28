export interface LoggerContextValue {
    messages: string[],
    addMessage: (newMessage: string) => void;
}