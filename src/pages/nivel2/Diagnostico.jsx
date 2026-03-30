import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

export default function Diagnostico() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="diagnostico" level={2} />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <span className="text-[#006970] font-bold tracking-widest text-xs uppercase mb-4 block">Evaluacion de Perfil</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#001529] font-bold italic leading-tight mb-6" style={{fontFamily:"'Noto Serif'"}}>Diagnostico para Futbolistas</h1>
          <p className="text-[#43474d] text-lg md:text-xl font-light max-w-2xl mx-auto">Descubri que esta limitando tu carrera en 1 minuto</p>
        </header>

        {/* Quiz Container */}
        <div className="bg-white rounded-xl shadow-[0_32px_64px_-15px_rgba(25,28,30,0.04)] overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-[#eceef1]">
            <div className="h-full bg-[#006970] transition-all duration-700 ease-out" style={{width:'28.5%'}}></div>
          </div>
          <div className="p-8 md:p-12 lg:p-16">
            {/* Step Counter */}
            <div className="flex items-center gap-2 mb-10">
              <span className="bg-[#006970]/10 text-[#006970] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Paso 02 de 07</span>
            </div>
            {/* Step Title */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl text-[#001529] font-bold mb-4 italic" style={{fontFamily:"'Noto Serif'"}}>En que posicion te destacas dentro del campo?</h2>
              <p className="text-[#43474d]">Esto nos ayuda a entender los parametros tecnicos especificos que el mercado demanda de tu rol.</p>
            </div>
            {/* Position Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {icon:'sports_soccer',label:'Arquero'},
                {icon:'shield',label:'Defensor'},
                {icon:'settings_input_component',label:'Mediocampista'},
                {icon:'bolt',label:'Delantero'},
              ].map((opt,i)=>(
                <button key={i} className="group flex items-center justify-between p-6 bg-[#f2f4f7] rounded-lg hover:bg-[#001529] hover:text-white transition-all duration-300 text-left">
                  <div className="flex items-center gap-4">
                    <Icon name={opt.icon} className="text-[#006970] group-hover:text-[#80f4ff]" />
                    <span className="font-semibold tracking-tight">{opt.label}</span>
                  </div>
                  <Icon name="arrow_forward" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
            {/* Navigation */}
            <div className="mt-16 flex items-center justify-between">
              <button className="flex items-center gap-2 text-[#43474d] hover:text-[#001529] transition-colors font-medium text-sm">
                <Icon name="arrow_back" className="text-sm" /> Volver
              </button>
              <div className="text-xs text-[#43474d]/60 font-medium">
                Presiona <span className="bg-[#eceef1] px-1.5 py-0.5 rounded border border-[#c3c6ce]">Enter</span> para continuar
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {icon:'insights',title:'Analisis de Mercado',desc:'Cruzamos tus datos con requerimientos actuales de ligas profesionales.'},
            {icon:'verified_user',title:'Privacidad Total',desc:'Tus datos son analizados exclusivamente por nuestro equipo de scouting.'},
            {icon:'timer',title:'Resultado Inmediato',desc:'Recibe una hoja de ruta preliminar al finalizar el formulario.'},
          ].map((c,i)=>(
            <div key={i} className="bg-[#f2f4f7] p-8 rounded-lg">
              <div className="text-[#006970] mb-4"><Icon name={c.icon} className="text-3xl" /></div>
              <h4 className="italic text-lg font-bold text-[#001529] mb-2" style={{fontFamily:"'Noto Serif'"}}>{c.title}</h4>
              <p className="text-sm text-[#43474d] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer level={2} />
    </div>
  )
}
