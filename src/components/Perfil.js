import { Fragment } from "react"
import { InfoUser } from '../DB/InfoUsers'

import '../styles/Perfil.css'
const Perfil = ()=>{

    return(
        <div className='contenedor-perfil'>
            {
                InfoUser.map(info =>(
                    <Fragment key ={ info.usuario.nombreUsuario}> 
                        <div
                            style={{
                                backgroundImage:`url(${info.usuario.icon})`,
                                backgroundSize:'cover'
                            }} 
                            className='imagen-perfil' >
                        </div>
                        <h2>{info.usuario.nombreUsuario}</h2>
                        <h4>{info.usuario.about}</h4>
                    </Fragment>
                   
                ))
            }
            
        </div>
        
    )
}

export default Perfil