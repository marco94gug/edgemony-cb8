import { useState } from "react";
import "./App.css";
import Button from "./components/atomic/button";
import Modal from "./components/atomic/modal/Modal";

function App() {
  const [isVisible, setVisibility] = useState(false);

  const handleModalButtonClick = () => {
    // switch tra true e false
    setVisibility(!isVisible);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <Button text="Open Modal" handleClick={handleModalButtonClick} />
      {/* Button inutile per mostrare come funzionano le props default */}
      <Button />
      {/* Qui montiamo la modale solo quando isVisible è true */}
      {isVisible && <Modal setVisibility={setVisibility} />}
    </div>
  );
}

export default App;
