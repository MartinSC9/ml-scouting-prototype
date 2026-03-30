import AdminLayout from '../../components/AdminLayout'
import Icon from '../../components/Icon'
import StatusBadge from '../../components/StatusBadge'

const leads = [
  {n:'Matias Gonzalez',email:'matias@email.com',wa:'+54 9 11 5555-1111',age:20,pos:'Delantero',nivel:'Semi Pro',dif:'Visibilidad',srv:'Plan de Mercado',fecha:'24/03/2026',estado:'nuevo'},
  {n:'Joaquin Alvarez',email:'joaquin@email.com',wa:'+54 9 351 555-2222',age:18,pos:'Mediocampista',nivel:'Amateur',dif:'Rendimiento',srv:'Analisis de Rendimiento',fecha:'23/03/2026',estado:'nuevo'},
  {n:'Sebastian Rojas',email:'seba@email.com',wa:'+56 9 5555 3333',age:24,pos:'Defensor',nivel:'Semi Pro',dif:'Exposicion',srv:'Video Reel Profesional',fecha:'22/03/2026',estado:'contactado'},
  {n:'Tomas Herrera',email:'tomas@email.com',wa:'+57 320 555 4444',age:22,pos:'Extremo',nivel:'Profesional',dif:'Transferencia',srv:'Plan de Mercado',fecha:'21/03/2026',estado:'convertido'},
  {n:'Nicolas Vargas',email:'nico@email.com',wa:'+52 55 5555 5555',age:19,pos:'Arquero',nivel:'Amateur',dif:'Tecnica',srv:'Analisis de Rendimiento',fecha:'20/03/2026',estado:'nuevo'},
  {n:'Facundo Moreno',email:'facundo@email.com',wa:'+54 9 11 5555-6666',age:21,pos:'Mediocampista',nivel:'Semi Pro',dif:'Visibilidad',srv:'Video Reel Profesional',fecha:'19/03/2026',estado:'contactado'},
  {n:'Ignacio Paz',email:'ignacio@email.com',wa:'+34 612 555 777',age:26,pos:'Lateral',nivel:'Profesional',dif:'Transferencia',srv:'Plan de Mercado',fecha:'18/03/2026',estado:'convertido'},
  {n:'Emiliano Castro',email:'emiliano@email.com',wa:'+54 9 261 555-8888',age:17,pos:'Delantero',nivel:'Amateur',dif:'Rendimiento',srv:'Analisis de Rendimiento',fecha:'17/03/2026',estado:'nuevo'},
]

export default function AdminLeads() {
  return (
    <AdminLayout activeItem="leads" title="Diagnosticos Completados" subtitle="" level={2}
      headerActions={
        <button className="border border-[#c3c6ce] text-[#191c1e] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
          <Icon name="download" className="text-lg" /> Exportar (CSV)
        </button>
      }>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <select className="border border-[#c3c6ce] rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#006970]">
          <option>Servicio recomendado</option><option>Plan de Mercado</option><option>Analisis de Rendimiento</option><option>Video Reel Profesional</option><option>Asesoria para Clubes</option>
        </select>
        <select className="border border-[#c3c6ce] rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#006970]">
          <option>Estado</option><option>Nuevo</option><option>Contactado</option><option>Convertido</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#c3c6ce]/30 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#c3c6ce]/20 bg-[#f2f4f7]">
              {['Nombre','Email','WhatsApp','Edad','Posicion','Nivel','Dificultad','Servicio recomendado','Fecha','Estado'].map(h=>(
                <th key={h} className="text-left py-3 px-4 font-semibold text-[#43474d] whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leads.map((l,i)=>(
              <tr key={i} className="border-b border-[#c3c6ce]/10 hover:bg-[#f2f4f7]/50">
                <td className="py-3 px-4 font-medium whitespace-nowrap">{l.n}</td>
                <td className="py-3 px-4 text-[#43474d]">{l.email}</td>
                <td className="py-3 px-4 text-[#43474d]">{l.wa}</td>
                <td className="py-3 px-4 text-[#43474d]">{l.age}</td>
                <td className="py-3 px-4 text-[#43474d]">{l.pos}</td>
                <td className="py-3 px-4 text-[#43474d]">{l.nivel}</td>
                <td className="py-3 px-4 text-[#43474d]">{l.dif}</td>
                <td className="py-3 px-4 text-[#43474d]">{l.srv}</td>
                <td className="py-3 px-4 text-[#43474d] whitespace-nowrap">{l.fecha}</td>
                <td className="py-3 px-4"><StatusBadge status={l.estado} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}
