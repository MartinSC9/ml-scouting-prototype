import AdminLayout from '../../components/AdminLayout'

export default function AdminReferidos() {
  const referrals = [
    { referrer: 'Mateo Lopez', referred: 'Nicolas Perez', code: 'ML-MATEO2026', date: '10 Sep 2026', status: 'Convertido', statusBg: 'bg-green-50 text-green-700', service: 'Plan de Mercado', discount: '\u20AC25', discountColor: 'text-green-600 font-medium' },
    { referrer: 'Mateo Lopez', referred: 'Tomas Garcia', code: 'ML-MATEO2026', date: '18 Sep 2026', status: 'Convertido', statusBg: 'bg-green-50 text-green-700', service: 'Informe Técnico', discount: '\u20AC15', discountColor: 'text-green-600 font-medium' },
    { referrer: 'Mateo Lopez', referred: 'Martin Rodriguez', code: 'ML-MATEO2026', date: '25 Sep 2026', status: 'Registrado', statusBg: 'bg-yellow-50 text-yellow-700', service: '-', discount: '\u20AC20 (pend.)', discountColor: 'text-slate-400' },
    { referrer: 'Lucas Martinez', referred: 'Jorge Alvarez', code: 'ML-LUCAS2026', date: '5 Oct 2026', status: 'Convertido', statusBg: 'bg-green-50 text-green-700', service: 'Plan de Mercado', discount: '\u20AC25', discountColor: 'text-green-600 font-medium' },
    { referrer: 'Federico Gomez', referred: 'Sebastian Diaz', code: 'ML-FEDE2026', date: '8 Oct 2026', status: 'Registrado', statusBg: 'bg-yellow-50 text-yellow-700', service: '-', discount: '-', discountColor: 'text-slate-400' },
  ]

  return (
    <AdminLayout activeItem="referidos" title="Referidos" subtitle="Programa de referidos" level={3}>
      <section className="p-4 md:p-8 space-y-6 md:space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-slate-100"><p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase mb-1">Total Referidos</p><p className="text-xl md:text-2xl font-bold text-[#0A1A3A]">34</p></div>
          <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-slate-100"><p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase mb-1">Convertidos</p><p className="text-xl md:text-2xl font-bold text-green-600">12</p><span className="text-[10px] md:text-xs text-slate-500">35% conversión</span></div>
          <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-slate-100"><p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase mb-1">Descuentos Emitidos</p><p className="text-xl md:text-2xl font-bold text-[#0A1A3A]">{'\u20AC'}480</p></div>
          <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-slate-100"><p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase mb-1">Ingresos por Referidos</p><p className="text-xl md:text-2xl font-bold text-[#0A1A3A]">{'\u20AC'}3,200</p></div>
        </div>

        {/* Top Referrers */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
          <h3 className="font-bold text-[#0A1A3A] mb-3 md:mb-4 text-sm md:text-base">Top Referidores</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {[
              { rank: 1, name: 'Mateo Lopez', info: '3 referidos · \u20AC60 en desc.', bg: 'bg-yellow-100', color: 'text-yellow-600' },
              { rank: 2, name: 'Lucas Martinez', info: '2 referidos · \u20AC50 en desc.', bg: 'bg-slate-100', color: 'text-slate-500' },
              { rank: 3, name: 'Federico Gomez', info: '2 referidos · \u20AC50 en desc.', bg: 'bg-orange-50', color: 'text-orange-500' },
            ].map(r => (
              <div key={r.rank} className="bg-[#f7f9fc] p-3 md:p-4 rounded-lg flex items-center gap-3">
                <div className={`w-9 h-9 md:w-10 md:h-10 ${r.bg} rounded-full flex items-center justify-center shrink-0`}><span className={`${r.color} font-bold text-sm`}>{r.rank}</span></div>
                <div className="min-w-0"><p className="text-sm font-medium text-[#0A1A3A] truncate">{r.name}</p><p className="text-xs text-slate-500">{r.info}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* All Referrals Table */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
          <h3 className="font-bold text-[#0A1A3A] mb-3 md:mb-4 text-sm md:text-base">Todos los Referidos</h3>
          {/* Mobile card view */}
          <div className="md:hidden space-y-3">
            {referrals.map((r, i) => (
              <div key={i} className="p-3 bg-[#f7f9fc] rounded-lg">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="text-sm font-medium text-slate-700">{r.referrer} &rarr; {r.referred}</p>
                    <p className="text-[10px] font-mono text-slate-400">{r.code}</p>
                  </div>
                  <span className={`text-xs ${r.statusBg} px-2 py-0.5 rounded-full`}>{r.status}</span>
                </div>
                <div className="flex justify-between items-center mt-2 text-xs">
                  <span className="text-slate-500">{r.date} · {r.service}</span>
                  <span className={r.discountColor}>{r.discount}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-slate-100">
                {['Referidor','Referido','Código','Fecha','Estado','Servicio','Descuento'].map(h => <th key={h} className="text-left p-3 text-xs font-semibold text-slate-500 uppercase">{h}</th>)}
              </tr></thead>
              <tbody className="divide-y divide-slate-50">
                {referrals.map((r, i) => (
                  <tr key={i}>
                    <td className="p-3 text-slate-700 font-medium">{r.referrer}</td>
                    <td className="p-3 text-slate-600">{r.referred}</td>
                    <td className="p-3 text-xs font-mono text-slate-500">{r.code}</td>
                    <td className="p-3 text-slate-500">{r.date}</td>
                    <td className="p-3"><span className={`text-xs ${r.statusBg} px-2 py-1 rounded-full`}>{r.status}</span></td>
                    <td className="p-3 text-slate-600">{r.service}</td>
                    <td className={`p-3 ${r.discountColor}`}>{r.discount}</td>
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
