import { BlogPost } from "./tarea/Tarea1.js";
// import { MatchNombre, PasswordInput, ValidationInput } from "./tarea/Tarea2.js";
// import { CheckboxList } from "./tarea/Tarea3.js";
// import { CheckboxListWithState } from "./tarea/Tarea4.js";

// Tarea 1:

ReactDOM.createRoot(document.querySelector('#react-app')).render(
  <BlogPost titulo='Primer post' 
  parrafo={`Hoy vi una ardilla.
La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
  autor={{
    nombre: "Juan Sebastián Ayala",
    titulo: "Programador Front End",
    imagen: "https://avatars.githubusercontent.com/u/107014615?s=400&v=4"}} 
  />,
);

// Tarea 2:
// ReactDOM.createRoot(document.querySelector('#react-app')).render(
//   <MatchNombre nombre='Juan' /> 
// );

// ReactDOM.createRoot(document.querySelector('#react-app')).render(
//   <PasswordInput minLength='8' /> 
// );


// ReactDOM.createRoot(document.querySelector('#react-app')).render(
//   <ValidationInput validation={value => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)} isPassword={false}  /> 
// );

// Tarea 3:
// ReactDOM.createRoot(document.querySelector('#react-app')).render(
//   <CheckboxList items={{
//     uno: false,
//     dos: true,
//     tres: false,
//   }} />
// );

// Tarea 4:
// ReactDOM.createRoot(document.querySelector('#react-app')).render(
//   <CheckboxListWithState items={{
//     uno: false,
//     dos: true,
//     tres: false,
//   }} />
// );
