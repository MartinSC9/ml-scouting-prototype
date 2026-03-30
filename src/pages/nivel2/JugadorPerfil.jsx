import { Link } from 'react-router-dom'
import PlayerLayout from '../../components/PlayerLayout'
import FifaCard from '../../components/FifaCard'
import Icon from '../../components/Icon'

export default function JugadorPerfil() {
  return (
    <PlayerLayout activeItem="perfil" level={2}>
      {/* Player Header */}
      <section className="pb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-28 h-28 rounded-full bg-[#e6e8eb] flex items-center justify-center border-4 border-white shadow-lg">
                <Icon name="person" className="text-5xl text-[#43474d]" />
              </div>
              <div>
                <h1 className="text-3xl font-bold italic text-[#001529]" style={{fontFamily:"'Noto Serif'"}}>Juan Perez</h1>
                <div className="flex items-center gap-3 mt-2 text-sm text-[#43474d]">
                  <span>22 anos</span>
                  <span className="text-[#74777e]">|</span>
                  <span>Argentina</span>
                  <span className="text-[#74777e]">|</span>
                  <span>Mediocampista</span>
                </div>
                <div className="flex items-center gap-3 mt-1 text-sm text-[#43474d]">
                  <span>Club: <strong className="text-[#191c1e]">Racing Club</strong></span>
                  <span className="text-[#74777e]">|</span>
                  <span>Liga: <strong className="text-[#191c1e]">Primera Division</strong></span>
                </div>
                <span className="inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full bg-[#7bf1fc] text-[#006e75]">Semi Profesional</span>
              </div>
            </div>
          </div>
          <div className="w-64 flex-shrink-0">
            <FifaCard name="Juan Perez" position="MCO" rating={76} stats={{RIT:72,REG:80,TIR:68,DEF:55,PAS:78,FIS:70}} level="semi" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-8">
        <h2 className="text-xl font-bold italic text-[#001529] mb-4" style={{fontFamily:"'Noto Serif'"}}>Mis Servicios Contratados</h2>
        <div className="bg-white rounded-xl border border-[#c3c6ce]/30 overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-[#c3c6ce]/20">
            <div>
              <h3 className="font-semibold text-[#191c1e]">Plan de Mercado Personalizado</h3>
              <p className="text-xs text-[#43474d] mt-0.5">Contratado: 01/03/2026</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800">En progreso</span>
          </div>
          <div className="flex items-center justify-between p-5">
            <div>
              <h3 className="font-semibold text-[#191c1e]">Analisis de Rendimiento</h3>
              <p className="text-xs text-[#43474d] mt-0.5">Contratado: 15/01/2026</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">Completado</span>
              <button className="text-sm font-medium text-[#006970] hover:underline">Ver informe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="pb-8">
        <h2 className="text-xl font-bold italic text-[#001529] mb-4" style={{fontFamily:"'Noto Serif'"}}>Mis Informes</h2>
        <div className="bg-white rounded-xl border border-[#c3c6ce]/30 overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-[#c3c6ce]/20">
            <div>
              <h3 className="font-semibold text-[#191c1e]">Informe Marzo 2026</h3>
              <p className="text-xs text-[#43474d] mt-0.5">15/03/2026</p>
            </div>
            <button className="p-2 text-[#006970] hover:bg-[#7bf1fc]/30 rounded-lg transition-colors">
              <Icon name="download" />
            </button>
          </div>
          <div className="flex items-center justify-between p-5">
            <div>
              <h3 className="font-semibold text-[#191c1e]">Analisis Partido vs Independiente</h3>
              <p className="text-xs text-[#43474d] mt-0.5">02/03/2026</p>
            </div>
            <button className="p-2 text-[#006970] hover:bg-[#7bf1fc]/30 rounded-lg transition-colors">
              <Icon name="download" />
            </button>
          </div>
        </div>
      </section>

      {/* Payment History */}
      <section className="pb-8">
        <h2 className="text-xl font-bold italic text-[#001529] mb-4" style={{fontFamily:"'Noto Serif'"}}>Historial de Pagos</h2>
        <div className="bg-white rounded-xl border border-[#c3c6ce]/30 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#c3c6ce]/20 bg-[#f2f4f7]">
                <th className="text-left py-3 px-5 font-semibold text-[#43474d]">Fecha</th>
                <th className="text-left py-3 px-5 font-semibold text-[#43474d]">Servicio</th>
                <th className="text-left py-3 px-5 font-semibold text-[#43474d]">Monto</th>
                <th className="text-left py-3 px-5 font-semibold text-[#43474d]">Estado</th>
                <th className="text-center py-3 px-5 font-semibold text-[#43474d]">Factura</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c3c6ce]/10">
                <td className="py-3 px-5 text-[#43474d]">01/03/2026</td>
                <td className="py-3 px-5 text-[#191c1e]">Plan de Mercado</td>
                <td className="py-3 px-5 text-[#191c1e] font-medium">&euro;200</td>
                <td className="py-3 px-5"><span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Completado</span></td>
                <td className="py-3 px-5 text-center"><button className="text-[#006970] hover:text-[#006e75]"><Icon name="download" className="text-xl" /></button></td>
              </tr>
              <tr>
                <td className="py-3 px-5 text-[#43474d]">15/01/2026</td>
                <td className="py-3 px-5 text-[#191c1e]">Analisis de Rendimiento</td>
                <td className="py-3 px-5 text-[#191c1e] font-medium">&euro;80</td>
                <td className="py-3 px-5"><span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Completado</span></td>
                <td className="py-3 px-5 text-center"><button className="text-[#006970] hover:text-[#006e75]"><Icon name="download" className="text-xl" /></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </PlayerLayout>
  )
}
