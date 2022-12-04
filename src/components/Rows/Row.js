import styles from "./Row.module.scss";
const Row = ({ guess, row }) => {
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

  if (row) {
    console.log("h");
    return (
      <div className={styles.row}>
        {row.map((g, i) => (
          <div key={i} className={styles[g.color]}>
            {g.key}
          </div>
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
