import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

export default function Home() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="inicio" level={2} />

      {/* Hero */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Stadium" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX26t5ZAL3guhJoFbXlDRdZUZ3MkPBBxnCJYrHKLNgyyC94lZ6-JK1A-fWIImU6eUljnyUbB2DnxuN8mNMIKzZLNKhLgnu-CdUj6nB7biztYHAxLrAX0Y8gq42P0TZMH9g6kAgzHD9QVc5FqUraQ9KW-KgX3QckZ_YCnv_428U8dMWXEm2D2OU71EUX-IgDhMFkOtMIUE5d6Xw0KsPFb7sms6yX-9SJeNONeSnXnkRDhBZWtmDaM20LXkPTWLeR34hY5Z991AC3fU"/>
          <div className="absolute inset-0 bg-[#001529]/85 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl text-white leading-tight mb-6 italic font-bold" style={{fontFamily:"'Noto Serif'"}}>Impulsamos el futbol con scouting profesional, estrategia y experiencia</h1>
            <p className="text-xl text-[#7992b0] mb-10 max-w-2xl">Ayudamos a jugadores a alcanzar su maximo potencial y a clubes a encontrar el talento perfecto.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#001529] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#f2f4f7] transition-all">Soy Jugador</button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">Soy Club</button>
            </div>
          </div>
        </div>
      </header>

      {/* About Marco */}
      <section className="py-24 bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-[12px] border-white shadow-xl max-w-md mx-auto relative z-10">
                <img className="w-full h-full object-cover" alt="Marco Lujan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoc2ua0RriOiSAoB6EISmkz_P3lJUj9mvyS3feDNk2d-k6paWtlxHeVi3qc5SH8kwhF7-Aw4fbsNZ0qtzGcHbbNr2IZM53WKAsN20y9tYMQFZFwehYTXfGwFoxaTXA6-a7jblQVIN8hi8Zo5A37OeiDl-awwG-kGptnBBaWlO4Jp4JCHAYVCHn_tczetqPPMmsVdsWg1xkf5iP0YINnUGAwxKZEgnwBvuqqUIpqC_1xs1hjZvoLPhumtGf_7kTRi1qrmw74X_0vaU"/>
              </div>
            </div>
            <div>
              <span className="text-[#006970] font-semibold tracking-widest uppercase text-sm mb-4 block">Consultoria de Elite</span>
              <h2 className="text-4xl text-[#001529] font-bold mb-2" style={{fontFamily:"'Noto Serif'"}}>Marco Lujan</h2>
              <p className="text-[#006970] font-medium text-lg mb-6">Football Scout Internacional</p>
              <p className="text-[#43474d] text-lg leading-relaxed mb-10">Con mas de una decada en la industria del futbol, Marco Lujan ha desarrollado una metodologia unica que combina el analisis de datos avanzado con la intuicion tecnica necesaria para descubrir las estrellas del manana.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[{icon:'groups',val:'+50',label:'Clubes Asesorados'},{icon:'analytics',val:'+200',label:'Jugadores Analizados'},{icon:'school',val:'+100',label:'Scouts Formados'}].map((s,i)=>(
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-[#006970]/20">
                    <Icon name={s.icon} className="text-[#006970] mb-2" />
                    <div className="text-2xl font-bold text-[#001529]">{s.val}</div>
                    <div className="text-xs text-[#43474d] font-medium uppercase tracking-tighter">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#f2f4f7]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#001529] font-bold mb-4" style={{fontFamily:"'Noto Serif'"}}>Servicios Profesionales</h2>
            <div className="w-20 h-1 bg-[#006970] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col h-full">
              <div className="w-14 h-14 bg-[#7bf1fc] rounded-lg flex items-center justify-center mb-6"><Icon name="monitoring" className="text-[#006970] text-3xl" /></div>
              <h3 className="text-xl font-bold text-[#001529] mb-4">Analisis de Rendimiento</h3>
              <p className="text-[#43474d] mb-8 flex-grow">Estudio exhaustivo de metricas y tecnica individual para potenciar fortalezas y corregir debilidades.</p>
              <button className="w-full py-3 rounded-lg border-2 border-[#006970] text-[#006970] font-bold hover:bg-[#006970] hover:text-white transition-colors">Ver mas</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-[#006970] relative flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#006970] text-white px-4 py-1 rounded-bl-lg text-xs font-bold">POPULAR</div>
              <div className="w-14 h-14 bg-[#7bf1fc] rounded-lg flex items-center justify-center mb-6"><Icon name="trending_up" className="text-[#006970] text-3xl" /></div>
              <h3 className="text-xl font-bold text-[#001529] mb-2">Plan de Mercado Personalizado</h3>
              <div className="text-2xl text-[#006970] font-bold mb-4" style={{fontFamily:"'Noto Serif'"}}>&#8364;200</div>
              <p className="text-[#43474d] mb-8 flex-grow">Estrategia de posicionamiento y contacto con clubes basada en el perfil especifico del jugador.</p>
              <button className="w-full py-3 rounded-lg bg-[#001529] text-white font-bold hover:bg-[#0f2a43] transition-colors">Contratar</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col h-full">
              <div className="w-14 h-14 bg-[#7bf1fc] rounded-lg flex items-center justify-center mb-6"><Icon name="business" className="text-[#006970] text-3xl" /></div>
              <h3 className="text-xl font-bold text-[#001529] mb-4">Asesoria para Clubes</h3>
              <p className="text-[#43474d] mb-8 flex-grow">Optimizacion de departamentos de scouting y busqueda activa de talento subestimado.</p>
              <button className="w-full py-3 rounded-lg border-2 border-[#006970] text-[#006970] font-bold hover:bg-[#006970] hover:text-white transition-colors">Consultar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#001529]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl text-white font-bold mb-4 italic" style={{fontFamily:"'Noto Serif'"}}>Quieres saber tu nivel real?</h2>
            <p className="text-[#7992b0] text-lg mb-10">Realiza nuestro test de diagnostico gratuito y recibe un informe preliminar sobre tus posibilidades en el mercado profesional actual.</p>
            <Link to="/nivel-2/diagnostico" className="inline-block bg-white text-[#001529] px-10 py-5 rounded-xl font-bold text-lg shadow-xl">Hacer el Diagnostico Gratis</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl text-[#001529] font-bold mb-16" style={{fontFamily:"'Noto Serif'"}}>Lo que dicen de nosotros</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {q:"El curso de scouting cambio por completo mi forma de entender el juego.",n:"Carlos Ruiz",r:"Estudiante / Analista"},
              {q:"Gracias al plan de mercado personalizado, logre mi primer contrato profesional en Europa.",n:"Diego Mendez",r:"Jugador Profesional"},
              {q:"Como director deportivo, el analisis de Marco nos ahorro miles de euros en fichajes.",n:"Elena Santos",r:"Directora Deportiva"},
            ].map((t,i)=>(
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-[#eceef1]">
                <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(s=><Icon key={s} name="star" filled className="text-yellow-400 text-sm" />)}</div>
                <p className="italic text-[#191c1e] mb-8">"{t.q}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center"><Icon name="person" className="text-slate-400" /></div>
                  <div><div className="font-bold text-[#001529]">{t.n}</div><div className="text-xs text-[#006970] font-medium">{t.r}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#001529]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#006970] text-white px-4 py-2 rounded-full text-sm font-bold mb-8"><Icon name="timer" className="text-base" /> +80 en lista</div>
          <h2 className="text-5xl text-white font-bold mb-6 italic" style={{fontFamily:"'Noto Serif'"}}>Curso Scouting - Proxima Edicion</h2>
          <p className="text-[#7992b0] text-xl mb-12 max-w-2xl mx-auto">Formacion intensiva para futuros profesionales del futbol.<br/><span className="text-[#006970] font-bold mt-4 block">Proxima edicion: Septiembre 2026</span></p>
          <button className="bg-[#006970] text-white px-12 py-5 rounded-xl font-bold text-xl shadow-2xl">Anotarme en la Lista de Espera</button>
        </div>
      </section>

      <Footer level={2} />
    </div>
  )
}
