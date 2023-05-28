import styles from "./styles.module.css";
import img from "../assets/matrix.png";
import { Form } from "./form";

export const ControlPane = () => {
  return (
    <div className={styles.body}>
      <h1 className="text-2xl">Matrix Multiplication</h1>
      <div>
        <img src={img} />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};
