import styles from "./App.module.css";
import { ControlPane } from "./controlPane/ component";
import { Logger } from "./logger/component";
import { Logs } from "./logs/component";

function App() {
  return (
    <Logger>
      <div className={styles.main}>
        <ControlPane />
        <Logs />
      </div>
    </Logger>
  );
}

export default App;
