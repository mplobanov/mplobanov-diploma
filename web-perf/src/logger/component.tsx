import { useCallback, useState } from "react";
import { LoggerContextValue } from "./types";
import { LoggerContext } from "./context";

export interface LoggerProps {
  children: React.ReactNode;
}

export const Logger = ({ children }: LoggerProps) => {
  const [state, setState] = useState<LoggerContextValue["messages"]>([]);

  const addMessage = useCallback<LoggerContextValue["addMessage"]>(
    (newMessage) => {
      setState((oldState) => [...oldState, newMessage]);
    },
    []
  );

  return (
    <LoggerContext.Provider
      value={{
        messages: state,
        addMessage,
      }}
    >
      {children}
    </LoggerContext.Provider>
  );
};
