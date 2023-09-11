import React from "react";

import Tarea from "./Tarea";

function ListaDeTareas() {
  const tareas = [
    { id: 1, texto: "Hacer la compra" },
    { id: 2, texto: "Lavar la ropa" },
    { id: 3, texto: "Estudiar React" },
  ];

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea) => (
          <Tarea id={tarea.id} texto={tarea.texto} />
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTareas;
