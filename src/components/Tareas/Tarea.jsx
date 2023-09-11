import React from 'react';

function Tarea(props){
    return <li> ({props.id}) {props.texto}</li>;
}

export default Tarea;