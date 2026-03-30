import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

export default function Curso() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="curso" level={2} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-[#001529]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001529] via-[#0f2a43] to-[#001529] opacity-90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{backgroundImage:'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px)'}}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-center py-20">
          <span className="inline-block bg-[#006970] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">Proxima edicion: Septiembre 2026</span>
          <h1 className="text-4xl md:text-6xl text-white leading-tight mb-6 italic font-bold" style={{fontFamily:"'Noto Serif'"}}>Curso de Scouting Profesional</h1>
          <p className="text-xl text-[#7992b0] max-w-2xl mx-auto">Convertite en el experto que los clubes buscan</p>
        </div>
      </section>

      {/* Que vas a aprender */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold italic text-[#001529] text-center mb-4" style={{fontFamily:"'Noto Serif'"}}>Que vas a aprender</h2>
          <p className="text-center text-[#43474d] mb-12 max-w-2xl mx-auto">Un programa completo disenado por scouts profesionales con experiencia en las principales ligas del mundo.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon:'visibility',title:'Metodologia de observacion',desc:'Tecnicas profesionales de analisis en vivo'},
              {icon:'devices',title:'Herramientas digitales',desc:'Plataformas de datos y video utilizadas en el futbol profesional'},
              {icon:'description',title:'Creacion de informes',desc:'Informes de scouting como los de los clubes top'},
              {icon:'strategy',title:'Analisis tactico',desc:'Evaluar jugadores en contextos tacticos reales'},
              {icon:'group',title:'Red de contactos',desc:'Acceso a profesionales del futbol internacional'},
              {icon:'stadium',title:'Practicas en estadios',desc:'Evaluacion real en partidos profesionales'},
            ].map((item,i)=>(
              <div key={i} className="bg-white rounded-xl p-8 border border-[#c3c6ce]/30 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#d0e4ff] rounded-xl flex items-center justify-center mb-5">
                  <Icon name={item.icon} className="text-[#0f2a43] text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-[#001529] mb-2" style={{fontFamily:"'Noto Serif'"}}>{item.title}</h3>
                <p className="text-[#43474d] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8 bg-[#f2f4f7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold italic text-[#001529] text-center mb-12" style={{fontFamily:"'Noto Serif'"}}>Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              {q:'Necesito estudios previos?',a:'No, el curso esta disenado para todos los niveles.'},
              {q:'Puedo hacerlo desde cualquier parte del mundo?',a:'Si, las clases son online en vivo.'},
              {q:'Por que plataformas se da?',a:'Zoom para clases en vivo + plataforma propia para material.'},
              {q:'Otorgan certificacion?',a:'Si, certificacion oficial de ML Scouting Academy.'},
              {q:'Hay posibilidades reales de trabajo?',a:'Si, nuestros egresados trabajan en clubes de diferentes ligas.'},
            ].map((faq,i)=>(
              <details key={i} className="bg-white rounded-xl border border-[#c3c6ce]/30 overflow-hidden group">
                <summary className="flex items-center justify-between p-6 cursor-pointer text-[#191c1e] font-semibold">
                  {faq.q}
                  <Icon name="expand_more" className="text-[#43474d] transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-[#43474d]">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-20 px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold italic text-[#001529] text-center mb-4" style={{fontFamily:"'Noto Serif'"}}>Unite a la lista de espera</h2>
          <p className="text-center text-[#43474d] mb-10">Se el primero en enterarte cuando se abran las inscripciones.</p>
          <form className="bg-white rounded-2xl p-8 md:p-10 border border-[#c3c6ce]/30 shadow-sm space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Nombre completo</label>
              <input type="text" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="Tu nombre completo"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Email</label>
              <input type="email" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="tu@email.com"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Pais</label>
              <select className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]">
                <option value="">Selecciona tu pais</option>
                <option>Argentina</option>
                <option>Espana</option>
                <option>Mexico</option>
                <option>Colombia</option>
                <option>Chile</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Ocupacion actual</label>
              <input type="text" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="Ej: Entrenador, periodista, jugador..."/>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Por que te interesa el scouting?</label>
              <textarea rows={4} className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970] resize-none" placeholder="Contanos tu motivacion..."></textarea>
            </div>
            <button type="submit" className="w-full bg-[#001529] text-white py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-transform active:scale-[0.98]">Unirme a la Lista de Espera</button>
            <p className="text-xs text-center text-[#43474d]">Te avisaremos cuando se abran las inscripciones. Sin compromiso.</p>
          </form>
        </div>
      </section>

      <Footer level={2} />
    </div>
  )
}
