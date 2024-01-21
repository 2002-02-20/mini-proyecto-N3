import React, { useEffect, useState } from "react";
import "./TotalGuests.css";

export default function TotalGuests({ setTotal }) {
  const [contadorAdults, setcontadorAdults] = useState(0);
  const [contadorChildren, setcontadorChildren] = useState(0);

  const menorCero = () => {
    if (contadorAdults > 0) {
      setcontadorAdults(contadorAdults - 1);
    }
  };

  const mayor = () => {
    setcontadorAdults(contadorAdults + 1);
  };

  const menorCeroChildren = () => {
    if (contadorChildren > 0) {
      setcontadorChildren(contadorChildren - 1);
    }
  };

  const aumenta = () => {
    setcontadorChildren(contadorChildren + 1);
  };

  useEffect(() => {
    setTotal(contadorAdults + contadorChildren);
  }, [contadorAdults, contadorChildren, setTotal]);

  return (
    <>
      <div className="containerAdults">
        <p>
          <strong>Adults</strong>
        </p>
        <p className="age">Ages 13 or above</p>
        <div className="marcador">
          <button type="button" onClick={menorCero}>
            -
          </button>
          <p className="numcontadorAdults">{contadorAdults}</p>
          <button type="button" onClick={mayor}>
            +
          </button>
        </div>
      </div>
      <div className="containerChildren">
        <p>
          <strong>Children</strong>
        </p>
        <p className="age">Ages 2-12</p>
        <div className="marcador">
          <button type="button" onClick={menorCeroChildren}>
            -
          </button>
          <p className="numcontadorAdults">{contadorChildren}</p>
          <button type="button" onClick={aumenta}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
