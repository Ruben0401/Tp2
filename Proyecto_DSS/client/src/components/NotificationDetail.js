import React from 'react'
import {BiBell,BiLeftArrowCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Map from '../components/Map'

function NotificationDetail() {
    const tab = <>&nbsp;</>;
  return (
    <div className=" p-5 flex justify-center flex-col items-center">
      <div>
      <div className=" flex items-center gap-2 font-semibold text-xl font-[inter] py-2">
      <BiBell size={40} color={"#1294B0"} ></BiBell>  
      Alerta
      </div>
      <div className="box-table ">
        <div className="flex justify-between py-5">
            <div>
            </div>
            <Link to={"/notificaciones"}>
              <BiLeftArrowCircle size={40} color={"#1294B0"} ></BiLeftArrowCircle>
            </Link>
        </div>
        <div className="py-5">
            <div className=" flex font-semibold text-xl font-[inter] ">
                El paciente{tab}<div> 72540988</div>{tab}
                se puso en contacto cercano con paciente{tab}<div>42088975</div>{tab}
                a las 13:00 Horas el dia 23/02/2023
            </div>
            <br>
            </br>
            <div className=" flex font-bold text-xl font-[inter] " >
                Resultado:
            </div>
            <div className=" flex font-semibold text-xl font-[inter] ">
                El paciente{tab}<div> 72540988</div>{tab}
                puede contraer la enfermedad del paciente{tab}<div>42088975</div>{tab}
            </div>
        </div>
        <div className="w-full">
        <Map></Map>
        </div>

      </div>
      </div>
    </div>
  )
}

export default NotificationDetail