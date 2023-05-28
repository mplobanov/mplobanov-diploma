import React from "react";
import { LoggerContextValue } from "./types";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

export const LoggerContext = React.createContext<LoggerContextValue>({
    messages: [],
    addMessage: noop,
})