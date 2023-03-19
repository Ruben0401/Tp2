import React from 'react'
import {BiPlusCircle,BiMap,BiMapAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'

function InfectedLocation() {
  return (
    <div className=" p-5 flex justify-center flex-col items-center">
    <div>
    <div className=" flex items-center gap-2 font-semibold text-xl font-[inter] py-3">
    <BiMap size={40} color={"#1294B0"} ></BiMap>  
    Localización de Pacientes Contagiados
    </div>
    <div className="box-table ">
      
      <div className="overflow-auto rounded-lg shadow ">
        <table>
          <thead className="bg-[#1294B0] border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-base font-semibold tracking-wide text-center font-[inter] text-white">DNI</th>
              <th className="p-3 text-base font-semibold tracking-wide text-center font-[inter] text-white">Nombre Completo</th>
              <th className="p-3 text-base font-semibold tracking-wide text-center font-[inter] text-white">Ver Ubicación</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 text-base text-black tracking-wide text-center items-center font-semibold">72540988</td>
              <td className="p-3 text-base text-black tracking-wide text-center items-center font-semibold">Ruben Andres Rodriguez Canahuire</td>
              <td className="p-3">
              <div className="flex items-center justify-center">
                <Link to={"/"}> <BiMapAlt size={30}></BiMapAlt> </Link>
              </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </div>
  )
}

export default InfectedLocation