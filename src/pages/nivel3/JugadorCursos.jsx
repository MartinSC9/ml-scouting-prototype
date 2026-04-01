import { Link } from 'react-router-dom'
import PlayerLayout from '../../components/PlayerLayout'
import Icon from '../../components/Icon'

export default function JugadorCursos() {
  return (
    <PlayerLayout activeItem="cursos" level={3}>
      <h1 className="text-xl md:text-2xl font-bold text-[#0A1A3A] mb-4 md:mb-6" style={{fontFamily:"'Noto Serif'"}}>Mis Cursos</h1>

      {/* Active Course */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 md:p-6 mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 className="font-bold text-[#0A1A3A] text-base md:text-lg">Curso de Scouting Profesional</h2>
            <p className="text-sm text-slate-500">Septiembre 2026 · 6 módulos · 24 clases</p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800 self-start sm:self-auto">Inscripto</span>
        </div>
        <div className="bg-[#f2f4f7] rounded-lg p-1 mb-4">
          <div className="bg-[#0A1A3A] h-2 rounded-lg" style={{width:'35%'}}></div>
        </div>
        <p className="text-sm text-slate-500 mb-6">Progreso: 35% completado (Módulo 2 de 6)</p>

        {/* Modules */}
        <div className="space-y-3">
          {[
            {n:'01',title:'Fundamentos del Scouting',status:'Completado',statusBg:'bg-emerald-100 text-emerald-800',lessons:'4/4'},
            {n:'02',title:'Observación y Análisis',status:'En progreso',statusBg:'bg-amber-100 text-amber-800',lessons:'2/4'},
            {n:'03',title:'Herramientas Digitales',status:'Bloqueado',statusBg:'bg-slate-100 text-slate-600',lessons:'0/4'},
            {n:'04',title:'Creación de Informes',status:'Bloqueado',statusBg:'bg-slate-100 text-slate-600',lessons:'0/4'},
            {n:'05',title:'Análisis Táctico',status:'Bloqueado',statusBg:'bg-slate-100 text-slate-600',lessons:'0/4'},
            {n:'06',title:'Red y Mercado',status:'Bloqueado',statusBg:'bg-slate-100 text-slate-600',lessons:'0/4'},
          ].map((m,i)=>(
            <div key={i} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-[#f2f4f7] rounded-lg">
              <span className="w-9 h-9 md:w-10 md:h-10 bg-[#0A1A3A] text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">{m.n}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-[#0A1A3A] truncate">{m.title}</h3>
                <p className="text-xs text-slate-500">{m.lessons} clases</p>
              </div>
              <span className={`text-xs font-semibold px-2 md:px-3 py-1 rounded-full whitespace-nowrap ${m.statusBg}`}>{m.status}</span>
              {m.status!=='Bloqueado' && (
                <Link to="/jugador-clase" className="text-[#445d94] hover:text-[#0A1A3A] min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0"><Icon name="play_circle" className="text-xl" /></Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </PlayerLayout>
  )
}
