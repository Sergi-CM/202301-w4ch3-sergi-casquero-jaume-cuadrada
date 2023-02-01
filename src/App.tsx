import "./App.css";
import Action from "./components/Action/Action";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Info message="Calling..." />
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard />
        </div>
        <div className="actions">
          <span className="number">667359961</span>
          <Action href="call" className="call" text="Call" />
          <Action href="hang-up" className="hang active" text="Hang Up" />
        </div>
      </main>
    </div>
  );
};

export default App;
