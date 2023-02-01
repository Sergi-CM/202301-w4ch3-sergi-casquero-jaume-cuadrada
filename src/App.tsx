import "./App.css";
import Action from "./components/Action/Action";
import Info from "./components/Info/Info";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Info message="Calling..." />
      <main className="phone">
        <div className="keyboard-container">
          <ol className="keyboard">
            <li>
              <button className="key">1</button>
            </li>
            <li>
              <button className="key">2</button>
            </li>
            <li>
              <button className="key">3</button>
            </li>
            <li>
              <button className="key">4</button>
            </li>
            <li>
              <button className="key">5</button>
            </li>
            <li>
              <button className="key">6</button>
            </li>
            <li>
              <button className="key">7</button>
            </li>
            <li>
              <button className="key">8</button>
            </li>
            <li>
              <button className="key">9</button>
            </li>
            <li>
              <button className="key">0</button>
            </li>
            <li>
              <button className="key big">delete</button>
            </li>
          </ol>
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
