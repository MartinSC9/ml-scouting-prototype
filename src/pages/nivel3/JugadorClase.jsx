import { Link } from 'react-router-dom'
import PlayerLayout from '../../components/PlayerLayout'
import Icon from '../../components/Icon'

export default function JugadorClase() {
  return (
    <PlayerLayout activeItem="cursos" level={3}>
      <Link to="/jugador-cursos" className="text-sm text-[#445d94] hover:underline mb-4 md:mb-6 inline-flex items-center gap-1 min-h-[44px] md:min-h-0"><Icon name="arrow_back" className="text-sm" /> Volver a Cursos</Link>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <div className="md:col-span-2">
          {/* Video */}
          <div className="aspect-video bg-[#0A1A3A] rounded-xl flex items-center justify-center mb-4 md:mb-6">
            <Icon name="play_circle" className="text-white/60 text-5xl md:text-7xl" style={{fontSize: undefined}} />
          </div>

          {/* Lesson Info */}
          <div className="bg-white rounded-xl border border-slate-100 p-4 md:p-6 mb-4 md:mb-6">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Módulo 2 · Clase 3</span>
            <h1 className="text-lg md:text-xl font-bold text-[#0A1A3A] mt-3 mb-2" style={{fontFamily:"'Noto Serif'"}}>Análisis de video: identificando patrones de juego</h1>
            <p className="text-slate-500 text-sm leading-relaxed">En esta clase aprenderemos a identificar patrones tácticos y de movimiento a través del video-análisis. Veremos ejemplos reales de partidos profesionales y practicaremos la toma de notas durante el visionado.</p>
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><Icon name="schedule" className="text-sm" /> 45 min</span>
              <span className="flex items-center gap-1"><Icon name="description" className="text-sm" /> Material descargable</span>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white rounded-xl border border-slate-100 p-4 md:p-6">
            <h3 className="font-bold text-[#0A1A3A] mb-4">Recursos</h3>
            <div className="space-y-3">
              {[{name:'Plantilla de Analisis.pdf',size:'2.4 MB'},{name:'Video ejemplo - Partido completo.mp4',size:'145 MB'},{name:'Ejercicio práctico.docx',size:'1.1 MB'}].map((r,i)=>(
                <div key={i} className="flex items-center justify-between gap-2 p-3 bg-[#f2f4f7] rounded-lg">
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon name="description" className="text-[#445d94] flex-shrink-0" />
                    <div className="min-w-0"><p className="text-sm font-medium truncate">{r.name}</p><p className="text-xs text-slate-400">{r.size}</p></div>
                  </div>
                  <button className="text-[#445d94] hover:text-[#0A1A3A] flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"><Icon name="download" /></button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Lessons */}
        <div className="bg-white rounded-xl border border-slate-100 p-4 md:p-6 h-fit">
          <h3 className="font-bold text-[#0A1A3A] mb-4 text-sm md:text-base">Módulo 2: Observación y Análisis</h3>
          <div className="space-y-2">
            {[
              {n:1,title:'Metodología de observación en vivo',done:true},
              {n:2,title:'Toma de notas y registro',done:true},
              {n:3,title:'Análisis de video: patrones de juego',current:true},
              {n:4,title:'Evaluación de rendimiento individual',locked:true},
            ].map((l,i)=>(
              <div key={i} className={`flex items-center gap-3 p-3 rounded-lg text-sm min-h-[44px] ${l.current?'bg-[#0A1A3A] text-white':'hover:bg-slate-50'}`}>
                {l.done?<Icon name="check_circle" filled className="text-green-500 text-lg flex-shrink-0" />:l.current?<Icon name="play_circle" filled className="text-white text-lg flex-shrink-0" />:<Icon name="lock" className="text-slate-300 text-lg flex-shrink-0" />}
                <span className={l.locked?'text-slate-400':''}>{l.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PlayerLayout>
  )
}
