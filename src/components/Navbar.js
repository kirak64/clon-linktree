import {Fragment} from 'react'
import '../styles/Navbar.css'
import linktree from '../img/linktree.png'

const Navbar = ()=>{
    return (
        <Fragment>
            <nav className='nav'>
                <img src={linktree} alt="" /> 
                <span> Linktree</span>
            </nav>
        </Fragment>
       
    )
}

export default Navbar