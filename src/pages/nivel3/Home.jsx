import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import { images } from '../../assets/images'

const heroVideos = [
  `${import.meta.env.BASE_URL}hero-video-2.mp4`,
  `${import.meta.env.BASE_URL}hero-video.mp4`,
]

export default function Home() {
  const [videoIndex, setVideoIndex] = useState(0)
  const videoRef = useRef(null)
  const [navTransparent, setNavTransparent] = useState(true)

  useEffect(() => {
    const onScroll = () => setNavTransparent(window.scrollY < 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="inicio" transparent={navTransparent} />

      {/* Hero */}
      <section className="relative pt-52 pb-28 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay muted playsInline
            poster={images.heroStadium}
            key={videoIndex}
            onEnded={() => setVideoIndex((i) => (i + 1) % heroVideos.length)}
          >
            <source src={heroVideos[videoIndex]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0A1A3A]/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{fontFamily:"'Noto Serif'"}}>Impulsamos el futbol con scouting profesional, estrategia y experiencia</h1>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Conectamos jugadores con oportunidades reales en el futbol internacional a traves de analisis profesional, formacion y una red global de contactos.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/nivel-3/servicios" className="bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold text-sm hover:bg-slate-100 transition">Soy Jugador</Link>
            <Link to="/nivel-3/contacto" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition">Soy Club</Link>
            <Link to="/nivel-3/curso" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition">Quiero ser Scout</Link>
          </div>
        </div>
      </section>

      {/* About Marco */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-full overflow-hidden border-[12px] border-white shadow-xl max-w-sm mx-auto">
            <img className="w-full h-full object-cover object-top" alt="Marco Lujan" src={images.marcoLujan} />
          </div>
          <div>
            <p className="text-[#445d94] text-sm font-semibold uppercase tracking-wider mb-2">Sobre el Fundador</p>
            <h2 className="text-3xl font-bold text-[#0A1A3A] mb-1" style={{fontFamily:"'Noto Serif'"}}>Marco Lujan</h2>
            <p className="text-slate-500 font-medium mb-4">Football Scout Internacional</p>
            <p className="text-slate-600 leading-relaxed mb-8">Con mas de una decada de experiencia en el scouting profesional, Marco ha trabajado con clubes de primera division en Europa y Sudamerica. Su metodologia combina el analisis de datos con la observacion tradicional para identificar talento con proyeccion internacional.</p>
            <div className="grid grid-cols-2 gap-4">
              {[{v:'+50',l:'Clubes Asesorados'},{v:'+200',l:'Jugadores Analizados'},{v:'+100',l:'Scouts Formados'},{v:'+15',l:'Paises'}].map((s,i)=>(
                <div key={i} className="bg-[#0A1A3A] text-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">{s.v}</p><p className="text-xs text-slate-300">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Nuestros Servicios</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Soluciones integrales para potenciar tu carrera en el futbol profesional.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {icon:'assessment',title:'Informe Tecnico',desc:'Analisis completo de tus capacidades tecnicas, fisicas y tacticas con recomendaciones profesionales.',price:'\u20AC150'},
            {icon:'travel_explore',title:'Plan de Mercado',desc:'Estrategia personalizada para posicionarte en los mercados mas adecuados a tu perfil futbolistico.',price:'\u20AC250',popular:true},
            {icon:'groups',title:'Representacion',desc:'Acompanamiento integral con acceso a nuestra red de clubes, agentes y oportunidades de prueba.',price:'\u20AC500'},
          ].map((s,i)=>(
            <div key={i} className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border ${s.popular?'ring-2 ring-[#0A1A3A] border-[#0A1A3A]':'border-slate-100'}`}>
              <div className="w-14 h-14 bg-[#0A1A3A] rounded-lg flex items-center justify-center mb-6"><Icon name={s.icon} className="text-white text-2xl" /></div>
              <h3 className="text-xl font-bold text-[#0A1A3A] mb-3" style={{fontFamily:"'Noto Serif'"}}>{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <p className="text-[#0A1A3A] font-bold text-lg">{s.price}</p>
              {s.popular && <span className="inline-block mt-2 text-xs bg-[#0A1A3A] text-white px-3 py-1 rounded-full">Mas popular</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Diagnostic CTA */}
      <section className="bg-[#0A1A3A] py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>Diagnostico Gratuito</h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">Responde unas preguntas y recibe una evaluacion inicial sobre tu perfil y las oportunidades disponibles para vos.</p>
          <Link to="/nivel-3/diagnostico" className="inline-block bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Comenzar Diagnostico</Link>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Casos de Exito</h2>
          <p className="text-slate-500">Jugadores que confiaron en nosotros y dieron el salto.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {pais:'Argentina',pos:'Mediocampista',name:'Lucas Martinez',desc:'Paso de jugar en la tercera division a firmar contrato con un club de la Serie B italiana gracias al Plan de Mercado.',tag:'Plan de Mercado',img:images.marcoPhoto1},
            {pais:'Colombia',pos:'Delantero',name:'Santiago Ruiz',desc:'El informe tecnico le permitio conocer sus fortalezas y mejorar sus debilidades. Hoy juega en Portugal.',tag:'Informe Tecnico',img:images.marcoPhoto2},
            {pais:'Uruguay',pos:'Defensor',name:'Federico Gomez',desc:'Con la representacion integral, logro una prueba en un club de la segunda division espanola y quedo seleccionado.',tag:'Representacion',img:images.teamPhoto},
          ].map((c,i)=>(
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <div className="h-48 overflow-hidden"><img className="w-full h-full object-cover" alt={c.name} src={c.img} /></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2"><span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">{c.pais}</span><span className="text-xs text-slate-500">{c.pos}</span></div>
                <h3 className="font-bold text-[#0A1A3A] mb-2">{c.name}</h3>
                <p className="text-sm text-slate-500 mb-3">{c.desc}</p>
                <span className="text-xs bg-[#a7c0fd] text-[#0A1A3A] px-3 py-1 rounded-full font-medium">{c.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Lo que dicen nuestros jugadores</h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {q:'El informe tecnico fue increiblemente detallado. Me ayudo a entender exactamente en que tenia que mejorar para dar el siguiente paso en mi carrera.',n:'Diego Fernandez',r:'Jugador - Argentina',img:images.testimonial1},
            {q:'Marco tiene un ojo unico para detectar talento. Gracias a su red de contactos, pude hacer pruebas en tres clubes europeos.',n:'Andres Ramirez',r:'Jugador - Colombia',img:images.testimonial2},
            {q:'El curso de scouting cambio mi forma de ver el futbol. Ahora trabajo como scout freelance gracias a la formacion y la red de ML Scouting.',n:'Pablo Torres',r:'Scout - Mexico',img:images.testimonial3},
          ].map((t,i)=>(
            <div key={i} className="bg-[#f7f9fc] p-6 rounded-xl">
              <div className="flex gap-1 mb-4 text-yellow-400">{[1,2,3,4,5].map(s=><Icon key={s} name="star" filled className="text-sm" />)}</div>
              <p className="text-slate-600 text-sm mb-4 italic">"{t.q}"</p>
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full object-cover" alt={t.n} src={t.img} />
                <div><p className="font-semibold text-[#0A1A3A] text-sm">{t.n}</p><p className="text-xs text-slate-500">{t.r}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Banner */}
      <section className="py-16 px-8 bg-[#0A1A3A]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4 font-medium">Proxima edicion</span>
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>Curso de Scouting Profesional</h2>
            <p className="text-slate-300 mb-6">Aprende a identificar, analizar y reportar talento futbolistico con metodologia profesional.</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 px-4 py-2 rounded-lg text-center"><p className="text-white font-bold text-lg">SEP</p><p className="text-slate-300 text-xs">2026</p></div>
              <div className="text-white"><p className="font-semibold">83 personas en lista de espera</p><p className="text-sm text-slate-300">Cupos limitados</p></div>
            </div>
            <Link to="/nivel-3/curso" className="inline-block bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Ver mas informacion</Link>
          </div>
          <div className="w-64 h-48 rounded-xl overflow-hidden"><img className="w-full h-full object-cover" alt="Curso Scouting" src={images.aerialPitch} /></div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div><h2 className="text-3xl font-bold text-[#0A1A3A]" style={{fontFamily:"'Noto Serif'"}}>Blog</h2><p className="text-slate-500 mt-1">Articulos sobre scouting, mercado y desarrollo profesional.</p></div>
            <Link to="/nivel-3/blog" className="text-sm font-semibold text-[#0A1A3A] hover:underline">Ver todos &rarr;</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {cat:'Scouting',title:'Como preparar tu video highlight para scouts',desc:'Consejos clave para que tu video destaque entre cientos de jugadores.',date:'15 Oct 2026 · 5 min lectura',bg:'bg-[#a7c0fd]/30'},
              {cat:'Mercado',title:'Las ligas europeas que mas buscan talento sudamericano',desc:'Un analisis de las oportunidades en Portugal, Italia y Belgica.',date:'10 Oct 2026 · 8 min lectura',bg:'bg-[#d9e2ff]/30'},
              {cat:'Para Jugadores',title:'5 errores que cometen los jugadores al buscar club',desc:'Evita estos errores comunes que pueden arruinar tu oportunidad.',date:'5 Oct 2026 · 6 min lectura',bg:'bg-[#d9e2ff]/30'},
            ].map((a,i)=>(
              <Link key={i} to="/nivel-3/blog-articulo" className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition group">
                <div className={`h-40 ${a.bg} flex items-center justify-center`}><Icon name="article" className="text-[#445d94]/40" style={{fontSize:'40px'}} /></div>
                <div className="p-5">
                  <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">{a.cat}</span>
                  <h3 className="font-bold text-[#0A1A3A] mt-2 group-hover:underline">{a.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{a.desc}</p>
                  <p className="text-xs text-slate-400 mt-3">{a.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Referral */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="share" className="text-[#0A1A3A] mb-4" style={{fontSize:'48px'}} />
          <h2 className="text-3xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Invita a un companero y gana beneficios</h2>
          <p className="text-slate-500 mb-6 max-w-lg mx-auto">Comparte tu codigo de referido con otros jugadores. Por cada persona que contrate un servicio, ambos reciben un <strong className="text-[#0A1A3A]">10% de descuento</strong> en su proximo servicio.</p>
          <Link to="/nivel-3/contacto" className="inline-block bg-[#0A1A3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0A1A3A]/90 transition">Conocer mas</Link>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition z-50">
        <Icon name="chat" className="text-white" style={{fontSize:'28px'}} />
      </a>

      <Footer level={3} />
    </div>
  )
}
