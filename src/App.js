import './App.css';
import image from "./sources/img-user.jpg"
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

  return (
    <div className="App">
      
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

    
  </div>
  
  );
}

export default App;
