import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/AdminLayout'
import FifaCard from '../../components/FifaCard'
import Icon from '../../components/Icon'

const tabs = ['Servicios','Informes','Notas','Pagos']

export default function AdminJugadorDetalle() {
  const [activeTab, setActiveTab] = useState('Servicios')

  return (
    <AdminLayout activeItem="jugadores" title="" subtitle="" level={2}>
      {/* Back + Actions */}
      <div className="flex items-center justify-between mb-6">
        <Link to="/nivel-2/admin/jugadores" className="flex items-center gap-1 text-sm text-[#43474d] hover:text-[#001529] transition-colors">
          <Icon name="arrow_back" className="text-lg" /> Volver a Jugadores
        </Link>
        <div className="flex items-center gap-3">
          <button className="border border-[#c3c6ce] text-[#191c1e] px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">Editar Jugador</button>
          <button className="border border-[#c3c6ce] text-[#191c1e] px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">Subir Informe</button>
          <button className="bg-[#001529] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-transform active:scale-95">Asignar Servicio</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Panel */}
        <div className="col-span-1 space-y-6">
          <div className="bg-white rounded-xl border border-[#c3c6ce]/30 p-6 text-center">
            <div className="w-32 h-32 rounded-full bg-[#e6e8eb] mx-auto flex items-center justify-center mb-4 border-4 border-white shadow-md">
              <Icon name="person" className="text-5xl text-[#43474d]" />
            </div>
            <div className="mx-auto max-w-[180px]">
              <FifaCard name="Juan Perez" position="MCO" rating={76} stats={{RIT:72,REG:80,TIR:68,DEF:55,PAS:78,FIS:70}} level="semi" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#c3c6ce]/30 p-6">
            <h3 className="font-semibold text-[#191c1e] mb-4">Datos personales</h3>
            <dl className="space-y-3 text-sm">
              {[['Nombre','Juan Perez'],['Edad','22'],['Nacionalidad','Argentina'],['Residencia','Argentina'],['Telefono','+54 9 11 1234-5678'],['Email','juan.perez@email.com']].map(([k,v])=>(
                <div key={k} className="flex justify-between"><dt className="text-[#43474d]">{k}</dt><dd className="font-medium">{v}</dd></div>
              ))}
            </dl>
          </div>

          <div className="bg-white rounded-xl border border-[#c3c6ce]/30 p-6">
            <h3 className="font-semibold text-[#191c1e] mb-4">Datos deportivos</h3>
            <dl className="space-y-3 text-sm">
              {[['Posicion','Mediocampista Ofensivo'],['Pie','Derecho'],['Altura','178cm'],['Peso','72kg'],['Club','Racing Club'],['Liga','Primera Division'],['Nivel','Semi Profesional']].map(([k,v])=>(
                <div key={k} className="flex justify-between"><dt className="text-[#43474d]">{k}</dt><dd className="font-medium">{v}</dd></div>
              ))}
            </dl>
            <button className="flex items-center gap-1 text-sm text-[#006970] mt-4 hover:underline">
              <Icon name="smart_display" className="text-lg" /> Ver highlights
            </button>
          </div>
        </div>

        {/* Right Panel with Tabs */}
        <div className="col-span-2">
          <div className="bg-white rounded-xl border border-[#c3c6ce]/30 overflow-hidden">
            <div className="flex border-b border-[#c3c6ce]/20">
              {tabs.map(t=>(
                <button key={t} onClick={()=>setActiveTab(t)} className={`px-6 py-4 text-sm cursor-pointer border-b-2 transition-colors ${activeTab===t?'text-[#001529] border-[#006970] font-semibold':'border-transparent text-[#43474d] hover:text-[#191c1e]'}`}>{t}</button>
              ))}
            </div>

            {activeTab==='Servicios' && (
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#f2f4f7] rounded-lg">
                  <div>
                    <h4 className="font-semibold text-[#191c1e]">Plan de Mercado Personalizado</h4>
                    <p className="text-xs text-[#43474d] mt-0.5">Contratado: 01/03/2026</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800">En progreso</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#f2f4f7] rounded-lg">
                  <div>
                    <h4 className="font-semibold text-[#191c1e]">Analisis de Rendimiento</h4>
                    <p className="text-xs text-[#43474d] mt-0.5">Contratado: 15/01/2026 | Entregado: 20/02/2026</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">Completado</span>
                </div>
              </div>
            )}

            {activeTab==='Informes' && (
              <div className="p-6 space-y-4">
                {[{t:'Informe Marzo 2026',d:'Subido: 15/03/2026'},{t:'Analisis Partido vs Independiente',d:'Subido: 02/03/2026'}].map((r,i)=>(
                  <div key={i} className="flex items-center justify-between p-4 bg-[#f2f4f7] rounded-lg">
                    <div>
                      <h4 className="font-semibold text-[#191c1e]">{r.t}</h4>
                      <p className="text-xs text-[#43474d] mt-0.5">{r.d}</p>
                    </div>
                    <button className="p-2 text-[#006970] hover:bg-[#7bf1fc]/30 rounded-lg"><Icon name="download" /></button>
                  </div>
                ))}
                <button className="w-full border-2 border-dashed border-[#c3c6ce] rounded-lg py-4 text-sm text-[#43474d] hover:border-[#006970] hover:text-[#006970] transition-colors flex items-center justify-center gap-2">
                  <Icon name="upload_file" className="text-lg" /> Subir nuevo informe
                </button>
              </div>
            )}

            {activeTab==='Notas' && (
              <div className="p-6">
                <textarea rows={8} className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970] resize-none mb-4" defaultValue="Jugador con buen manejo de balon y vision de juego. Necesita mejorar el aspecto fisico. Tiene potencial para ligas europeas de segundo nivel. Contactar agentes en Portugal y Belgica."></textarea>
                <button className="bg-[#001529] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-transform active:scale-95">Guardar notas</button>
              </div>
            )}

            {activeTab==='Pagos' && (
              <div className="p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#c3c6ce]/20">
                      {['Fecha','Servicio','Monto','Estado'].map(h=>(
                        <th key={h} className="text-left py-2 font-semibold text-[#43474d]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[{f:'01/03/2026',s:'Plan de Mercado',m:'\u20AC200'},{f:'15/01/2026',s:'Analisis de Rendimiento',m:'\u20AC80'}].map((p,i)=>(
                      <tr key={i} className="border-b border-[#c3c6ce]/10">
                        <td className="py-3 text-[#43474d]">{p.f}</td>
                        <td className="py-3">{p.s}</td>
                        <td className="py-3 font-medium">{p.m}</td>
                        <td className="py-3"><span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Completado</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
