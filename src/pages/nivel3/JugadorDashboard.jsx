import PlayerLayout from '../../components/PlayerLayout'
import MetricCard from '../../components/MetricCard'
import FifaCard from '../../components/FifaCard'
import Icon from '../../components/Icon'

export default function JugadorDashboard() {
  return (
    <PlayerLayout activeItem="dashboard" level={3}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        <MetricCard icon="assessment" value="2" label="Servicios Activos" />
        <MetricCard icon="description" value="3" label="Informes Disponibles" />
        <MetricCard icon="school" value="1" label="Curso Inscripto" />
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <div className="md:col-span-2 space-y-4 md:space-y-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-slate-100 p-4 md:p-6">
            <h3 className="font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Actividad Reciente</h3>
            <div className="space-y-4">
              {[
                {icon:'description',text:'Nuevo informe disponible: Análisis Marzo 2026',date:'Hace 2 días',color:'text-blue-600'},
                {icon:'check_circle',text:'Plan de Mercado completado',date:'Hace 1 semana',color:'text-green-600'},
                {icon:'school',text:'Inscripción confirmada: Curso Scouting Sep 2026',date:'Hace 2 semanas',color:'text-purple-600'},
                {icon:'payment',text:'Pago procesado: Plan de Mercado - \u20AC250',date:'Hace 3 semanas',color:'text-amber-600'},
              ].map((a,i)=>(
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50">
                  <Icon name={a.icon} className={`${a.color} mt-0.5`} />
                  <div className="flex-1">
                    <p className="text-sm text-[#191c1e]">{a.text}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{a.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-xl border border-slate-100 p-4 md:p-6">
            <h3 className="font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Mis Servicios</h3>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 md:p-4 bg-[#f2f4f7] rounded-lg">
                <div><h4 className="font-semibold text-sm">Plan de Mercado Personalizado</h4><p className="text-xs text-slate-500 mt-0.5">Contratado: 01/03/2026</p></div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 self-start sm:self-auto">Completado</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 md:p-4 bg-[#f2f4f7] rounded-lg">
                <div><h4 className="font-semibold text-sm">Informe Técnico</h4><p className="text-xs text-slate-500 mt-0.5">Contratado: 15/01/2026</p></div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800 self-start sm:self-auto">En progreso</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 md:space-y-6">
          <FifaCard name="Juan Perez" position="MCO" rating={76} stats={{RIT:72,REG:80,TIR:68,DEF:55,PAS:78,FIS:70}} level="semi" />
          <div className="bg-white rounded-xl border border-slate-100 p-4 md:p-6">
            <h3 className="font-bold text-[#0A1A3A] mb-3 text-sm">Código de Referido</h3>
            <div className="bg-[#f2f4f7] rounded-lg p-3 flex items-center justify-between">
              <code className="text-sm font-mono text-[#0A1A3A]">JUAN-ML2026</code>
              <button className="text-[#445d94] hover:text-[#0A1A3A]"><Icon name="content_copy" className="text-lg" /></button>
            </div>
            <p className="text-xs text-slate-500 mt-2">Comparte y obtén un 10% de descuento</p>
          </div>
        </div>
      </div>
    </PlayerLayout>
  )
}
