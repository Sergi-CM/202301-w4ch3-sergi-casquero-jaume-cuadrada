import Key from "../Key/Key";

const Keyboard = (): JSX.Element => {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];
  return (
    <ol className="keyboard">
      {keys.map((key) => (
        <Key content={key} className={`key${key === "delete" ? " big" : ""}`} />
      ))}
    </ol>
  );
};

export default Keyboard;
