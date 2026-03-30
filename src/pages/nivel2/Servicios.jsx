import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

export default function Servicios() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="servicios" level={2} />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="italic text-5xl md:text-6xl text-[#001529] mb-6 leading-tight font-bold" style={{fontFamily:"'Noto Serif'"}}>Servicios para Jugadores</h1>
          <p className="text-lg text-[#43474d]">Elegi el servicio que mejor se adapte a tu situacion actual y lleva tu carrera al siguiente nivel profesional.</p>
        </header>

        <div className="space-y-32">
          {/* Service 1: Analisis de Rendimiento */}
          <section className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#f2f4f7] rounded-[1.5rem] -z-10 transition-colors group-hover:bg-[#eceef1]"></div>
              <img alt="Tactical analysis" className="w-full h-[500px] object-cover rounded-xl shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrBHwZGQJYS9nH83Sa3w_JEs1wxUa6RkY4AjOTtCPkLTPvdws_GDeobJwebZDs7tBe4dHAE37Dq7wyLDKxYEi8mXj0FgA34A2AoduxR74inMvCj-TC_iLdpcfrvmqsetf0WN3D0IaNyq5lJka-5GNiCjQe_UzEsUqUlEg-ZWTFocAb4bvKNi1VwHXL2LE7ObFSdGDEyrW1VhTEzhboP_ezmP_cO6JfCASMQieQM2_HtmdbQr3qT4a3nCWZmf9tEsfb2gaQFDlhenY"/>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-widest text-[#006970] uppercase mb-4">Optimizacion Tecnica</span>
              <h2 className="text-4xl text-[#001529] mb-6 font-bold" style={{fontFamily:"'Noto Serif'"}}>Analisis de Rendimiento Detallado</h2>
              <p className="text-[#43474d] mb-8 text-lg leading-relaxed">Proporcionamos una vision 360 de tu desempeno en el campo. Identificamos fortalezas que te hacen unico y debilidades criticas que podrian estar limitando tu crecimiento profesional.</p>
              <ul className="space-y-4 mb-10">
                {['Evaluacion biomecanica y posicional avanzada','Mapa de calor y estadisticas de juego real','Video-analisis individualizado por partido','Comparativa con perfiles de ligas objetivo','Informe descargable para agencias y clubes'].map((item,i)=>(
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="check_circle" filled className="text-[#0f2a43]" />
                    <span className="text-[#191c1e]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between p-8 bg-[#f2f4f7] rounded-xl">
                <div>
                  <p className="text-sm text-[#43474d] uppercase tracking-wider mb-1">Inversion</p>
                  <p className="text-2xl font-bold text-[#001529]" style={{fontFamily:"'Noto Serif'"}}>Consultar</p>
                </div>
                <button className="bg-[#001529] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0f2a43] transition-all active:scale-95">Solicitar Analisis</button>
              </div>
            </div>
          </section>

          {/* Service 2: Plan de Mercado (Featured) */}
          <section className="bg-[#001529] text-white rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-16">
                <div className="flex items-center gap-3 mb-8">
                  <span className="bg-[#006970] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Recomendado</span>
                  <div className="h-px flex-1 bg-white/20"></div>
                </div>
                <h2 className="text-4xl mb-6 font-bold" style={{fontFamily:"'Noto Serif'"}}>Plan de Mercado Personalizado</h2>
                <p className="text-[#7992b0] mb-10 text-lg leading-relaxed">Disenamos la ruta estrategica para que llegues al club adecuado. No se trata de buscar cualquier equipo, sino el ecosistema donde tu talento brille mas.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {['Identificacion de mercados','Filtro de clubes por estilo','Contacto directo con scouts','Asesoria en contratos','Dossier de presentacion','Marketing de perfil social','Analisis de competencia','Estrategia de visibilidad'].map((item,i)=>(
                    <div key={i} className="flex items-start gap-3">
                      <Icon name="check_circle" className="text-[#80f4ff]" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <button className="w-full bg-[#006970] hover:bg-[#006e75] text-white py-5 rounded-xl font-bold text-xl transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-3">
                    Comprar Plan de Mercado - &euro;200
                  </button>
                  <div className="flex items-center justify-center gap-2 text-white/60 text-xs">
                    <Icon name="lock" className="text-sm" />
                    <span>Pago seguro procesado por Stripe. Encriptacion de 256 bits.</span>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#001529] to-transparent z-10"></div>
                <img alt="World map" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUMpz7k6KA6O87GQI8VCR5aBOW2-W8Ch-Caj3LT1HmKwRk-QMkB5oqd_1bEZbx2Cs9_iUp1rWSMtYMdDCAxFq_S-4dGm97PwZ3llkfNGs8s3MAKarX2wAKOR7IqtORdXA2rBegb355g0yaDO6W0V8zbLwoVX5i5qsYRUsme5V52WvPfr9DW-aWo_V707-Q4t57Xs0pXOfTK0jUdCon49xFyaSaStgIZLYyy4B5fHol_pk-Bb5b9uowHHgVQUMfAXM3a5YlEx_T0k0"/>
                <div className="absolute bottom-12 right-12 z-20 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-white/80 text-sm mb-1 uppercase tracking-widest">Inversion Unica</p>
                  <p className="text-5xl font-bold text-white" style={{fontFamily:"'Noto Serif'"}}>&euro;200</p>
                </div>
              </div>
            </div>
          </section>

          {/* Service 3: Asesoria para Clubes */}
          <section className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 flex flex-col">
              <span className="text-sm font-semibold tracking-widest text-[#006970] uppercase mb-4">Soluciones Corporativas</span>
              <h2 className="text-4xl text-[#001529] mb-6 font-bold" style={{fontFamily:"'Noto Serif'"}}>Asesoria para Clubes y Equipos</h2>
              <p className="text-[#43474d] mb-8 text-lg leading-relaxed">Modernizamos los departamentos de scouting. Implementamos metodologias de elite para optimizar la captacion de talento y reducir el margen de error en fichajes.</p>
              <ul className="space-y-4 mb-10">
                {['Auditoria de procesos de captacion','Software de gestion de base de datos','Formacion in-house para scouts','Estrategia de Scouting por Data Analytics'].map((item,i)=>(
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="check_circle" filled className="text-[#0f2a43]" />
                    <span className="text-[#191c1e]">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-fit bg-[#e0e3e6] text-[#001529] px-10 py-4 rounded-lg font-semibold hover:bg-[#e6e8eb] transition-all active:scale-95 border-none">Solicitar Asesoria</button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 bg-[#f2f4f7] rounded-[1.5rem] -z-10"></div>
              <img alt="Meeting room" className="w-full h-[500px] object-cover rounded-xl shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG-jhrDNgKYxCL1A9jxhyPW7ynDjsOoT62KAv14UwLGvHzflyrT0pJPP899jtfAKNj6ipN4xw0m79ZbSOn03nzD3uvwFDijPnCxgaw2ZnvXcxNfYvZatg8YuhT6X-U1u5N3re1rKWC2RYca-2k5wgQo9xdGp3X7NNJSjuo28013rBHArX7cPh3A1jgcuD3lyGpS0CO5Ym1xXXNvyfD_0rrm6yHaLyewtFqI2mAQCiRe0Pp9YZmL0RtdI3D1s6i8Acy0lAlxP9l8JQ"/>
            </div>
          </section>
        </div>
      </main>

      <Footer level={2} />
    </div>
  )
}
