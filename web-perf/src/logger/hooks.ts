import { useContext } from "react"
import { LoggerContext } from "./context"

export const useMessages = () => {
    const {messages} = useContext(LoggerContext);

    return messages;
}

export const useAddMessage = () => {
    const {addMessage} = useContext(LoggerContext);

    return addMessage;
}