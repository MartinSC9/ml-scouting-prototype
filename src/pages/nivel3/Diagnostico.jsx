import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

export default function Diagnostico() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="diagnostico" level={3} />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <span className="text-[#445d94] font-bold tracking-widest text-xs uppercase mb-4 block">Evaluacion de Perfil</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#0A1A3A] font-bold leading-tight mb-6" style={{fontFamily:"'Noto Serif'",fontStyle:'italic'}}>Diagnostico para Futbolistas</h1>
          <p className="text-[#45464e] text-lg md:text-xl font-light max-w-2xl mx-auto">Descubri que esta limitando tu carrera en 1 minuto</p>
        </header>

        <div className="bg-white rounded-xl shadow-[0_32px_64px_-15px_rgba(25,28,30,0.04)] overflow-hidden">
          <div className="h-1.5 w-full bg-[#eceef1]">
            <div className="h-full bg-[#445d94] transition-all duration-700 ease-out" style={{width:'14.2%'}}></div>
          </div>
          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex items-center gap-2 mb-10">
              <span className="bg-[#445d94]/10 text-[#445d94] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Paso 01 de 07</span>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl text-[#0A1A3A] font-bold mb-4" style={{fontFamily:"'Noto Serif'",fontStyle:'italic'}}>Que edad tenes actualmente?</h2>
              <p className="text-[#45464e]">Esto nos ayuda a entender tu etapa de desarrollo profesional.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{icon:'child_care',label:'Menos de 18'},{icon:'person',label:'18 a 23'},{icon:'sports_soccer',label:'24 a 30'},{icon:'elderly',label:'Mas de 30'}].map((opt,i)=>(
                <button key={i} className="group flex items-center justify-between p-6 bg-[#f2f4f7] rounded-lg hover:bg-[#0A1A3A] hover:text-white transition-all duration-300 text-left">
                  <div className="flex items-center gap-4">
                    <Icon name={opt.icon} className="text-[#445d94] group-hover:text-[#a7c0fd]" />
                    <span className="font-semibold tracking-tight">{opt.label}</span>
                  </div>
                  <Icon name="arrow_forward" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
            <div className="mt-16 flex items-center justify-between">
              <button className="flex items-center gap-2 text-[#45464e] hover:text-[#0A1A3A] transition-colors font-medium text-sm">
                <Icon name="arrow_back" className="text-sm" /> Volver
              </button>
              <div className="text-xs text-[#45464e]/60 font-medium">
                Presiona <span className="bg-[#eceef1] px-1.5 py-0.5 rounded border border-[#c5c6cf]">Enter</span> para continuar
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {icon:'insights',title:'Analisis de Mercado',desc:'Cruzamos tus datos con requerimientos actuales de ligas profesionales.'},
            {icon:'verified_user',title:'Privacidad Total',desc:'Tus datos son analizados exclusivamente por nuestro equipo de scouting.'},
            {icon:'timer',title:'Resultado Inmediato',desc:'Recibe una hoja de ruta preliminar al finalizar el formulario.'},
          ].map((c,i)=>(
            <div key={i} className="bg-[#f2f4f7] p-8 rounded-lg">
              <div className="text-[#445d94] mb-4"><Icon name={c.icon} className="text-3xl" /></div>
              <h4 className="text-lg font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'",fontStyle:'italic'}}>{c.title}</h4>
              <p className="text-sm text-[#45464e] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer level={3} />
    </div>
  )
}
