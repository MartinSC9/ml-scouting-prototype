import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

const services = [
  {icon:'assessment',title:'Informe Tecnico',rating:'4.9',price:'\u20AC150',features:['Video-analisis de 3 partidos','Informe PDF detallado','Reunion de devolucion 1h','Plan de mejora personalizado'],desc:'Analisis completo de tus capacidades tecnicas, fisicas y tacticas. Incluye video-analisis, evaluacion de rendimiento y recomendaciones personalizadas para mejorar tu perfil profesional.'},
  {icon:'travel_explore',title:'Plan de Mercado',rating:'5.0',price:'\u20AC250',popular:true,features:['Todo lo del Informe Tecnico','Mapa de mercados objetivo','Preparacion de CV deportivo','Contacto con 5 clubes','Seguimiento 3 meses'],desc:'Estrategia personalizada para posicionarte en los mercados adecuados. Incluye analisis de ligas compatibles, preparacion de materiales y conexion con contactos clave.'},
  {icon:'groups',title:'Representacion',rating:'4.8',price:'\u20AC500',features:['Todo lo del Plan de Mercado','Gestion de pruebas en clubes','Negociacion contractual','Acompanamiento continuo','Red de contactos premium'],desc:'Acompanamiento integral con acceso a nuestra red de clubes, agentes y oportunidades. Gestion completa de tu carrera deportiva internacional.'},
]

const comparison = [
  ['Video-analisis',true,true,true],['Informe PDF',true,true,true],['Reunion de devolucion',true,true,true],
  ['Mapa de mercados',false,true,true],['CV deportivo',false,true,true],
  ['Contacto con clubes',false,'5 clubes','Ilimitado'],['Seguimiento',false,'3 meses','Continuo'],
  ['Gestion de pruebas',false,false,true],['Negociacion contractual',false,false,true],['Red premium',false,false,true],
]

export default function Servicios() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="servicios" level={3} />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#0A1A3A] py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>Nuestros Servicios</h1>
            <p className="text-slate-300 text-lg">Soluciones profesionales para cada etapa de tu carrera futbolistica.</p>
          </div>
        </section>

        {/* Cards */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {services.map((s,i)=>(
              <div key={i} className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all relative ${s.popular?'border-2 border-[#0A1A3A]':'border border-slate-100'}`}>
                {s.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A1A3A] text-white text-xs px-4 py-1 rounded-full font-semibold">Mas popular</span>}
                <div className="w-14 h-14 bg-[#0A1A3A] rounded-lg flex items-center justify-center mb-6"><Icon name={s.icon} className="text-white text-2xl" /></div>
                <h3 className="text-xl font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'"}}>{s.title}</h3>
                <div className="flex items-center gap-1 mb-4 text-yellow-400">{[1,2,3,4,5].map(x=><Icon key={x} name="star" filled className="text-sm" />)}<span className="text-xs text-slate-500 ml-1">{s.rating}</span></div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f,fi)=>(
                    <li key={fi} className="flex items-center gap-2 text-sm text-slate-600"><Icon name="check_circle" className="text-green-500 text-lg" />{f}</li>
                  ))}
                </ul>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-bold text-[#0A1A3A]">{s.price}</p>
                  <button className="bg-[#0A1A3A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0A1A3A]/90 transition">Contratar</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Como Funciona</h2>
            <p className="text-slate-500">Un proceso simple y profesional en 4 pasos.</p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200"></div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[{icon:'quiz',title:'1. Diagnostico',desc:'Completa el diagnostico gratuito para que conozcamos tu perfil.'},{icon:'handshake',title:'2. Reunion',desc:'Agendamos una llamada para definir el servicio ideal para vos.'},{icon:'analytics',title:'3. Analisis',desc:'Trabajamos en tu informe, plan de mercado o estrategia integral.'},{icon:'rocket_launch',title:'4. Accion',desc:'Ejecutamos el plan y te conectamos con las oportunidades reales.'}].map((s,i)=>(
                <div key={i} className="text-center">
                  <div className="w-24 h-24 bg-[#0A1A3A] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"><Icon name={s.icon} className="text-white" style={{fontSize:'32px'}} /></div>
                  <h3 className="font-bold text-[#0A1A3A] mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0A1A3A] text-center mb-12" style={{fontFamily:"'Noto Serif'"}}>Compara los Servicios</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A1A3A] text-white">
                    <th className="text-left p-4 font-semibold">Caracteristica</th>
                    <th className="p-4 font-semibold text-center">Informe Tecnico<br/><span className="font-normal text-slate-300">{'\u20AC'}150</span></th>
                    <th className="p-4 font-semibold text-center">Plan de Mercado<br/><span className="font-normal text-slate-300">{'\u20AC'}250</span></th>
                    <th className="p-4 font-semibold text-center">Representacion<br/><span className="font-normal text-slate-300">{'\u20AC'}500</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparison.map(([feat,a,b,c],i)=>(
                    <tr key={i} className={i%2?'bg-slate-50':''}>
                      <td className="p-4 text-slate-600">{feat}</td>
                      {[a,b,c].map((v,vi)=>(
                        <td key={vi} className="p-4 text-center">
                          {v===true?<Icon name="check" className="text-green-500" />:v===false?<Icon name="close" className="text-slate-300" />:<span className="text-slate-600">{v}</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-8 bg-[#0A1A3A]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>No sabes cual elegir?</h2>
            <p className="text-slate-300 mb-8">Hace el diagnostico gratuito y te recomendamos el servicio ideal para tu perfil.</p>
            <Link to="/nivel-3/diagnostico" className="inline-block bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Comenzar Diagnostico</Link>
          </div>
        </section>
      </main>
      <Footer level={3} />
    </div>
  )
}
