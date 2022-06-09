import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=()=>{
    return(
        <div>
            <Link to="/"><i class='bx bx-home'></i></Link>
            <Link to="/"><i class='bx bx-book'></i></Link>
            <Link to="/"> <i class='bx bx-briefcase'></i></Link>
            <Link to="/"><i class='bx bxs-contact'></i></Link>
            

        </div>
    )
}

export default Navbar