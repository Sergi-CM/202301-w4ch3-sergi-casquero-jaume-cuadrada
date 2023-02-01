import Key from "../Key/Key";

const Keyboard = (): JSX.Element => {
  return (
    <ol className="keyboard">
      <Key content="1" className="key" />
      <Key content="2" className="key" />
      <Key content="3" className="key" />
      <Key content="4" className="key" />
      <Key content="5" className="key" />
      <Key content="6" className="key" />
      <Key content="7" className="key" />
      <Key content="8" className="key" />
      <Key content="9" className="key" />
      <Key content="0" className="key" />
      <Key content={"delete"} className={"key big"} />
    </ol>
  );
};

export default Keyboard;
