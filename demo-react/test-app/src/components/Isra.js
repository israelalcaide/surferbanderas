import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Isra.css";

const banderas = {
  MARRUECOS: require("../imagenes/marroc.jpg"),
  ITALIA: require("../imagenes/italia.jpg"),
  ESPAÑA: require("../imagenes/españa.jpg"),
};

const Cajas = (props) => {
  const [showName, setShowName] = useState(false);
  const handleNameClick = () => {
    setShowName(!showName);
  };

  const [nacionalidad, setNacionalidad] = useState("");
  const [bandera, setBandera] = useState(props.imagen);
  const [showBandera, setShowBandera] = useState(false);
  const [showFront, setShowFront] = useState(true);

  const cambiarNacionalidad = (pais) => {
    setNacionalidad(pais);
    setBandera(banderas[pais]);
    setShowBandera(true);
    setTimeout(() => setShowBandera(false), 1800);
  };

  

  return (
    <div className="contenedorTexto">
      <img
        className={`contenedorImagen ${showFront ? 'show-front' : ''}`}
        src={showBandera ? bandera : props.imagen}
        alt={props.altImagen}
      />
      <h5 className="contenedorTitulo">{props.titulo}</h5>
      <button className="buttonName" onClick={handleNameClick}>
        {showName ? props.nombre : "NAME"}
      </button>
      <button
        className="buttonNation"
        onClick={() => cambiarNacionalidad(props.nacionalidad)}
      >
        {nacionalidad ? nacionalidad.toUpperCase() : "NATIONALITY"}
      </button>
      <button className="buttonInfo" >
        SECRET INFO
      </button>
      <button className="buttonChoose" >
        CHOOSE IT
      </button>
    </div>
  );
};

export default Cajas;
