import { useState } from "react";
import "./App.css";
import ListGroup from "./Components/ListGroup";

function NameList() {
  const [list, setList] = useState(["garv", "jitu", "kamal"]);
  const [name, setName] = useState(() => "");
  console.log("NameList rendered");

  const onAddName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <NameList />
      <ListGroup />
    </div>
  );
}

export default App;
