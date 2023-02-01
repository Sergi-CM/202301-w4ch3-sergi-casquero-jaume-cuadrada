import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = (): JSX.Element => {
  return (
    <div className="actions">
      <Display className="number" />
      <Action href="call" className="call" text="Call" />
      <Action href="hang-up" className="hang active" text="Hang Up" />
    </div>
  );
};

export default Actions;
