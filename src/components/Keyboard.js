import { keys } from "../data";
const Keyboard = () => {
  return (
    <div>
      {keys.map((key) => (
        <div>{key.key}</div>
      ))}
    </div>
  );
};

export default Keyboard;
