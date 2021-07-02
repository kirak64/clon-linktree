import {InfoUser}  from '../DB/InfoUsers'
import InfoLink from './InfoLink'


const LinkLista = ()=>{

    return (
        <div className='contenedor-link'>
            {
                InfoUser.map(info =>(
                    info.social.map(social =>(
                        <InfoLink 
                        key ={social.titulo}
                        icon={social.icon} 
                        titulo ={social.titulo} 
                        descripcion ={social.descripcion}  
                        url = {social.url}
                        color = {social.color}
                        />
                    ))
                ))
            }
        </div>
    )
}

export default LinkLista