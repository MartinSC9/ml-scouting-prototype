import { Link } from 'react-router-dom'
import AdminLayout from '../../components/AdminLayout'
import Icon from '../../components/Icon'

const players = [
  {n:'Juan Perez',age:22,pos:'Mediocampista',club:'Racing Club',nivel:'Semi Pro',nivelBg:'bg-[#7bf1fc] text-[#006e75]',pais:'Argentina',srv:2,link:true},
  {n:'Lucas Garcia',age:19,pos:'Delantero',club:'Independiente',nivel:'Amateur',nivelBg:'bg-[#d0e4ff] text-[#0f2a43]',pais:'Colombia',srv:1},
  {n:'Martin Rodriguez',age:25,pos:'Defensor',club:'U. Catolica',nivel:'Semi Pro',nivelBg:'bg-[#7bf1fc] text-[#006e75]',pais:'Chile',srv:1},
  {n:'Diego Fernandez',age:20,pos:'Arquero',club:'Pumas UNAM',nivel:'Amateur',nivelBg:'bg-[#d0e4ff] text-[#0f2a43]',pais:'Mexico',srv:0},
  {n:'Andres Lopez',age:28,pos:'Extremo',club:'Betis',nivel:'Profesional',nivelBg:'bg-emerald-100 text-emerald-800',pais:'Espana',srv:3},
  {n:'Santiago Morales',age:21,pos:'Mediocampista',club:'Millonarios',nivel:'Semi Pro',nivelBg:'bg-[#7bf1fc] text-[#006e75]',pais:'Colombia',srv:1},
  {n:'Federico Torres',age:24,pos:'Lateral',club:'River Plate',nivel:'Semi Pro',nivelBg:'bg-[#7bf1fc] text-[#006e75]',pais:'Argentina',srv:2},
  {n:'Pablo Herrera',age:17,pos:'Delantero',club:'Boca Juniors',nivel:'Amateur',nivelBg:'bg-[#d0e4ff] text-[#0f2a43]',pais:'Argentina',srv:0},
]

export default function AdminJugadores() {
  return (
    <AdminLayout activeItem="jugadores" title="Jugadores" subtitle="247 jugadores registrados" level={2}
      headerActions={
        <button className="bg-[#001529] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-transform active:scale-95 flex items-center gap-2">
          <Icon name="add" className="text-lg" /> Agregar Jugador
        </button>
      }>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-[#43474d] text-xl" />
          <input type="text" placeholder="Buscar jugador..." className="w-full pl-10 pr-4 py-2.5 border border-[#c3c6ce] rounded-lg text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]"/>
        </div>
        <select className="border border-[#c3c6ce] rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#006970]">
          <option>Posicion</option><option>Arquero</option><option>Defensor</option><option>Mediocampista</option><option>Delantero</option>
        </select>
        <select className="border border-[#c3c6ce] rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#006970]">
          <option>Nivel</option><option>Profesional</option><option>Semi profesional</option><option>Semi amateur</option><option>Amateur</option>
        </select>
        <select className="border border-[#c3c6ce] rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#006970]">
          <option>Nacionalidad</option><option>Argentina</option><option>Colombia</option><option>Chile</option><option>Mexico</option><option>Espana</option>
        </select>
        <select className="border border-[#c3c6ce] rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#006970]">
          <option>Todos</option><option>Con servicio activo</option><option>Sin servicio</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#c3c6ce]/30 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#c3c6ce]/20 bg-[#f2f4f7]">
              {['Nombre','Edad','Posicion','Club','Nivel','Pais','Servicios','Acciones'].map(h=>(
                <th key={h} className={`py-3 px-4 font-semibold text-[#43474d] ${h==='Servicios'||h==='Acciones'?'text-center':'text-left'}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players.map((p,i)=>(
              <tr key={i} className="border-b border-[#c3c6ce]/10 hover:bg-[#f2f4f7]/50">
                <td className="py-3 px-4 font-medium">{p.n}</td>
                <td className="py-3 px-4 text-[#43474d]">{p.age}</td>
                <td className="py-3 px-4 text-[#43474d]">{p.pos}</td>
                <td className="py-3 px-4 text-[#43474d]">{p.club}</td>
                <td className="py-3 px-4"><span className={`text-xs px-2 py-0.5 rounded-full ${p.nivelBg}`}>{p.nivel}</span></td>
                <td className="py-3 px-4 text-[#43474d]">{p.pais}</td>
                <td className="py-3 px-4 text-center">{p.srv}</td>
                <td className="py-3 px-4 text-center flex items-center justify-center gap-1">
                  {p.link ? (
                    <Link to="/nivel-2/admin/jugador-detalle" className="p-1.5 text-[#43474d] hover:text-[#006970] rounded-lg hover:bg-slate-50"><Icon name="visibility" className="text-lg" /></Link>
                  ) : (
                    <button className="p-1.5 text-[#43474d] hover:text-[#006970] rounded-lg hover:bg-slate-50"><Icon name="visibility" className="text-lg" /></button>
                  )}
                  <button className="p-1.5 text-[#43474d] hover:text-[#006970] rounded-lg hover:bg-slate-50"><Icon name="edit" className="text-lg" /></button>
                  <button className="p-1.5 text-[#43474d] hover:text-red-500 rounded-lg hover:bg-slate-50"><Icon name="delete" className="text-lg" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button className="px-3 py-1.5 text-sm rounded-lg bg-[#001529] text-white font-medium">1</button>
        <button className="px-3 py-1.5 text-sm rounded-lg text-[#43474d] hover:bg-slate-100">2</button>
        <button className="px-3 py-1.5 text-sm rounded-lg text-[#43474d] hover:bg-slate-100">3</button>
        <span className="px-2 text-[#43474d]">...</span>
        <button className="px-3 py-1.5 text-sm rounded-lg text-[#43474d] hover:bg-slate-100">25</button>
      </div>
    </AdminLayout>
  )
}
