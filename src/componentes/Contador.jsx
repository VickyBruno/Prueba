import { useState } from "react"

export default function Contador({valor}) {
  {/*Se escribe como constante para que no se pueda modificar, el nombre es: contador (va a asumir el valor de setcontador), setcontador es el metodo que permite el cambio */}
  const [contador , setcontador] = useState (valor)

  {/*siempre traigo el set, y dentro de los parentesis realiazo el cambio en el constante */}
  const sumar = () => {
    setcontador(contador +1)
    
  }

  const restar = () => {
    setcontador(contador -1)
    
  }
  
    return (
      <div className="sectionContador">
        <h1>Contador de React:</h1>

        
           
        
        <button className="botonRestar" onClick={restar}>
          -
        </button> 
        <p className="resul">{contador}</p> 
        
        <button className="botonSumar" onClick={sumar}>
          +
        </button>
        
      </div>
    )
 }

 {/*

console.log(typeof(valor))
    function sumar(valor){
        valor += 1
        console.log(valor)
    }


*/}