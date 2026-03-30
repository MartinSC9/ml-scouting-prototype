import PlayerLayout from '../../components/PlayerLayout'
import Icon from '../../components/Icon'

export default function JugadorReferidos() {
  return (
    <PlayerLayout activeItem="referidos" level={3}>
      <h1 className="text-2xl font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'"}}>Programa de Referidos</h1>
      <p className="text-slate-500 mb-8">Comparte tu codigo y ambos reciben un 10% de descuento.</p>

      {/* Referral Code */}
      <div className="bg-white rounded-xl border border-slate-100 p-6 mb-8">
        <h3 className="font-bold text-[#0A1A3A] mb-4">Tu codigo de referido</h3>
        <div className="bg-[#0A1A3A] rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm mb-1">Codigo</p>
            <code className="text-2xl font-mono font-bold text-white">JUAN-ML2026</code>
          </div>
          <button className="bg-white text-[#0A1A3A] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-slate-100 transition flex items-center gap-2">
            <Icon name="content_copy" className="text-lg" /> Copiar
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-[#f2f4f7] rounded-lg">
            <p className="text-2xl font-bold text-[#0A1A3A]">3</p><p className="text-xs text-slate-500">Referidos totales</p>
          </div>
          <div className="text-center p-4 bg-[#f2f4f7] rounded-lg">
            <p className="text-2xl font-bold text-[#0A1A3A]">1</p><p className="text-xs text-slate-500">Convertidos</p>
          </div>
          <div className="text-center p-4 bg-[#f2f4f7] rounded-lg">
            <p className="text-2xl font-bold text-[#0A1A3A]">{'\u20AC'}25</p><p className="text-xs text-slate-500">Credito ganado</p>
          </div>
        </div>
      </div>

      {/* Referrals List */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-bold text-[#0A1A3A]">Historial de Referidos</h3>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="bg-[#f2f4f7] border-b border-slate-100">
            {['Nombre','Fecha','Estado','Tu beneficio'].map(h=><th key={h} className="text-left py-3 px-5 font-semibold text-slate-500">{h}</th>)}
          </tr></thead>
          <tbody>
            {[
              {n:'Lucas Garcia',f:'15/03/2026',e:'Contrato servicio',eBg:'bg-emerald-100 text-emerald-800',b:'\u20AC25'},
              {n:'Martin Rodriguez',f:'10/03/2026',e:'Registrado',eBg:'bg-blue-100 text-blue-800',b:'Pendiente'},
              {n:'Diego Fernandez',f:'05/03/2026',e:'Registrado',eBg:'bg-blue-100 text-blue-800',b:'Pendiente'},
            ].map((r,i)=>(
              <tr key={i} className="border-b border-slate-50">
                <td className="py-3 px-5 font-medium">{r.n}</td>
                <td className="py-3 px-5 text-slate-500">{r.f}</td>
                <td className="py-3 px-5"><span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${r.eBg}`}>{r.e}</span></td>
                <td className="py-3 px-5 font-medium">{r.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PlayerLayout>
  )
}
