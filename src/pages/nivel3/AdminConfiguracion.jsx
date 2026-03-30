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
    <AdminLayout activeItem="configuracion" title="Configuracion" subtitle="Ajustes de la plataforma" level={3}>
      <section className="p-8">
        <div className="flex gap-8">
          {/* Vertical Tabs */}
          <div className="w-48 shrink-0 space-y-1">
            {tabs.map(t => (
              <button key={t.key} onClick={() => setActiveTab(t.key)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${activeTab === t.key ? 'bg-[#0A1A3A] text-white' : 'text-slate-600 border border-slate-200'}`}>
                {t.label}
              </button>
            ))}
          </div>

          {/* Panels */}
          <div className="flex-1">
            {/* Perfil */}
            {activeTab === 'perfil' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-lg mb-6">Perfil</h3>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center"><Icon name="person" className="text-slate-400" style={{ fontSize: '32px' }} /></div>
                  <button className="border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium">Cambiar foto</button>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label><input type="text" defaultValue="Marco" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm" /></div>
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Apellido</label><input type="text" defaultValue="Lujan" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm" /></div>
                </div>
                <div className="mb-4"><label className="block text-sm font-medium text-slate-700 mb-1">Email</label><input type="email" defaultValue="marco@mlscouting.com" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm" /></div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Nueva contrasena</label><input type="password" placeholder="********" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm" /></div>
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Confirmar contrasena</label><input type="password" placeholder="********" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm" /></div>
                </div>
                <button className="bg-[#0A1A3A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold">Guardar cambios</button>
              </div>
            )}

            {/* Servicios */}
            {activeTab === 'servicios' && (
              <div className="space-y-4">
                {[
                  { name: 'Informe Tecnico', price: 150, desc: 'Analisis completo de capacidades tecnicas, fisicas y tacticas.' },
                  { name: 'Plan de Mercado', price: 250, desc: 'Estrategia personalizada para posicionarte en mercados adecuados.' },
                  { name: 'Representacion', price: 500, desc: 'Acompanamiento integral con acceso a red de clubes y agentes.' },
                ].map(s => (
                  <div key={s.name} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-[#0A1A3A]">{s.name}</h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                      </label>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div><label className="block text-xs font-medium text-slate-500 mb-1">Precio ({'\u20AC'})</label><input type="number" defaultValue={s.price} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm" /></div>
                    </div>
                    <div><label className="block text-xs font-medium text-slate-500 mb-1">Descripcion</label><textarea rows="2" defaultValue={s.desc} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"></textarea></div>
                  </div>
                ))}
                <button className="bg-[#0A1A3A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold">Guardar cambios</button>
              </div>
            )}

            {/* Pagos */}
            {activeTab === 'pagos' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-lg mb-6">Configuracion de Pagos (Stripe)</h3>
                <div className="space-y-4">
                  {[['Stripe Public Key','pk_live_*********************'],['Stripe Secret Key','sk_live_*********************'],['Webhook Secret','whsec_*********************']].map(([label,val]) => (
                    <div key={label}><label className="block text-sm font-medium text-slate-700 mb-1">{label}</label><input type="password" defaultValue={val} className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-mono" /></div>
                  ))}
                </div>
                <button className="mt-6 bg-[#0A1A3A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold">Guardar</button>
              </div>
            )}

            {/* Emails */}
            {activeTab === 'emails' && (
              <div className="space-y-4">
                {[
                  { title: 'Bienvenida', subject: 'Bienvenido a ML Scouting Academy', body: 'Hola {nombre}, gracias por registrarte en ML Scouting Academy. Estamos emocionados de acompanarte en tu carrera futbolistica.' },
                  { title: 'Confirmacion de compra', subject: 'Confirmacion de tu compra - {servicio}', body: 'Hola {nombre}, tu compra de {servicio} ha sido confirmada. Nos pondremos en contacto pronto para los proximos pasos.' },
                  { title: 'Recordatorio de reunion', subject: 'Recordatorio: Tu reunion con ML Scouting es manana', body: 'Hola {nombre}, te recordamos que tenes una reunion agendada para manana a las {hora}.' },
                  { title: 'Informe listo', subject: 'Tu informe esta listo para descargar', body: 'Hola {nombre}, tu {tipo_informe} esta listo. Podes descargarlo desde tu panel de jugador.' },
                ].map(e => (
                  <div key={e.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <h4 className="font-bold text-[#0A1A3A] mb-3">{e.title}</h4>
                    <div className="mb-3"><label className="block text-xs font-medium text-slate-500 mb-1">Asunto</label><input type="text" defaultValue={e.subject} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm" /></div>
                    <div><label className="block text-xs font-medium text-slate-500 mb-1">Cuerpo</label><textarea rows="3" defaultValue={e.body} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"></textarea></div>
                  </div>
                ))}
                <button className="bg-[#0A1A3A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold">Guardar plantillas</button>
              </div>
            )}

            {/* WhatsApp */}
            {activeTab === 'whatsapp' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-lg mb-6">WhatsApp Business</h3>
                <div className="mb-4"><label className="block text-sm font-medium text-slate-700 mb-1">Numero de WhatsApp</label><input type="tel" defaultValue="+54 9 11 2345-6789" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm" /></div>
                <div className="mb-6"><label className="block text-sm font-medium text-slate-700 mb-1">Mensaje de bienvenida</label><textarea rows="4" defaultValue="Hola! Gracias por contactar a ML Scouting Academy. Soy Marco Lujan. Contame en que puedo ayudarte: servicios de scouting, curso profesional o informacion general." className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm"></textarea></div>
                <button className="bg-[#0A1A3A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold">Guardar</button>
              </div>
            )}

            {/* Idiomas */}
            {activeTab === 'idiomas' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-lg mb-6">Idiomas</h3>
                <div className="space-y-4">
                  {[
                    { flag: 'ES', name: 'Espanol', desc: 'Idioma principal', checked: true },
                    { flag: 'EN', name: 'English', desc: 'Traduccion parcial', checked: true },
                    { flag: 'PT', name: 'Portugues', desc: 'Traduccion parcial', checked: false },
                  ].map(lang => (
                    <div key={lang.flag} className="flex items-center justify-between p-4 bg-[#f7f9fc] rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-slate-500">{lang.flag}</span>
                        <div><p className="text-sm font-medium text-[#0A1A3A]">{lang.name}</p><p className="text-xs text-slate-500">{lang.desc}</p></div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
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
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-lg mb-6">Notificaciones</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Nuevo registro de jugador', desc: 'Recibir email cuando un jugador se registra', freq: 'Inmediato' },
                    { title: 'Nueva compra de servicio', desc: 'Recibir email cuando se realiza una compra', freq: 'Inmediato' },
                    { title: 'Diagnostico completado', desc: 'Notificar cuando alguien completa el diagnostico', freq: 'Inmediato' },
                    { title: 'Nuevo mensaje de contacto', desc: 'Notificar cuando alguien envia un formulario', freq: 'Inmediato' },
                    { title: 'Resumen semanal', desc: 'Resumen de metricas clave cada semana', freq: 'Semanal' },
                  ].map(n => (
                    <div key={n.title} className="flex items-center justify-between">
                      <div><p className="text-sm font-medium text-[#0A1A3A]">{n.title}</p><p className="text-xs text-slate-500">{n.desc}</p></div>
                      <div className="flex items-center gap-3">
                        <select defaultValue={n.freq} className="border border-slate-200 rounded-lg px-2 py-1 text-xs">
                          <option>Inmediato</option><option>Diario</option><option>Semanal</option>
                        </select>
                        <input type="checkbox" defaultChecked className="rounded border-slate-300" />
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 bg-[#0A1A3A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold">Guardar</button>
              </div>
            )}

            {/* Referidos */}
            {activeTab === 'referidos' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-lg mb-6">Programa de Referidos</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Porcentaje de descuento (%)</label>
                  <input type="number" defaultValue="10" className="w-32 border border-slate-200 rounded-lg px-4 py-2.5 text-sm" />
                  <p className="text-xs text-slate-500 mt-1">Descuento que recibe tanto el referidor como el referido.</p>
                </div>
                <button className="bg-[#0A1A3A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold">Guardar</button>
              </div>
            )}

            {/* SEO */}
            {activeTab === 'seo' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] text-lg mb-6">SEO y Analytics</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Meta Title</label>
                    <input type="text" defaultValue="ML Scouting Academy - Scouting Profesional de Futbol" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm" />
                    <p className="text-xs text-slate-400 mt-1">50/60 caracteres</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Meta Description</label>
                    <textarea rows="2" defaultValue="Impulsamos carreras futbolisticas con scouting profesional, analisis de datos y una red global de clubes. Informe tecnico, plan de mercado y representacion." className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm"></textarea>
                    <p className="text-xs text-slate-400 mt-1">148/160 caracteres</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Google Analytics Tracking ID</label>
                    <input type="text" defaultValue="G-XXXXXXXXXX" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-mono" />
                  </div>
                </div>
                <button className="mt-6 bg-[#0A1A3A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold">Guardar</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </AdminLayout>
  )
}
