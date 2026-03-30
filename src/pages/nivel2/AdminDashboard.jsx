import { Link } from 'react-router-dom'
import AdminLayout from '../../components/AdminLayout'
import MetricCard from '../../components/MetricCard'
import Icon from '../../components/Icon'

export default function AdminDashboard() {
  return (
    <AdminLayout activeItem="dashboard" title="Dashboard" subtitle="Lunes, 24 de Marzo 2026" level={2} headerActions={<p className="text-sm text-[#43474d]">Hola, <strong className="text-[#191c1e]">Marco</strong></p>}>

      {/* Metric Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <MetricCard icon="groups" value="247" label="Jugadores Registrados" change="+12%" />
        <MetricCard icon="design_services" value="18" label="Servicios Activos" change="+5%" />
        <MetricCard icon="school" value="83" label="Leads Curso Septiembre" change="+22%" />
        <MetricCard icon="euro" value={<>&euro;2,400</>} label="Ingresos del Mes" change="+15%" />
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-xl p-6 border border-[#c3c6ce]/30 mb-8">
        <h3 className="font-semibold text-[#191c1e] mb-6">Registros por mes</h3>
        <div className="flex items-end gap-4 h-48">
          {[{m:'Oct',h:'40%'},{m:'Nov',h:'55%'},{m:'Dic',h:'45%'},{m:'Ene',h:'70%'},{m:'Feb',h:'60%'},{m:'Mar',h:'90%',current:true}].map((b,i)=>(
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className={`w-full ${b.current?'bg-[#006970]':'bg-[#001529]'} rounded-t-lg`} style={{height:b.h}}></div>
              <span className={`text-xs text-[#43474d] ${b.current?'font-semibold':''}`}>{b.m}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pie Charts */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-[#c3c6ce]/30">
          <h3 className="font-semibold text-[#191c1e] mb-6">Jugadores por nivel</h3>
          <div className="flex items-center gap-8">
            <svg viewBox="0 0 36 36" className="w-32 h-32 flex-shrink-0">
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e0e3e6" strokeWidth="3"/>
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#001529" strokeWidth="3" strokeDasharray="60 40" strokeDashoffset="25" strokeLinecap="round"/>
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#006970" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="65" strokeLinecap="round"/>
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#6fd6e0" strokeWidth="3" strokeDasharray="15 85" strokeDashoffset="40" strokeLinecap="round"/>
            </svg>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#001529]"></span> Amateur 60%</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#006970]"></span> Semi Pro 25%</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#6fd6e0]"></span> Profesional 15%</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[#c3c6ce]/30">
          <h3 className="font-semibold text-[#191c1e] mb-6">Jugadores por posicion</h3>
          <div className="flex items-center gap-8">
            <svg viewBox="0 0 36 36" className="w-32 h-32 flex-shrink-0">
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e0e3e6" strokeWidth="3"/>
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#001529" strokeWidth="3" strokeDasharray="35 65" strokeDashoffset="25" strokeLinecap="round"/>
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#006970" strokeWidth="3" strokeDasharray="30 70" strokeDashoffset="60" strokeLinecap="round"/>
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#6fd6e0" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="30" strokeLinecap="round"/>
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#b0c9e9" strokeWidth="3" strokeDasharray="10 90" strokeDashoffset="5" strokeLinecap="round"/>
            </svg>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#001529]"></span> Mediocampista 35%</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#006970]"></span> Delantero 30%</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#6fd6e0]"></span> Defensor 25%</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#b0c9e9]"></span> Arquero 10%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Players */}
      <div className="bg-white rounded-xl border border-[#c3c6ce]/30 mb-8 overflow-hidden">
        <div className="p-6 border-b border-[#c3c6ce]/20">
          <h3 className="font-semibold text-[#191c1e]">Ultimos jugadores registrados</h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#c3c6ce]/20 bg-[#f2f4f7]">
              {['Nombre','Posicion','Nivel','Pais','Fecha registro','Accion'].map(h=>(
                <th key={h} className="text-left py-3 px-5 font-semibold text-[#43474d]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              {n:'Juan Perez',pos:'Mediocampista',nivel:'Semi Pro',nivelBg:'bg-[#7bf1fc] text-[#006e75]',pais:'Argentina',fecha:'24/03/2026',link:true},
              {n:'Lucas Garcia',pos:'Delantero',nivel:'Amateur',nivelBg:'bg-[#d0e4ff] text-[#0f2a43]',pais:'Colombia',fecha:'23/03/2026'},
              {n:'Martin Rodriguez',pos:'Defensor',nivel:'Semi Pro',nivelBg:'bg-[#7bf1fc] text-[#006e75]',pais:'Chile',fecha:'22/03/2026'},
              {n:'Diego Fernandez',pos:'Arquero',nivel:'Amateur',nivelBg:'bg-[#d0e4ff] text-[#0f2a43]',pais:'Mexico',fecha:'21/03/2026'},
              {n:'Andres Lopez',pos:'Extremo',nivel:'Profesional',nivelBg:'bg-emerald-100 text-emerald-800',pais:'Espana',fecha:'20/03/2026'},
            ].map((p,i)=>(
              <tr key={i} className="border-b border-[#c3c6ce]/10 hover:bg-[#f2f4f7]/50">
                <td className="py-3 px-5 font-medium">{p.n}</td>
                <td className="py-3 px-5 text-[#43474d]">{p.pos}</td>
                <td className="py-3 px-5"><span className={`text-xs px-2 py-0.5 rounded-full ${p.nivelBg}`}>{p.nivel}</span></td>
                <td className="py-3 px-5 text-[#43474d]">{p.pais}</td>
                <td className="py-3 px-5 text-[#43474d]">{p.fecha}</td>
                <td className="py-3 px-5">
                  {p.link ? <Link to="/nivel-2/admin/jugador-detalle" className="text-[#006970] hover:underline text-sm">Ver</Link> : <button className="text-[#006970] hover:underline text-sm">Ver</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Payments */}
      <div className="bg-white rounded-xl border border-[#c3c6ce]/30 overflow-hidden">
        <div className="p-6 border-b border-[#c3c6ce]/20">
          <h3 className="font-semibold text-[#191c1e]">Ultimos pagos</h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#c3c6ce]/20 bg-[#f2f4f7]">
              {['Jugador','Servicio','Monto','Fecha','Estado'].map(h=>(
                <th key={h} className="text-left py-3 px-5 font-semibold text-[#43474d]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              {j:'Juan Perez',s:'Plan de Mercado',m:'\u20AC200',f:'01/03/2026',e:'Completado'},
              {j:'Lucas Garcia',s:'Analisis de Rendimiento',m:'\u20AC80',f:'28/02/2026',e:'Completado'},
              {j:'Martin Rodriguez',s:'Plan de Mercado',m:'\u20AC200',f:'25/02/2026',e:'Pendiente'},
              {j:'Diego Fernandez',s:'Video Reel',m:'\u20AC120',f:'20/02/2026',e:'Completado'},
              {j:'Andres Lopez',s:'Analisis de Rendimiento',m:'\u20AC80',f:'15/02/2026',e:'Completado'},
            ].map((p,i)=>(
              <tr key={i} className="border-b border-[#c3c6ce]/10">
                <td className="py-3 px-5 font-medium">{p.j}</td>
                <td className="py-3 px-5 text-[#43474d]">{p.s}</td>
                <td className="py-3 px-5 font-medium">{p.m}</td>
                <td className="py-3 px-5 text-[#43474d]">{p.f}</td>
                <td className="py-3 px-5">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${p.e==='Completado'?'bg-emerald-100 text-emerald-800':'bg-amber-100 text-amber-800'}`}>{p.e}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}
