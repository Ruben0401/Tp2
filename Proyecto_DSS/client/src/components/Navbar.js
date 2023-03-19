import React from 'react'
import logo from '../img/blanco y negro logo.png'
import logoMovilwhite from '../img/Logo.png'
import '../index.css';
import {BiBell,BiLogOut,BiUser,BiMessage,BiMenu,BiFileBlank,BiMapAlt,BiMapPin,BiMap} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Navbar = () => {
  const [open, setOpen]= useState(false);
  console.log(open);
  return (
    <nav className="bg-color-barra items-center">
      <div className="flex items-center justify-around h-14"> 
        <div className="flex items-center gap-14 z-40 p-5 md:w-auto w-full ">
        <div className={`md:hidden inline-block`} onClick={()=> setOpen(!open)}>
          <BiMenu name={`${open?"close":"menu"}`} size={35} color={`${open ? "white": "black"}`} >
          </BiMenu>
        </div>
        <Link to="/">
        <img src={logo} alt="logo" className="md:block hidden h-11 "/>
        </Link>
        <div className={`md:hidden inline-block`}>
          <Link to={"/"} onClick={()=> setOpen(!open)}>
          <img src={logoMovilwhite} alt="logoM" className={`${open ? "inline-block h-11": "hidden"}`}/>
          </Link>
          <Link to="/">
          <img src={logo} alt="logoM" className={`${open ? "hidden": "inline-block h-11"}`}/>
          </Link>
        </div>
        
        </div>

        <ul className="md:flex hidden items-center gap-10 ">
          <li>
          <Link to="/pacientes" className="inline-block">
          <BiUser size={35} ></BiUser>
          </Link>
          </li>
          <li>
          <Link to="/mensajes" className="inline-block">
          <BiMessage size={35}></BiMessage>
          </Link>
          </li>
          <li>
          <Link to="/notificaciones" className="inline-block">
          <BiBell size={35}></BiBell>
          </Link>
          </li>
          <li>
          <Link to="/infectados" className="inline-block">
          <BiMap size={35}></BiMap>
          </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Link to="/" className="inline-block">
          <BiLogOut size={35}></BiLogOut>
          </Link>
        </div>
        {/* Para movil */}
        <ul className={`
                        md:hidden bg-[#1294B0] absolute w-full h-full bottom-0 py-24 pl-4
                        duration-500 ${open ? "left-0 ": "left-[-100%]"} `}>
          <li>
            <Link to="/" className="flex items-center gap-2 font-navbar-movil py-4" onClick={()=> setOpen(!open)}>
            <BiFileBlank size={35} ></BiFileBlank>
              Diagnósticos
            </Link>
          </li>
          <li>
            <Link to="/mensajes" className="flex items-center gap-2 font-navbar-movil py-4" onClick={()=> setOpen(!open)}>
            <BiMessage size={35} ></BiMessage>
             Mensajeria
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-2 font-navbar-movil py-4" onClick={()=> setOpen(!open)}>
            <BiBell size={35}></BiBell>
             Notificaciones
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-2 font-navbar-movil py-4" onClick={()=> setOpen(!open)}>
            <BiMapAlt size={35}></BiMapAlt>
             Zonas de Contagios
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-2 font-navbar-movil py-4" onClick={()=> setOpen(!open)}>
            <BiMapPin size={35}></BiMapPin>
             Revisar Alrededor
            </Link>
          </li>
          <div className="py-4">
            <Link to="/" className="flex items-center gap-2 font-navbar-movil" onClick={()=> setOpen(!open)}>
            <BiLogOut size={35}></BiLogOut>
             Cerrar Sesión
            </Link>
          </div>
        </ul>
        {/* Para movil */}  
      </div>
    </nav>
  )
}

export default Navbar