import React from 'react'
import {BiInfoCircle,BiBell} from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Notifications() {
  return (
    <div className=" p-5 flex justify-center flex-col items-center">
      <div>
      <div className=" flex items-center gap-2 font-semibold text-xl font-[inter] py-3">
      <BiBell size={40} color={"#1294B0"} ></BiBell>  
      Notificaciones
      </div>
      <div className="box-table ">
        <div className="overflow-auto rounded-lg shadow ">
          <table>
            <thead className="bg-[#1294B0] border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-base font-semibold tracking-wide text-center font-[inter] text-white">Descripción</th>
                <th className="p-3 text-base font-semibold tracking-wide text-center font-[inter] text-white">Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 text-base text-black tracking-wide text-center items-center font-semibold">El Paciente Pitter se relacionó con un usuario contagiado</td>
                <td className="p-3">
                <div className="flex items-center justify-center">
                  <Link to={"/notificaciones/id"}> <BiInfoCircle size={30}></BiInfoCircle> </Link>
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

export default Notifications