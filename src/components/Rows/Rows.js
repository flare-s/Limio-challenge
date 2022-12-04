import Row from "./Row";
const Rows = ({ rows, turn, guess }) => {
  return (
    <div>
      {rows.map((row, i) => {
        if (i === turn) {
          console.log("y");
          return <Row key={i} guess={guess} />;
        }
        return <Row key={i} row={row} />;
      })}
    </div>
  );
};

export default Rows;
