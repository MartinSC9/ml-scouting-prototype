import AdminLayout from '../../components/AdminLayout'
import Icon from '../../components/Icon'

export default function AdminFinanzas() {
  const transactions = [
    { date: '15 Oct 2026', player: 'Mateo Lopez', service: 'Plan de Mercado', amount: '\u20AC250', method: 'Tarjeta', status: 'Pagado', statusBg: 'bg-green-50 text-green-700' },
    { date: '12 Oct 2026', player: 'Lucas Martinez', service: 'Representación', amount: '\u20AC500', method: 'PayPal', status: 'Pagado', statusBg: 'bg-green-50 text-green-700' },
    { date: '10 Oct 2026', player: 'Santiago Ruiz', service: 'Informe Técnico', amount: '\u20AC150', method: 'Tarjeta', status: 'Pagado', statusBg: 'bg-green-50 text-green-700' },
    { date: '8 Oct 2026', player: 'Andres Ramirez', service: 'Plan de Mercado', amount: '\u20AC250', method: 'Transferencia', status: 'Pendiente', statusBg: 'bg-yellow-50 text-yellow-700' },
    { date: '5 Oct 2026', player: 'Federico Gomez', service: 'Representación', amount: '\u20AC500', method: 'Tarjeta', status: 'Pagado', statusBg: 'bg-green-50 text-green-700' },
  ]

  const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
  const barHeights = ['40%','35%','50%','45%','55%','60%','70%','65%','80%','95%','20%','10%']

  const headerActions = (
    <div className="flex items-center gap-2 md:gap-3">
      <button className="hidden sm:flex border border-slate-200 text-slate-600 px-3 md:px-4 py-2 rounded-lg text-sm font-medium items-center gap-1"><Icon name="download" className="text-lg" /><span className="hidden md:inline">Exportar CSV</span><span className="md:hidden">CSV</span></button>
      <button className="hidden md:flex border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium items-center gap-1"><Icon name="download" className="text-lg" />Exportar Excel</button>
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 flex items-center justify-center"><Icon name="person" className="text-slate-400" /></div>
    </div>
  )

  return (
    <AdminLayout activeItem="finanzas" title="Pagos / Finanzas" subtitle="Resumen financiero" level={3} headerActions={headerActions}>
      <section className="p-4 md:p-8 space-y-6 md:space-y-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            ['Ingresos Totales','\u20AC24,800','+18% vs año anterior','text-green-600'],
            ['Ingresos Este Mes','\u20AC4,800','+32% vs mes anterior','text-green-600'],
            ['Promedio Mensual','\u20AC2,066','Últimos 12 meses','text-slate-500'],
            ['Servicio Más Vendido','Plan de Mercado','42% del total','text-slate-500'],
          ].map(([label,value,sub,subColor]) => (
            <div key={label} className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-slate-100">
              <p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">{label}</p>
              <p className="text-lg md:text-2xl font-bold text-[#0A1A3A]">{value}</p>
              <span className={`text-[10px] md:text-xs ${subColor} font-medium`}>{sub}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Bar Chart */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#0A1A3A] mb-4 md:mb-6 text-sm md:text-base">Ingresos por mes</h3>
            <div className="h-36 md:h-48 flex items-end justify-between gap-1 px-1 md:px-2">
              {months.map((m, i) => (
                <div key={m} className="flex flex-col items-center gap-1 flex-1">
                  <div className={`w-full rounded-t hover:bg-[#a7c0fd] transition ${i === 9 ? 'bg-[#0A1A3A]' : i >= 10 ? 'bg-slate-200' : 'bg-[#a7c0fd]/60'}`} style={{ height: barHeights[i] }}></div>
                  <span className="text-[7px] md:text-[9px] text-slate-400">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donut Chart */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#0A1A3A] mb-4 md:mb-6 text-sm md:text-base">Ingresos por servicio</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
              <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-40 md:h-40 shrink-0">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#e0e3e6" strokeWidth="30" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#0A1A3A" strokeWidth="30" strokeDasharray="211 503" strokeDashoffset="0" transform="rotate(-90 100 100)" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#445d94" strokeWidth="30" strokeDasharray="151 503" strokeDashoffset="-211" transform="rotate(-90 100 100)" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#a7c0fd" strokeWidth="30" strokeDasharray="141 503" strokeDashoffset="-362" transform="rotate(-90 100 100)" />
                <text x="100" y="95" textAnchor="middle" fill="#0A1A3A" fontSize="20" fontWeight="bold">{'\u20AC'}24.8k</text>
                <text x="100" y="115" textAnchor="middle" fill="#75777f" fontSize="10">Total</text>
              </svg>
              <div className="space-y-2 md:space-y-3">
                {[['#0A1A3A','Plan de Mercado','\u20AC10,500 · 42%'],['#445d94','Representación','\u20AC7,500 · 30%'],['#a7c0fd','Informe Técnico','\u20AC4,500 · 18%'],['#e0e3e6','Curso','\u20AC2,300 · 10%']].map(([color,label,sub]) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full shrink-0" style={{ background: color }}></div>
                    <div><p className="text-xs md:text-sm font-medium text-slate-700">{label}</p><p className="text-[10px] md:text-xs text-slate-500">{sub}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <h3 className="font-bold text-[#0A1A3A] text-sm md:text-base">Transacciones</h3>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              <input type="date" className="border border-slate-200 rounded-lg px-2 md:px-3 py-1.5 text-sm flex-1 sm:flex-none min-w-0" />
              <input type="date" className="border border-slate-200 rounded-lg px-2 md:px-3 py-1.5 text-sm flex-1 sm:flex-none min-w-0" />
              <select className="border border-slate-200 rounded-lg px-2 md:px-3 py-1.5 text-sm flex-1 sm:flex-none"><option>Todos los servicios</option><option>Informe Técnico</option><option>Plan de Mercado</option><option>Representación</option><option>Curso</option></select>
              <select className="border border-slate-200 rounded-lg px-2 md:px-3 py-1.5 text-sm flex-1 sm:flex-none"><option>Todos los estados</option><option>Pagado</option><option>Pendiente</option><option>Reembolsado</option></select>
            </div>
          </div>
          {/* Mobile card view */}
          <div className="md:hidden space-y-3">
            {transactions.map((t, i) => (
              <div key={i} className="p-3 bg-[#f7f9fc] rounded-lg">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-sm font-medium text-slate-700">{t.player}</p>
                  <span className={`text-xs ${t.statusBg} px-2 py-0.5 rounded-full`}>{t.status}</span>
                </div>
                <p className="text-xs text-slate-500">{t.service} · {t.date}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold text-[#0A1A3A]">{t.amount}</p>
                  <span className="text-xs text-slate-400">{t.method}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-slate-100">
                {['Fecha','Jugador','Servicio','Monto','Método','Estado','Factura'].map(h => <th key={h} className="text-left p-3 text-xs font-semibold text-slate-500 uppercase">{h}</th>)}
              </tr></thead>
              <tbody className="divide-y divide-slate-50">
                {transactions.map((t, i) => (
                  <tr key={i}>
                    <td className="p-3 text-slate-500">{t.date}</td>
                    <td className="p-3 text-slate-700 font-medium">{t.player}</td>
                    <td className="p-3">{t.service}</td>
                    <td className="p-3 font-bold text-[#0A1A3A]">{t.amount}</td>
                    <td className="p-3 text-slate-500">{t.method}</td>
                    <td className="p-3"><span className={`text-xs ${t.statusBg} px-2 py-1 rounded-full`}>{t.status}</span></td>
                    <td className="p-3"><button className="text-slate-400 hover:text-[#0A1A3A]"><Icon name="receipt" className="text-lg" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </AdminLayout>
  )
}
