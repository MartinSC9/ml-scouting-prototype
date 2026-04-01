import AdminLayout from '../../components/AdminLayout'
import Icon from '../../components/Icon'

const servicios = [
  {
    id: 1,
    nombre: 'Plan de Mercado Personalizado',
    precio: '€250',
    estado: 'activo',
    vendidos: 18,
    desc: 'Análisis completo del mercado para posicionar al jugador ante clubes objetivo.',
  },
  {
    id: 2,
    nombre: 'Informe Técnico Individual',
    precio: '€150',
    estado: 'activo',
    vendidos: 32,
    desc: 'Evaluación detallada de rendimiento con métricas y recomendaciones.',
  },
  {
    id: 3,
    nombre: 'Sesión de Scouting en Vivo',
    precio: '€100',
    estado: 'activo',
    vendidos: 12,
    desc: 'Sesión personalizada de análisis en vivo con un scout profesional.',
  },
]

export default function AdminServicios() {
  return (
    <AdminLayout activeItem="servicios" title="Servicios" subtitle="Gestión de servicios para jugadores">
      <div className="p-4 md:p-8 space-y-4 md:space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-white rounded-xl border border-slate-100 p-4 md:p-5">
            <p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase tracking-wider">Servicios Activos</p>
            <p className="text-xl md:text-2xl font-bold text-[#0A1A3A] mt-1">3</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 p-4 md:p-5">
            <p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase tracking-wider">Total Vendidos</p>
            <p className="text-xl md:text-2xl font-bold text-[#0A1A3A] mt-1">62</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 p-4 md:p-5">
            <p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase tracking-wider">Ingresos Totales</p>
            <p className="text-xl md:text-2xl font-bold text-[#0A1A3A] mt-1">€10,500</p>
          </div>
        </div>

        {/* Service cards */}
        <div className="space-y-3 md:space-y-4">
          {servicios.map((s) => (
            <div key={s.id} className="bg-white rounded-xl border border-slate-100 p-4 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#006970]/10 flex items-center justify-center shrink-0">
                  <Icon name="handshake" className="text-[#006970] text-xl md:text-2xl" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-[#0A1A3A] text-sm md:text-base">{s.nombre}</h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-0.5">{s.desc}</p>
                  <div className="flex items-center gap-3 md:gap-4 mt-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase">{s.estado}</span>
                    <span className="text-xs text-slate-400">{s.vendidos} vendidos</span>
                  </div>
                </div>
              </div>
              <div className="text-left sm:text-right flex sm:flex-col items-center sm:items-end gap-3 sm:gap-0">
                <p className="text-lg md:text-xl font-bold text-[#0A1A3A]">{s.precio}</p>
                <button className="mt-0 sm:mt-2 text-xs text-[#006970] font-semibold hover:underline">Editar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}
