import React from 'react'
import './Navbar.css'

const Navbar = ({img}) => {
  return (
    <>
     <header>
        <img src={img} alt="logo de la página" className='logoPage1'/>
        <div className="containerInputAndBtn">
        <span className='textofInput'>Helsinki, Finland</span>
        <input className='inputText' type="text" placeholder='Add guests'/>
        <button className='btnSearch'>
          <span className="material-symbols-outlined">search</span>
        </button>
        </div>
      </header>
    </>
  )
}

export default Navbar 

