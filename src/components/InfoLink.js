import '../styles/LinkLista.css'
import React from 'react'

const InfoLink =({icon,titulo,descripcion,url,color})=>{
    return(
        <a href={url} target="_blank" rel="noopener noreferrer" className='cont-card-link' style={{background:`${color}`}}>
            <div key={titulo} className='card-link'>
                <div className='card'>
                    <img src={icon} alt={titulo}/>
                    <div className="cont-descrip">
                        <h4>{titulo}</h4>
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}
export default InfoLink