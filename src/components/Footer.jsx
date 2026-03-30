import { Link } from 'react-router-dom'

export default function Footer({ level = 3 }) {
  const isN2 = level === 2
  const prefix = isN2 ? '/nivel-2' : '/nivel-3'
  const bgColor = isN2 ? '#0F2A43' : '#0A1A3A'

  if (isN2) {
    return (
      <footer className="w-full pt-16 pb-8 text-white flex flex-col items-center gap-8 px-4 border-t border-slate-700/50" style={{ backgroundColor: bgColor }}>
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white font-serif italic text-2xl">ML Scouting Academy</div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link className="font-sans text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-opacity" to={`${prefix}/home`}>Inicio</Link>
            <Link className="font-sans text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-opacity" to={`${prefix}/servicios`}>Servicios</Link>
            <Link className="font-sans text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-opacity" to={`${prefix}/curso`}>Curso</Link>
            <Link className="font-sans text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-opacity" to={`${prefix}/contacto`}>Contacto</Link>
            <a className="font-sans text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-opacity" href="#">T&C</a>
            <a className="font-sans text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-opacity" href="#">Privacy</a>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white/10 max-w-7xl"></div>
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-500">&copy; 2026 ML Scouting Academy. Todos los derechos reservados.</p>
      </footer>
    )
  }

  return (
    <footer className="text-white py-8 px-8" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center text-xs text-slate-500">
        <p>&copy; 2026 ML Scouting Academy. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Politica de Privacidad</a>
          <a href="#" className="hover:text-white">Terminos de Uso</a>
        </div>
      </div>
    </footer>
  )
}
