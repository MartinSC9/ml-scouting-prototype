import AdminLayout from '../../components/AdminLayout'
import Icon from '../../components/Icon'

export default function AdminAnalytics() {
  const funnel = [
    { label: 'Visitas', value: '5,420', pct: '', w: '100%', color: 'bg-[#0A1A3A]' },
    { label: 'Diagnósticos iniciados', value: '890', pct: '16.4%', w: '75%', color: 'bg-[#445d94]' },
    { label: 'Diagnósticos completados', value: '456', pct: '51.2%', w: '50%', color: 'bg-[#a7c0fd]' },
    { label: 'Registros', value: '247', pct: '54.2%', w: '30%', color: 'bg-[#b8c6ef]' },
    { label: 'Compras', value: '42', pct: '17%', w: '12%', color: 'bg-[#7583a9]' },
  ]

  const pages = [
    { page: '/home', visits: '2,340', time: '2:15', bounce: '28%' },
    { page: '/servicios', visits: '1,120', time: '3:45', bounce: '22%' },
    { page: '/diagnostico', visits: '890', time: '6:30', bounce: '15%' },
    { page: '/curso', visits: '654', time: '4:12', bounce: '30%' },
    { page: '/blog', visits: '416', time: '5:20', bounce: '35%' },
  ]

  return (
    <AdminLayout activeItem="analytics" title="Analytics" subtitle="Métricas y rendimiento" level={3}>
      <section className="p-4 md:p-8 space-y-6 md:space-y-8">
        {/* Date Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {['7 días','30 días','3 meses','Este año','Custom'].map((t, i) => (
            <button key={t} className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap ${i === 1 ? 'bg-[#0A1A3A] text-white' : 'bg-white border border-slate-200 text-slate-600'}`}>{t}</button>
          ))}
        </div>

        {/* Conversión Funnel */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
          <h3 className="font-bold text-[#0A1A3A] mb-4 md:mb-6 text-sm md:text-base">Embudo de Conversión</h3>
          <div className="space-y-3">
            {funnel.map((f, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs md:text-sm font-medium text-[#0A1A3A]">{f.label}</span>
                  <div className="flex items-center gap-2">
                    {f.pct && <span className="text-[10px] md:text-xs text-slate-500">{f.pct}</span>}
                    <span className="text-xs md:text-sm font-bold text-[#0A1A3A]">{f.value}</span>
                  </div>
                </div>
                <div className={`h-6 md:h-8 ${f.color} rounded-lg`} style={{ width: f.w }}></div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3 md:mt-4">Tasa de conversión total: <strong className="text-[#0A1A3A]">0.77%</strong> (visitas a compras)</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Traffic Sources */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#0A1A3A] mb-3 md:mb-4 text-sm md:text-base">Fuentes de Tráfico</h3>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
              <svg viewBox="0 0 200 200" className="w-28 h-28 md:w-36 md:h-36 shrink-0">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#e0e3e6" strokeWidth="25" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#0A1A3A" strokeWidth="25" strokeDasharray="176 503" strokeDashoffset="0" transform="rotate(-90 100 100)" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#445d94" strokeWidth="25" strokeDasharray="126 503" strokeDashoffset="-176" transform="rotate(-90 100 100)" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#a7c0fd" strokeWidth="25" strokeDasharray="101 503" strokeDashoffset="-302" transform="rotate(-90 100 100)" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#d9e2ff" strokeWidth="25" strokeDasharray="50 503" strokeDashoffset="-403" transform="rotate(-90 100 100)" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#e6e8eb" strokeWidth="25" strokeDasharray="50 503" strokeDashoffset="-453" transform="rotate(-90 100 100)" />
              </svg>
              <div className="space-y-2 text-sm">
                {[['#0A1A3A','Orgánico','35%'],['#445d94','Instagram','25%'],['#a7c0fd','WhatsApp','20%'],['#d9e2ff','Referidos','10%'],['#e6e8eb','Directo','10%']].map(([color,label,pct]) => (
                  <div key={label} className="flex items-center gap-2"><div className="w-3 h-3 rounded-full shrink-0" style={{ background: color }}></div><span className="text-xs md:text-sm">{label} <strong>{pct}</strong></span></div>
                ))}
              </div>
            </div>
          </div>

          {/* Engagement */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#0A1A3A] mb-3 md:mb-4 text-sm md:text-base">Engagement</h3>
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
              {[['Tiempo prom.','4:32'],['Bounce rate','34%'],['Págs/sesión','3.2']].map(([label,val]) => (
                <div key={label} className="bg-[#f7f9fc] p-2 md:p-4 rounded-lg text-center"><p className="text-[9px] md:text-xs text-slate-500 mb-1">{label}</p><p className="text-base md:text-xl font-bold text-[#0A1A3A]">{val}</p></div>
              ))}
            </div>
            <h4 className="text-xs md:text-sm font-semibold text-[#0A1A3A] mb-2 md:mb-3">Dispositivos</h4>
            <div className="space-y-2">
              {[['Desktop','45%','bg-[#0A1A3A]'],['Mobile','48%','bg-[#445d94]'],['Tablet','7%','bg-[#a7c0fd]']].map(([device,pct,color]) => (
                <div key={device} className="flex items-center gap-2 md:gap-3">
                  <span className="text-xs text-slate-500 w-14 md:w-16">{device}</span>
                  <div className="flex-1 h-3 md:h-4 bg-slate-100 rounded-full overflow-hidden"><div className={`h-full ${color} rounded-full`} style={{ width: pct }}></div></div>
                  <span className="text-xs font-medium text-[#0A1A3A] w-8">{pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Most Visited Pages */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
          <h3 className="font-bold text-[#0A1A3A] mb-3 md:mb-4 text-sm md:text-base">Páginas más visitadas</h3>
          {/* Mobile card view */}
          <div className="md:hidden space-y-3">
            {pages.map((p, i) => (
              <div key={i} className="p-3 bg-[#f7f9fc] rounded-lg">
                <p className="text-sm font-medium text-[#0A1A3A] mb-1">{p.page}</p>
                <div className="flex gap-3 text-xs text-slate-500">
                  <span>{p.visits} visitas</span>
                  <span>{p.time} prom.</span>
                  <span>Bounce: {p.bounce}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-slate-100">
                {['Página','Visitas','Tiempo prom.','Bounce rate'].map(h => <th key={h} className="text-left p-3 text-xs font-semibold text-slate-500 uppercase">{h}</th>)}
              </tr></thead>
              <tbody className="divide-y divide-slate-50">
                {pages.map((p, i) => (
                  <tr key={i}>
                    <td className="p-3 text-[#0A1A3A] font-medium">{p.page}</td>
                    <td className="p-3 text-slate-600">{p.visits}</td>
                    <td className="p-3 text-slate-600">{p.time}</td>
                    <td className="p-3 text-slate-600">{p.bounce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Referrals Analytics */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
          <h3 className="font-bold text-[#0A1A3A] mb-3 md:mb-4 text-sm md:text-base">Rendimiento de Referidos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-4">
            {[['Clicks en links referidos','234'],['Registros via referido','34'],['Conversión referidos','14.5%']].map(([label,val]) => (
              <div key={label} className="bg-[#f7f9fc] p-3 md:p-4 rounded-lg"><p className="text-[10px] md:text-xs text-slate-500">{label}</p><p className="text-lg md:text-xl font-bold text-[#0A1A3A]">{val}</p></div>
            ))}
          </div>
        </div>
      </section>
    </AdminLayout>
  )
}
