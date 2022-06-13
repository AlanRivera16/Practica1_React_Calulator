import './App.css';
import image from "./sources/img-user.jpg"
import imagec from "./sources/calculator.png"
import React, {useState} from "react";

//Cualquier lógica aquí afuera será global 
function App() {
  // const [counter, setCounter] = useState(0);
  const [people, setPeople] = useState([
    {
      name: "John",
      lastName: "Doe",
      age: 30,
      favouriteFood: "Pizza",
      favouriteColour: "Red",
      counter: 0,
    },
  ]);
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");

  //const para input calculator
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const [numbers, setNumbers] = useState([
    {
      number1: 0,
      number: 2
    },
  ]);

  return (
    <div className="App">
    <header className='bg-dark'><h1>PRÁCTICA 1 REACT</h1></header>
    <div>
      <div><img className='img-back' src={image} alt="USERIMG"/></div>
      <div className='d-block-custom'>
        <input
          type="text"
          name="name"
          className='input-custom'
          placeholder='Inserta el nombre'
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          name="lastName"
          className='input-custom'
          placeholder='Inserta el apellido'
          onChange={(event) => {
            setLastname(event.target.value);
          }}
        />
      </div>
        <button
          onClick={() => {
            if(name === '' || lastName === ''){
              console.log('Agrega los campos');
              window.alert('Ingrese el nombre y apellido por favor')
              return
            }
            setPeople((current) => [{ name, lastName }, ...current]);
          }}
          className='btn-agregar-user'
        >
          AGREGAR USUARIO
        </button>
    </div>
    

    <div id='Hello'>
      <div className='m-custom'>
        <div className='bg-dark'><h1>TABLA CONTENIDO</h1></div>
        <div>
          <ol className='pr-20'>
            <div className='d-flex mb-21'><p className='w-50'>NOMBRE</p><p className='w-50'>APELLIDO</p></div>
            {people.map((person, idx) => (
            <li className='border-y' id={idx}><div className='d-flex'><p className='w-50'>{`${person.name}`}</p><p className='w-50'>{`${person.lastName}`}</p></div></li>
            ))}
          </ol>
        </div>
      </div>
    </div>

    <div>
      <div><img className='img-back' src={imagec} alt="USERCAL"/></div>
      <div className='bg-dark mx-20'><h2>CALCULADORA</h2></div>
      <div className='d-block-custom no-padding-bottom'>
        <input
          type="number"
          name="Número 1"
          className='input-custom'
          placeholder='numero 1'
          onChange={(event) => {
            setNum1(event.target.value);
          }}
        />
        <input
          type="number"
          name="Número 2"
          className='input-custom'
          placeholder='numero 2'
          onChange={(event) => {
            setNum2(event.target.value);
          }}
        />
        <h3>Resultado: {result}</h3>
      </div>
      <div className='padding-bottom'>
        <button
          onClick={() => {
            setResult(((+num1)+(+num2)));
          }}
          className='btn-agregar-user'
        >
          Sumar
        </button>
        <button
          onClick={() => {
            setResult(((+num1)-(+num2)));
          }}
          className='btn-agregar-user'
        >
          Restar
        </button>
        <button
          onClick={() => {
            setResult(((+num1)*(+num2)));
          }}
          className='btn-agregar-user'
        >
          Multiplicar
        </button>
        <button
          onClick={() => {
            if(num2 == 0){
              console.log('No se puede dividir entre 0');
              window.alert('No se puede dividir entre 0, selecciona un número válido')
              return;
            }
            setResult(((+num1)/(+num2)));
          }}
          className='btn-agregar-user'
        >
          Dividir
        </button>
      </div>
        {/* <p>{result}</p> */}
    </div>

    
    {/* <div id='Hello'>
      <div className='m-custom'>
        <div>
          <table className='w-100'>
            <tr>
              <td>{result}</td>
            </tr>
            <tr>
              <td>
                  <button
                    onClick={() => {
                      if(cambio == true){
                        setNum1(num1 = 1)
                        console.log(num1);
                      }
                      setResult((num1) + 1)
                      
                    }}
                    className='btn-number'
                  >
                    1
                  </button>
              </td>
              <td
              onClick={() => {
                if(cambio == true){
                  setNum1(num1 = 1)
                  console.log(num1);
                }
                setResult((num1) + 2)
                
              }}
              >
              2
              </td>
              <td>3</td>
              <td
               onClick={() => {
                setCambio(true)
                if(cambio == true){
                  console.log('Se hizo el cambio');
                }
              }}
              >
              +
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>-</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>*</td>
            </tr>
            <tr>
              <td colspan="3">0</td>
              <td>/</td>
            </tr>
            <tr>
              <td colspan="2">AC</td>
              <td>.</td>
              <td>=</td>
            </tr>
          </table>
        </div>
      </div>
    </div> */}

    
  </div>
  
  );
}

export default App;
