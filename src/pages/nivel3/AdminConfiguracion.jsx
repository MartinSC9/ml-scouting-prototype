import { useState } from 'react'
import AdminLayout from '../../components/AdminLayout'
import Icon from '../../components/Icon'

export default function AdminConfiguracion() {
  const [activeTab, setActiveTab] = useState('perfil')

  const tabs = [
    { key: 'perfil', label: 'Perfil' },
    { key: 'servicios', label: 'Servicios' },
    { key: 'pagos', label: 'Pagos' },
    { key: 'emails', label: 'Emails' },
    { key: 'whatsapp', label: 'WhatsApp' },
    { key: 'idiomas', label: 'Idiomas' },
    { key: 'notificaciones', label: 'Notificaciones' },
    { key: 'referidos', label: 'Referidos' },
    { key: 'seo', label: 'SEO' },
  ]

  return (
    <AdminLayout activeItem="configuracion" title="Configuración" subtitle="Ajustes de la plataforma" level={3}>
      <section className="p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Tabs - horizontal scroll on mobile, vertical on desktop */}
          <div className="md:w-48 md:shrink-0">
            <div className="flex md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0 -mx-1 px-1 md:mx-0 md:px-0 md:space-y-1">
              {tabs.map(t => (
                <button key={t.key} onClick={() => setActiveTab(t.key)}
                  className={`block whitespace-nowrap md:w-full text-left px-3 md:px-4 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium shrink-0 ${activeTab === t.key ? 'bg-[#0A1A3A] text-white' : 'text-slate-600 border border-slate-200'}`}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Panels */}
          <div className="flex-1 min-w-0">
            {/* Perfil */}
            {activeTab === 'perfil' && (
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-base md:text-lg mb-4 md:mb-6">Perfil</h3>
                <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-200 rounded-full flex items-center justify-center shrink-0"><Icon name="person" className="text-slate-400" style={{ fontSize: '28px' }} /></div>
                  <button className="border border-slate-200 text-slate-600 px-3 md:px-4 py-2 rounded-lg text-sm font-medium">Cambiar foto</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label><input type="text" defaultValue="Marco" className="w-full border border-slate-200 rounded-lg px-3 md:px-4 py-2.5 text-sm" /></div>
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Apellido</label><input type="text" defaultValue="Lujan" className="w-full border border-slate-200 rounded-lg px-3 md:px-4 py-2.5 text-sm" /></div>
                </div>
                <div className="mb-3 md:mb-4"><label className="block text-sm font-medium text-slate-700 mb-1">Email</label><input type="email" defaultValue="marco@mlscouting.com" className="w-full border border-slate-200 rounded-lg px-3 md:px-4 py-2.5 text-sm" /></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Nueva contraseña</label><input type="password" placeholder="********" className="w-full border border-slate-200 rounded-lg px-3 md:px-4 py-2.5 text-sm" /></div>
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Confirmar contraseña</label><input type="password" placeholder="********" className="w-full border border-slate-200 rounded-lg px-3 md:px-4 py-2.5 text-sm" /></div>
                </div>
                <button className="bg-[#0A1A3A] text-white px-5 md:px-6 py-2.5 rounded-lg text-sm font-semibold w-full sm:w-auto">Guardar cambios</button>
              </div>
            )}

            {/* Servicios */}
            {activeTab === 'servicios' && (
              <div className="space-y-3 md:space-y-4">
                {[
                  { name: 'Informe Técnico', price: 150, desc: 'Análisis completo de capacidades técnicas, físicas y tácticas.' },
                  { name: 'Plan de Mercado', price: 250, desc: 'Estrategia personalizada para posicionarte en mercados adecuados.' },
                  { name: 'Representación', price: 500, desc: 'Acompañamiento integral con acceso a red de clubes y agentes.' },
                ].map(s => (
                  <div key={s.name} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <h4 className="font-bold text-[#0A1A3A] text-sm md:text-base">{s.name}</h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                      </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3">
                      <div><label className="block text-xs font-medium text-slate-500 mb-1">Precio ({'\u20AC'})</label><input type="number" defaultValue={s.price} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm" /></div>
                    </div>
                    <div><label className="block text-xs font-medium text-slate-500 mb-1">Descripción</label><textarea rows="2" defaultValue={s.desc} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"></textarea></div>
                  </div>
                ))}
                <button className="bg-[#0A1A3A] text-white px-5 md:px-6 py-2.5 rounded-lg text-sm font-semibold w-full sm:w-auto">Guardar cambios</button>
              </div>
            )}

            {/* Pagos */}
            {activeTab === 'pagos' && (
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-base md:text-lg mb-4 md:mb-6">Configuración de Pagos (Stripe)</h3>
                <div className="space-y-3 md:space-y-4">
                  {[['Stripe Public Key','pk_live_*********************'],['Stripe Secret Key','sk_live_*********************'],['Webhook Secret','whsec_*********************']].map(([label,val]) => (
                    <div key={label}><label className="block text-sm font-medium text-slate-700 mb-1">{label}</label><input type="password" defaultValue={val} className="w-full border border-slate-200 rounded-lg px-3 md:px-4 py-2.5 text-sm font-mono" /></div>
                  ))}
                </div>
                <button className="mt-4 md:mt-6 bg-[#0A1A3A] text-white px-5 md:px-6 py-2.5 rounded-lg text-sm font-semibold w-full sm:w-auto">Guardar</button>
              </div>
            )}

            {/* Emails */}
            {activeTab === 'emails' && (
              <div className="space-y-3 md:space-y-4">
                {[
                  { title: 'Bienvenida', subject: 'Bienvenido a ML Scouting', body: 'Hola {nombre}, gracias por registrarte en ML Scouting. Estamos emocionados de acompañarte en tu carrera futbolística.' },
                  { title: 'Confirmación de compra', subject: 'Confirmación de tu compra - {servicio}', body: 'Hola {nombre}, tu compra de {servicio} ha sido confirmada. Nos pondremos en contacto pronto para los próximos pasos.' },
                  { title: 'Recordatorio de reunión', subject: 'Recordatorio: Tu reunión con ML Scouting es mañana', body: 'Hola {nombre}, te recordamos que tienes una reunión agendada para mañana a las {hora}.' },
                  { title: 'Informe listo', subject: 'Tu informe está listo para descargar', body: 'Hola {nombre}, tu {tipo_informe} está listo. Puedes descargarlo desde tu panel de jugador.' },
                ].map(e => (
                  <div key={e.title} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
                    <h4 className="font-bold text-[#0A1A3A] mb-2 md:mb-3 text-sm md:text-base">{e.title}</h4>
                    <div className="mb-2 md:mb-3"><label className="block text-xs font-medium text-slate-500 mb-1">Asunto</label><input type="text" defaultValue={e.subject} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm" /></div>
                    <div><label className="block text-xs font-medium text-slate-500 mb-1">Cuerpo</label><textarea rows="3" defaultValue={e.body} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"></textarea></div>
                  </div>
                ))}
                <button className="bg-[#0A1A3A] text-white px-5 md:px-6 py-2.5 rounded-lg text-sm font-semibold w-full sm:w-auto">Guardar plantillas</button>
              </div>
            )}

            {/* WhatsApp */}
            {activeTab === 'whatsapp' && (
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-base md:text-lg mb-4 md:mb-6">WhatsApp Business</h3>
                <div className="mb-3 md:mb-4"><label className="block text-sm font-medium text-slate-700 mb-1">Número de WhatsApp</label><input type="tel" defaultValue="+54 9 11 2345-6789" className="w-full border border-slate-200 rounded-lg px-3 md:px-4 py-2.5 text-sm" /></div>
                <div className="mb-4 md:mb-6"><label className="block text-sm font-medium text-slate-700 mb-1">Mensaje de bienvenida</label><textarea rows="4" defaultValue="¡Hola! Gracias por contactar a ML Scouting. Soy Marco Lujan. Cuéntame en qué puedo ayudarte: servicios de scouting, curso profesional o información general." className="w-full border border-slate-200 rounded-lg px-3 md:px-4 py-2.5 text-sm"></textarea></div>
                <button className="bg-[#0A1A3A] text-white px-5 md:px-6 py-2.5 rounded-lg text-sm font-semibold w-full sm:w-auto">Guardar</button>
              </div>
            )}

            {/* Idiomas */}
            {activeTab === 'idiomas' && (
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-base md:text-lg mb-4 md:mb-6">Idiomas</h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    { flag: 'ES', name: 'Español', desc: 'Idioma principal', checked: true },
                    { flag: 'EN', name: 'English', desc: 'Traducción parcial', checked: true },
                    { flag: 'PT', name: 'Portugués', desc: 'Traducción parcial', checked: false },
                  ].map(lang => (
                    <div key={lang.flag} className="flex items-center justify-between p-3 md:p-4 bg-[#f7f9fc] rounded-lg gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-base md:text-lg font-bold text-slate-500">{lang.flag}</span>
                        <div className="min-w-0"><p className="text-sm font-medium text-[#0A1A3A]">{lang.name}</p><p className="text-xs text-slate-500">{lang.desc}</p></div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0">
                        <input type="checkbox" defaultChecked={lang.checked} className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notificaciones */}
            {activeTab === 'notificaciones' && (
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-base md:text-lg mb-4 md:mb-6">Notificaciones</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Nuevo registro de jugador', desc: 'Recibir email cuando un jugador se registra', freq: 'Inmediato' },
                    { title: 'Nueva compra de servicio', desc: 'Recibir email cuando se realiza una compra', freq: 'Inmediato' },
                    { title: 'Diagnostico completado', desc: 'Notificar cuando alguien completa el diagnóstico', freq: 'Inmediato' },
                    { title: 'Nuevo mensaje de contacto', desc: 'Notificar cuando alguien envía un formulario', freq: 'Inmediato' },
                    { title: 'Resumen semanal', desc: 'Resumen de métricas clave cada semana', freq: 'Semanal' },
                  ].map(n => (
                    <div key={n.title} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="min-w-0"><p className="text-sm font-medium text-[#0A1A3A]">{n.title}</p><p className="text-xs text-slate-500">{n.desc}</p></div>
                      <div className="flex items-center gap-3 shrink-0">
                        <select defaultValue={n.freq} className="border border-slate-200 rounded-lg px-2 py-1 text-xs">
                          <option>Inmediato</option><option>Diario</option><option>Semanal</option>
                        </select>
                        <input type="checkbox" defaultChecked className="rounded border-slate-300 w-5 h-5 md:w-auto md:h-auto" />
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 md:mt-6 bg-[#0A1A3A] text-white px-5 md:px-6 py-2.5 rounded-lg text-sm font-semibold w-full sm:w-auto">Guardar</button>
              </div>
            )}

            {/* Referidos */}
            {activeTab === 'referidos' && (
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-base md:text-lg mb-4 md:mb-6">Programa de Referidos</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Porcentaje de descuento (%)</label>
                  <input type="number" defaultValue="10" className="w-full sm:w-32 border border-slate-200 rounded-lg px-3 md:px-4 py-2.5 text-sm" />
                  <p className="text-xs text-slate-500 mt-1">Descuento que recibe tanto el referidor como el referido.</p>
                </div>
                <button className="bg-[#0A1A3A] text-white px-5 md:px-6 py-2.5 rounded-lg text-sm font-semibold w-full sm:w-auto">Guardar</button>
              </div>
            )}

            {/* SEO */}
            {activeTab === 'seo' && (
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-base md:text-lg mb-4 md:mb-6">SEO y Analytics</h3>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Meta Title</label>
                    <input type="text" defaultValue="ML Scouting - Scouting Profesional de Fútbol" className="w-full border border-slate-200 rounded-lg px-3 md:px-4 py-2.5 text-sm" />
                    <p className="text-xs text-slate-400 mt-1">50/60 caracteres</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Meta Description</label>
                    <textarea rows="2" defaultValue="Impulsamos carreras futbolísticas con scouting profesional, análisis de datos y una red global de clubes. Informe técnico, plan de mercado y representación." className="w-full border border-slate-200 rounded-lg px-3 md:px-4 py-2.5 text-sm"></textarea>
                    <p className="text-xs text-slate-400 mt-1">148/160 caracteres</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Google Analytics Tracking ID</label>
                    <input type="text" defaultValue="G-XXXXXXXXXX" className="w-full border border-slate-200 rounded-lg px-3 md:px-4 py-2.5 text-sm font-mono" />
                  </div>
                </div>
                <button className="mt-4 md:mt-6 bg-[#0A1A3A] text-white px-5 md:px-6 py-2.5 rounded-lg text-sm font-semibold w-full sm:w-auto">Guardar</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </AdminLayout>
  )
}
