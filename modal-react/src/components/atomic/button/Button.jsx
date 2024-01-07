/* eslint-disable react/prop-types */
import "./index.css";

// Definizione di props default
// se text non viene assegnato dall'esterno e.g. <Button text="Hello" />
// allora il button avrà "Sushi" come testo di default
//
// stesso discorso vale per handleClick
// se non assegnato dall'esterno come nel seguente modo
// e.g. <Button handleClick={() => console.log('asd')} />
// il button al click eseguirà "Passami una funzione"
const Button = ({
  text = "Sushi",
  handleClick = () => {
    console.log("Passami una funzione");
  },
}) => {
  return (
    <button className="atomic-button" onClick={() => handleClick()}>
      {text}
    </button>
  );
};

export default Button;
