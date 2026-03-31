import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="text-white py-8 px-8" style={{ backgroundColor: '#0A1A3A' }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center text-xs text-slate-500">
        <p>&copy; 2026 ML Scouting. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <Link to="/nivel-3/legal?tab=privacidad" className="hover:text-white">Politica de Privacidad</Link>
          <Link to="/nivel-3/legal?tab=terminos" className="hover:text-white">Terminos de Uso</Link>
        </div>
      </div>
    </footer>
  )
}
