import PlayerLayout from '../../components/PlayerLayout'
import FifaCard from '../../components/FifaCard'
import Icon from '../../components/Icon'

export default function JugadorPerfil() {
  return (
    <PlayerLayout activeItem="perfil" level={3}>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* Player Info */}
          <div className="bg-white rounded-xl border border-slate-100 p-6">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-24 h-24 rounded-full bg-[#e6e8eb] flex items-center justify-center border-4 border-white shadow-lg">
                <Icon name="person" className="text-4xl text-slate-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#0A1A3A]" style={{fontFamily:"'Noto Serif'"}}>Juan Perez</h1>
                <p className="text-sm text-slate-500 mt-1">22 anos · Argentina · Mediocampista Ofensivo</p>
                <p className="text-sm text-slate-500">Racing Club · Primera Division</p>
                <span className="inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full bg-[#a7c0fd] text-[#0A1A3A]">Semi Profesional</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[['Pie','Derecho'],['Altura','178cm'],['Peso','72kg'],['Nacimiento','15/05/2004']].map(([k,v])=>(
                <div key={k} className="bg-[#f2f4f7] rounded-lg p-3"><p className="text-xs text-slate-500">{k}</p><p className="font-semibold text-sm text-[#0A1A3A]">{v}</p></div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-xl border border-slate-100 p-6">
            <h2 className="font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Servicios Contratados</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-[#f2f4f7] rounded-lg">
                <div><h4 className="font-semibold text-sm">Plan de Mercado Personalizado</h4><p className="text-xs text-slate-500">Contratado: 01/03/2026</p></div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">Completado</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#f2f4f7] rounded-lg">
                <div><h4 className="font-semibold text-sm">Informe Tecnico</h4><p className="text-xs text-slate-500">Contratado: 15/01/2026</p></div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800">En progreso</span>
              </div>
            </div>
          </div>

          {/* Reports */}
          <div className="bg-white rounded-xl border border-slate-100 p-6">
            <h2 className="font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Mis Informes</h2>
            <div className="space-y-3">
              {[{t:'Informe Marzo 2026',d:'15/03/2026'},{t:'Analisis Partido vs Independiente',d:'02/03/2026'},{t:'Informe Inicial',d:'20/01/2026'}].map((r,i)=>(
                <div key={i} className="flex items-center justify-between p-4 bg-[#f2f4f7] rounded-lg">
                  <div><h4 className="font-semibold text-sm">{r.t}</h4><p className="text-xs text-slate-500">{r.d}</p></div>
                  <button className="p-2 text-[#445d94] hover:bg-[#d9e2ff]/30 rounded-lg"><Icon name="download" /></button>
                </div>
              ))}
            </div>
          </div>

          {/* Payment History */}
          <div className="bg-white rounded-xl border border-slate-100 p-6">
            <h2 className="font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Historial de Pagos</h2>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-slate-100">
                {['Fecha','Servicio','Monto','Estado'].map(h=><th key={h} className="text-left py-2 font-semibold text-slate-500">{h}</th>)}
              </tr></thead>
              <tbody>
                {[{f:'01/03/2026',s:'Plan de Mercado',m:'\u20AC250',e:'Completado'},{f:'15/01/2026',s:'Informe Tecnico',m:'\u20AC150',e:'Completado'}].map((p,i)=>(
                  <tr key={i} className="border-b border-slate-50">
                    <td className="py-3 text-slate-500">{p.f}</td><td className="py-3">{p.s}</td><td className="py-3 font-medium">{p.m}</td>
                    <td className="py-3"><span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">{p.e}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <FifaCard name="Juan Perez" position="MCO" rating={76} stats={{RIT:72,REG:80,TIR:68,DEF:55,PAS:78,FIS:70}} level="semi" />
        </div>
      </div>
    </PlayerLayout>
  )
}
