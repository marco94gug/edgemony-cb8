/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "../button";
import "./index.css";

const Modal = ({ setVisibility = () => {} }) => {
  // Questo useState permette alla modale di essere indipendente
  // potete montare questo componente in qualsiasi Pagina*
  // l'unico requisito è che sia montato con un condizionale dall'esterno
  // E.G. {isVisible && <Modal setVisibility={setVisibility}/>}
  //
  // la sua unica dipendenza rimane la funzione di setVisibility che al button close
  // chiude la modale
  //
  // si può fare meglio? sicuramente si
  //
  // l'esempio riportato è per farvi vedere come lo useEffect
  // può essere usato per altre cose oltre a fetch
  const [isActive, setActive] = useState(false);

  // a prima esecuzione del componente lo useEffect imposterà true a isActive
  useEffect(() => {
    setActive(true);
  }, []);

  const handleCloseClick = () => {
    setVisibility(false);
  };

  return (
    <div>
      <section className="modal">
        {/* una volta che isActive passa a true aggiungerà active alla classe modal--content */}
        {/* facendo partire l'animazione che potete visionare sul css */}
        <div className={`modal--content ${isActive ? "active" : ""}`}>
          <h1>Modale</h1>
          <Button text="Close" handleClick={handleCloseClick} />
        </div>
      </section>
    </div>
  );
};

export default Modal;
