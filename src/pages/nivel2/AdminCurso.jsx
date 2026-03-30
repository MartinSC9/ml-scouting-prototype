import AdminLayout from '../../components/AdminLayout'
import MetricCard from '../../components/MetricCard'
import Icon from '../../components/Icon'

const leads = [
  {n:'Carlos Mendez',email:'carlos@email.com',pais:'Argentina',ocu:'Entrenador',fecha:'24/03/2026',estado:'Nuevo',estadoBg:'bg-blue-50 text-blue-800'},
  {n:'Laura Fernandez',email:'laura@email.com',pais:'Espana',ocu:'Periodista',fecha:'23/03/2026',estado:'Contactado',estadoBg:'bg-amber-50 text-amber-800'},
  {n:'Roberto Diaz',email:'roberto@email.com',pais:'Mexico',ocu:'Analista deportivo',fecha:'22/03/2026',estado:'Nuevo',estadoBg:'bg-blue-50 text-blue-800'},
  {n:'Ana Torres',email:'ana@email.com',pais:'Colombia',ocu:'Jugadora retirada',fecha:'21/03/2026',estado:'Nuevo',estadoBg:'bg-blue-50 text-blue-800'},
  {n:'Pedro Gutierrez',email:'pedro@email.com',pais:'Chile',ocu:'Preparador fisico',fecha:'20/03/2026',estado:'Contactado',estadoBg:'bg-amber-50 text-amber-800'},
  {n:'Sofia Ramirez',email:'sofia@email.com',pais:'Argentina',ocu:'Estudiante',fecha:'19/03/2026',estado:'Nuevo',estadoBg:'bg-blue-50 text-blue-800'},
  {n:'Miguel Sanchez',email:'miguel@email.com',pais:'Espana',ocu:'Director tecnico',fecha:'18/03/2026',estado:'Nuevo',estadoBg:'bg-blue-50 text-blue-800'},
  {n:'Valentina Cruz',email:'valentina@email.com',pais:'Colombia',ocu:'Representante',fecha:'17/03/2026',estado:'Descartado',estadoBg:'bg-red-50 text-red-800'},
]

export default function AdminCurso() {
  return (
    <AdminLayout activeItem="curso" title="Curso de Scouting - Septiembre 2026" subtitle="" level={2}
      headerActions={
        <button className="border border-[#c3c6ce] text-[#191c1e] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
          <Icon name="download" className="text-lg" /> Exportar lista (CSV)
        </button>
      }>

      {/* Metric Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <MetricCard icon="hourglass_top" value="83" label="En lista de espera" />
        <MetricCard icon="event_seat" value="30" label="Cupos disponibles" />
        <MetricCard icon="how_to_reg" value="0" label="Inscriptos confirmados" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#c3c6ce]/30 overflow-hidden">
        <div className="p-6 border-b border-[#c3c6ce]/20">
          <h3 className="font-semibold text-[#191c1e]">Leads del curso</h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#c3c6ce]/20 bg-[#f2f4f7]">
              {['Nombre','Email','Pais','Ocupacion','Fecha','Estado','Acciones'].map(h=>(
                <th key={h} className={`py-3 px-4 font-semibold text-[#43474d] ${h==='Acciones'?'text-center':'text-left'}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leads.map((l,i)=>(
              <tr key={i} className="border-b border-[#c3c6ce]/10 hover:bg-[#f2f4f7]/50">
                <td className="py-3 px-4 font-medium">{l.n}</td>
                <td className="py-3 px-4 text-[#43474d]">{l.email}</td>
                <td className="py-3 px-4 text-[#43474d]">{l.pais}</td>
                <td className="py-3 px-4 text-[#43474d]">{l.ocu}</td>
                <td className="py-3 px-4 text-[#43474d]">{l.fecha}</td>
                <td className="py-3 px-4">
                  <select className={`text-xs border border-[#c3c6ce] rounded-lg px-2 py-1 ${l.estadoBg} font-semibold focus:ring-1 focus:ring-[#006970]`} defaultValue={l.estado}>
                    <option>Nuevo</option><option>Contactado</option><option>Confirmado</option><option>Descartado</option>
                  </select>
                </td>
                <td className="py-3 px-4 text-center flex items-center justify-center gap-1">
                  <button className="p-1.5 text-[#43474d] hover:text-[#006970] rounded-lg hover:bg-slate-50"><Icon name="mail" className="text-lg" /></button>
                  <button className="p-1.5 text-[#43474d] hover:text-[#006970] rounded-lg hover:bg-slate-50"><Icon name="visibility" className="text-lg" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}
