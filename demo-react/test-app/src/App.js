import logo from "./logo.svg";
import "./App.css";
import Cajas from "./components/Isra";
import { useState } from "react";

function App() {
  const [nacionalidades, setNacionalidades] = useState([null, null, null]);

  const actualizarNacionalidad = (indice, nacionalidad) => {
    setNacionalidades((prevNacionalidades) => {
      const nuevasNacionalidades = [...prevNacionalidades];
      nuevasNacionalidades[indice] = nacionalidad;
      return nuevasNacionalidades;
    });
  };

  return (
    <div className="contenedorCajas">
      <Cajas
        imagen={require("./imagenes/Fedh.jpg")}
        altImagen=""
        titulo="SURFER #1"
        nombre="FEDH"
        edad="28"
        altura="184cm"
        nacionalidad="MARRUECOS"
        actualizarNacionalidad={(nacionalidad) =>
          actualizarNacionalidad(1, nacionalidad)
        }
      />
      <Cajas
        imagen={require("./imagenes/Fredo.jpg")}
        altImagen=""
        titulo="SURFER #2"
        nombre="FREDO"
        nacionalidad="ITALIA"
        
        actualizarNacionalidad={(nacionalidad) =>
          actualizarNacionalidad(2, nacionalidad)
        }
      />
      <Cajas
        imagen={require("./imagenes/isra.jpg")}
        altImagen=""
        titulo="SURFER #3"
        nombre="ISRAEL"
        nacionalidad="ESPAÑA"
        
        actualizarNacionalidad={(nacionalidad) =>
          actualizarNacionalidad(3, nacionalidad)
        }
      />
    </div>
  );
}

export default App;
