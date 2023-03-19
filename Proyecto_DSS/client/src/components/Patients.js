import React from 'react'
import {BiUser,BiInfoCircle,BiFile,BiEdit,BiTrashAlt,BiPlusCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom'
function Patients() {
  return (
    <div className=" p-5 flex justify-center flex-col items-center">
      <div>
      <div className=" flex items-center gap-2 font-semibold text-xl font-[inter] py-3">
      <BiUser size={40} color={"#1294B0"} ></BiUser>  
      Pacientes
      </div>
      <div className="box-table ">
        <div className="flex justify-between py-2">
        <Link to={"/"}>
          <BiPlusCircle size={40} color={"#1294B0"} ></BiPlusCircle>
        </Link>
        </div>
        
        <div className="overflow-auto rounded-lg shadow ">
          <table>
            <thead className="bg-[#1294B0] border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-base font-semibold tracking-wide text-center font-[inter] text-white">DNI</th>
                <th className="p-3 text-base font-semibold tracking-wide text-center font-[inter] text-white">Nombre Completo</th>
                <th className="p-3 text-base font-semibold tracking-wide text-center font-[inter] text-white">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 text-base text-black tracking-wide text-center items-center font-semibold">72540988</td>
                <td className="p-3 text-base text-black tracking-wide text-center items-center font-semibold">Ruben Andres Rodriguez Canahuire</td>
                <td className="p-3">
                <div className="flex items-center justify-center">
                  <Link to={"/"}> <BiInfoCircle size={30}></BiInfoCircle> </Link>
                  <Link to={"/"}> <BiFile       size={30}></BiFile>       </Link> 
                  <Link to={"/"}> <BiEdit       size={30}></BiEdit>       </Link>  
                  <Link to={"/"}> <BiTrashAlt   size={30}></BiTrashAlt>   </Link> 
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

export default Patients