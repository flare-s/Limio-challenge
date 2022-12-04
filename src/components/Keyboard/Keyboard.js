import { keys } from "../../data";
import styles from "./Keyboard.module.scss";
const Keyboard = () => {
  return (
    <div className={styles.keyboard}>
      {keys.map((key) => (
        <div>{key.key}</div>
      ))}
    </div>
  );
};

export default Keyboard;
