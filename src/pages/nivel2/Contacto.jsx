import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

export default function Contacto() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="contacto" level={2} />

      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold italic text-[#001529] mb-4" style={{fontFamily:"'Noto Serif'"}}>Contactanos</h1>
            <p className="text-[#43474d] text-lg">Estamos aca para ayudarte</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <form className="bg-white rounded-2xl p-8 md:p-10 border border-[#c3c6ce]/30 shadow-sm space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Nombre</label>
                  <input type="text" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="Tu nombre"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Apellido</label>
                  <input type="text" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="Tu apellido"/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Email</label>
                <input type="email" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="tu@email.com"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Asunto</label>
                <select className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]">
                  <option value="">Selecciona un asunto</option>
                  <option>Consulta sobre servicios para jugadores</option>
                  <option>Consulta sobre asesoria para clubes</option>
                  <option>Consulta sobre el curso de scouting</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Mensaje</label>
                <textarea rows={5} className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970] resize-none" placeholder="Escribi tu mensaje..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#001529] text-white py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-transform active:scale-[0.98]">Enviar Consulta</button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {icon:'mail',title:'Email',desc:'contacto@ml-scouting.com',bg:'bg-[#d0e4ff]',iconColor:'text-[#0f2a43]'},
                {icon:'photo_camera',title:'Instagram',desc:'@mlscoutingacademy',bg:'bg-[#d0e4ff]',iconColor:'text-[#0f2a43]'},
                {icon:'chat',title:'WhatsApp',desc:'Escribinos por WhatsApp',bg:'bg-[#7bf1fc]',iconColor:'text-[#006970]',isButton:true},
                {icon:'location_on',title:'Ubicacion',desc:'Argentina',bg:'bg-[#d0e4ff]',iconColor:'text-[#0f2a43]'},
              ].map((c,i)=>(
                <div key={i} className="bg-white rounded-xl p-6 border border-[#c3c6ce]/30 flex items-start gap-4">
                  <div className={`w-12 h-12 ${c.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={c.icon} className={c.iconColor} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#191c1e] mb-1">{c.title}</h3>
                    {c.isButton ? (
                      <button className="text-[#006970] text-sm font-medium hover:underline">{c.desc}</button>
                    ) : (
                      <p className="text-[#43474d] text-sm">{c.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer level={2} />
    </div>
  )
}
