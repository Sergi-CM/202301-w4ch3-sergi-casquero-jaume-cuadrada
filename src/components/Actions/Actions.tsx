import Action from "../Action/Action";

const Actions = (): JSX.Element => {
  return (
    <div className="actions">
      <Action href="call" className="call" text="Call" />
      <Action href="hang-up" className="hang active" text="Hang Up" />
    </div>
  );
};

export default Actions;
