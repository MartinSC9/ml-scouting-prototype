import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

const modules = [
  {n:'01',title:'Fundamentos del Scouting',desc:'Historia, metodologia y el rol del scout moderno.'},
  {n:'02',title:'Observacion y Analisis',desc:'Tecnicas de observacion en vivo y diferida.'},
  {n:'03',title:'Herramientas Digitales',desc:'Plataformas de datos, video y software profesional.'},
  {n:'04',title:'Creacion de Informes',desc:'Redaccion de informes profesionales de scouting.'},
  {n:'05',title:'Analisis Tactico',desc:'Evaluacion de jugadores en contextos tacticos reales.'},
  {n:'06',title:'Red y Mercado',desc:'Networking, mercado de fichajes y practicas reales.'},
]

export default function Curso() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="curso" level={3} />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#0A1A3A] py-20 px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4 font-medium">Proxima edicion: Septiembre 2026</span>
              <h1 className="text-4xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>Curso de Scouting Profesional</h1>
              <p className="text-slate-300 mb-6">Aprende a identificar, analizar y reportar talento futbolistico con la metodologia de Marco Lujan. 6 modulos, clases en vivo y practicas reales.</p>
              <div className="flex gap-4 mb-8">
                {[{v:'6',l:'Modulos'},{v:'24',l:'Clases'},{v:'3',l:'Meses'},{v:'83',l:'En espera'}].map((s,i)=>(
                  <div key={i} className="text-center"><p className="text-white font-bold text-2xl">{s.v}</p><p className="text-slate-400 text-xs">{s.l}</p></div>
                ))}
              </div>
              <button className="bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Unirme a la lista de espera</button>
            </div>
            <div className="aspect-video bg-white/10 rounded-xl flex items-center justify-center">
              <Icon name="play_circle" className="text-white/60" style={{fontSize:'64px'}} />
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section className="bg-white py-8 px-8 border-b border-slate-100">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-8">
            <p className="text-slate-500 font-medium">Comienza en:</p>
            <div className="flex gap-4">
              {[{v:'183',l:'DIAS'},{v:'14',l:'HORAS'},{v:'32',l:'MIN'}].map((t,i)=>(
                <div key={i} className="bg-[#0A1A3A] text-white w-16 h-16 rounded-lg flex flex-col items-center justify-center">
                  <span className="text-xl font-bold">{t.v}</span><span className="text-[10px] text-slate-300">{t.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Syllabus */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0A1A3A] text-center mb-12" style={{fontFamily:"'Noto Serif'"}}>Programa del Curso</h2>
            <div className="space-y-4">
              {modules.map((m,i)=>(
                <details key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden group">
                  <summary className="flex items-center gap-4 p-6 cursor-pointer">
                    <span className="w-10 h-10 bg-[#0A1A3A] text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">{m.n}</span>
                    <span className="font-bold text-[#0A1A3A] flex-1">{m.title}</span>
                    <Icon name="expand_more" className="text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 pl-20 text-slate-500 text-sm">{m.desc}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0A1A3A] text-center mb-12" style={{fontFamily:"'Noto Serif'"}}>Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                {q:'Necesito estudios previos?',a:'No, el curso esta disenado para todos los niveles.'},
                {q:'Puedo hacerlo desde cualquier parte del mundo?',a:'Si, las clases son online en vivo con acceso a grabaciones.'},
                {q:'Otorgan certificacion?',a:'Si, certificacion oficial de ML Scouting.'},
                {q:'Hay posibilidades reales de trabajo?',a:'Si, nuestros egresados trabajan en clubes de diferentes ligas.'},
                {q:'Cual es el precio?',a:'El precio se anunciara cuando abramos inscripciones. Unite a la lista de espera para ser el primero en enterarte.'},
              ].map((f,i)=>(
                <details key={i} className="bg-[#f7f9fc] rounded-xl border border-slate-100 overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-[#0A1A3A]">
                    {f.q}
                    <Icon name="expand_more" className="text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-500">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section className="py-20 px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Unite a la lista de espera</h2>
            <p className="text-slate-500 mb-10">Se el primero en enterarte cuando se abran las inscripciones.</p>
            <form className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-6 text-left">
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Nombre completo</label>
                <input type="text" className="w-full border border-[#c5c6cf] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#445d94] focus:border-[#445d94]" placeholder="Tu nombre"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Email</label>
                <input type="email" className="w-full border border-[#c5c6cf] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#445d94] focus:border-[#445d94]" placeholder="tu@email.com"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Pais</label>
                <select className="w-full border border-[#c5c6cf] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#445d94] focus:border-[#445d94]">
                  <option value="">Selecciona tu pais</option><option>Argentina</option><option>Espana</option><option>Mexico</option><option>Colombia</option><option>Chile</option><option>Otro</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-[#0A1A3A] text-white py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition">Unirme a la Lista de Espera</button>
            </form>
          </div>
        </section>
      </main>
      <Footer level={3} />
    </div>
  )
}
