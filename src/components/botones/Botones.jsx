import React from 'react'

const Botones = ({texto, classname, style}) => {
    const hola = () => {
        console.log('arriba del boton')
    }
    
    return (
        <button className={classname} style={style} onMouseOver={hola}> {texto} </button>
    )
    }
    
export default Botones