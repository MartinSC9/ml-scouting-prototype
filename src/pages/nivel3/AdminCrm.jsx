import AdminLayout from '../../components/AdminLayout'
import Icon from '../../components/Icon'

export default function AdminCrm() {
  const metrics = [
    { label: 'Total leads', value: '156', barW: '100%', barColor: 'bg-[#0A1A3A]' },
    { label: 'Contactados', value: '89', barW: '57%', barColor: 'bg-[#445d94]' },
    { label: 'En negociacion', value: '23', barW: '15%', barColor: 'bg-[#6483c6]' },
    { label: 'Convertidos', value: '18', barW: '11%', barColor: 'bg-[#2b467a]' },
  ]

  const headerActions = (
    <div className="flex items-center gap-4">
      <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#0A1A3A] rounded-lg font-medium text-sm shadow-sm hover:bg-[#e6e8eb] transition-colors border border-slate-200">
        <Icon name="filter_list" className="text-lg" /> Filtrar
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-[#0A1A3A] text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
        <Icon name="add" className="text-lg" /> Nuevo Prospecto
      </button>
    </div>
  )

  return (
    <AdminLayout activeItem="crm" title="CRM - Pipeline de Ventas" subtitle="Gestion estrategica de prospectos academicos" level={3} headerActions={headerActions}>
      {/* Metrics Bar */}
      <section className="px-8 py-6 grid grid-cols-5 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-[0_4px_20px_rgba(10,26,58,0.04)]">
            <p className="text-[10px] font-bold text-[#7583a9] uppercase tracking-widest mb-1">{m.label}</p>
            <p className="text-2xl font-bold text-[#0A1A3A]">{m.value}</p>
            <div className="w-full bg-[#f2f4f7] h-1 mt-2 rounded-full overflow-hidden">
              <div className={`${m.barColor} h-full`} style={{ width: m.barW }}></div>
            </div>
          </div>
        ))}
        <div className="bg-[#0A1A3A] p-4 rounded-xl shadow-lg">
          <p className="text-[10px] font-bold text-[#7583a9] uppercase tracking-widest mb-1">Tasa de conversion</p>
          <p className="text-2xl font-bold text-white">11.5%</p>
          <p className="text-[10px] text-[#7583a9] mt-2">+2.4% vs mes anterior</p>
        </div>
      </section>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden px-8 pb-8 flex gap-6">
        {/* Column 1: Nuevo Lead */}
        <div className="flex-none w-72 flex flex-col">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <h3 className="font-bold text-[#0A1A3A] text-sm" style={{ fontFamily: "'Noto Serif'" }}>Nuevo Lead</h3>
              <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">12</span>
            </div>
            <button className="text-slate-400 text-lg hover:text-[#0A1A3A]"><Icon name="more_horiz" /></button>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto pr-2">
            {[
              { source: 'Instagram', time: 'Hace 2h', name: 'Carlos Mendez', email: 'carlos.m@example.com', interest: 'Curso Scouting Pro', interestIcon: 'school', note: 'Interesado en becas para el programa intensivo de verano...' },
              { source: 'Web Form', time: 'Hace 5h', name: 'Andres Villa', email: 'avilla.scout@club.it', interest: 'Diagnostico Club', interestIcon: 'analytics', note: 'Consulta sobre metodologia de captacion para academia...' },
            ].map((lead, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400 cursor-pointer hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-[#d8e2ff] text-[#2b467a] rounded-full uppercase tracking-tighter">{lead.source}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{lead.time}</span>
                </div>
                <p className="font-bold text-[#0A1A3A] text-sm mb-1">{lead.name}</p>
                <p className="text-xs text-slate-500 mb-3 truncate">{lead.email}</p>
                <div className="flex items-center gap-2 text-[10px] font-semibold text-[#445d94] mb-3">
                  <Icon name={lead.interestIcon} className="text-xs" /> {lead.interest}
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 bg-[#f2f4f7] p-2 rounded leading-relaxed">{lead.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Contactado */}
        <div className="flex-none w-72 flex flex-col">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <h3 className="font-bold text-[#0A1A3A] text-sm" style={{ fontFamily: "'Noto Serif'" }}>Contactado</h3>
              <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">42</span>
            </div>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto pr-2">
            <div className="bg-[#e6e8eb] p-4 rounded-lg shadow-md border-l-4 border-amber-400 ring-2 ring-[#0A1A3A]/10 cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 bg-[#d8e2ff] text-[#2b467a] rounded-full uppercase tracking-tighter">Referido</span>
                <span className="text-[10px] text-slate-400 font-medium">Ayer</span>
              </div>
              <p className="font-bold text-[#0A1A3A] text-sm mb-1">Lucia Ferran</p>
              <p className="text-xs text-slate-500 mb-3 truncate">lucia.f@sportgroup.es</p>
              <div className="flex items-center gap-2 text-[10px] font-semibold text-[#445d94] mb-3">
                <Icon name="school" className="text-xs" /> Master Scouting
              </div>
              <p className="text-xs text-slate-600 line-clamp-2 bg-white p-2 rounded border border-slate-100 leading-relaxed">Llamada realizada. Pendiente de enviar folleto detallado de precios.</p>
            </div>
          </div>
        </div>

        {/* Column 3: En Negociacion */}
        <div className="flex-none w-72 flex flex-col">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <h3 className="font-bold text-[#0A1A3A] text-sm" style={{ fontFamily: "'Noto Serif'" }}>En Negociacion</h3>
              <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">8</span>
            </div>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto pr-2">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500 cursor-pointer hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 bg-[#d8e2ff] text-[#2b467a] rounded-full uppercase tracking-tighter">LinkedIn</span>
                <span className="text-[10px] text-slate-400 font-medium">3 dias</span>
              </div>
              <p className="font-bold text-[#0A1A3A] text-sm mb-1">Real Valladolid CF</p>
              <p className="text-xs text-slate-500 mb-3 truncate">cantera@realvalladolid.es</p>
              <div className="flex items-center gap-2 text-[10px] font-semibold text-[#445d94] mb-3">
                <Icon name="groups" className="text-xs" /> Asesoria Integral
              </div>
              <p className="text-xs text-slate-600 line-clamp-2 bg-[#f2f4f7] p-2 rounded leading-relaxed">Revisando propuesta de formacion para 15 tecnicos de cantera.</p>
            </div>
          </div>
        </div>

        {/* Column 4: Convertido */}
        <div className="flex-none w-72 flex flex-col">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <h3 className="font-bold text-[#0A1A3A] text-sm" style={{ fontFamily: "'Noto Serif'" }}>Convertido</h3>
              <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">18</span>
            </div>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto pr-2 opacity-60">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500 border-dashed">
              <p className="font-bold text-[#0A1A3A] text-sm mb-1">Jaime Rossy</p>
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                <Icon name="verified" className="text-xs" /> Pago completado
              </div>
            </div>
          </div>
        </div>

        {/* Column 5: Perdido */}
        <div className="flex-none w-72 flex flex-col">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              <h3 className="font-bold text-[#0A1A3A] text-sm" style={{ fontFamily: "'Noto Serif'" }}>Perdido</h3>
              <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">3</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
