import Row from "./Row";
const Rows = ({ rows }) => {
  return (
    <div>
      {rows.map((row, i) => (
        <Row key={i} />
      ))}
    </div>
  );
};

export default Rows;
