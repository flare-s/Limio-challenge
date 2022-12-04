import styles from "./Row.module.scss";
const Row = ({ guess }) => {
  if (guess) {
    return (
      <div className={styles.row}>
        {guess.split("").map((letter, i) => {
          return <div key={i}>{letter}</div>;
        })}
        {[...Array(5 - guess.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.row}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
