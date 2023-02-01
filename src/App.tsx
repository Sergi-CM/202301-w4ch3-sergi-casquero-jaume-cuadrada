import "./App.css";
import Action from "./components/Action/Action";
import Actions from "./components/Actions/Actions";
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
        <Actions />
      </main>
    </div>
  );
};

export default App;
