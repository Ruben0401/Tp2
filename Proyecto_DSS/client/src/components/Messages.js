import React from 'react'
import {BiMessage,BiPlusCircle,BiMessageDots} from 'react-icons/bi'
import { Link } from 'react-router-dom'
function Messages() {
  return (
    <div className=" p-5 flex justify-center flex-col items-center">
      <div>
      <div className=" flex items-center gap-2 font-semibold text-xl font-[inter] py-3">
      <BiMessage size={40} color={"#1294B0"} ></BiMessage>  
      Mensajes
      </div>
      <div className="box-table ">
        <div className="flex justify-between py-2">
        <Link to={"/"}>
          <BiPlusCircle size={40} color={"#1294B0"} ></BiPlusCircle>
        </Link>
        </div>

        <div className="overflow-auto rounded-lg shadow md:block hidden ">
          <table>
            <thead className="bg-[#1294B0] border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-base font-semibold tracking-wide text-center font-[inter] text-white">DNI</th>
                <th className="p-3 text-base font-semibold tracking-wide text-center font-[inter] text-white">Nombre Completo</th>
                <th className="p-3 text-base font-semibold tracking-wide text-center font-[inter] text-white">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-center">
                <td className="p-3 text-base text-black tracking-wide text-center items-center font-semibold">72540988</td>
                <td className="p-3 text-base text-black tracking-wide text-center items-center font-semibold">Ruben Andres Rodriguez Canahuire</td>
                <td className="p-3">
                <div className="flex justify-center items-center">
                  <Link to={"/"}> <BiMessageDots size={30} ></BiMessageDots> </Link>
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 gap-2 md:hidden w-full">
          <div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <div className=" font-bold">72540988</div>
              <div className="flex flex-col justify-center  items-center gap-1 text-base">
              <div className="font-bold">DR. Ruben Andres Rodriguez Canahuire</div>
              <div ><Link to={"/"}> <BiMessageDots size={30} color={"#1294B0"} ></BiMessageDots> </Link></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Messages