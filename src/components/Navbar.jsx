import { NavLink, Link } from 'react-router-dom'

export default function Navbar({ activeItem, level = 3 }) {
  const isN2 = level === 2
  const prefix = isN2 ? '/nivel-2' : '/nivel-3'
  const primaryColor = isN2 ? '#0F2A43' : '#0A1A3A'
  const accentColor = isN2 ? '#006970' : '#0A1A3A'

  const links = [
    { to: `${prefix}/home`, label: 'Inicio', key: 'inicio' },
    { to: `${prefix}/servicios`, label: 'Servicios', key: 'servicios' },
    { to: `${prefix}/curso`, label: 'Curso Scouting', key: 'curso' },
    { to: `${prefix}/diagnostico`, label: 'Diagnostico', key: 'diagnostico' },
    ...(level === 3 ? [{ to: `${prefix}/blog`, label: 'Blog', key: 'blog' }] : []),
    { to: `${prefix}/contacto`, label: 'Contacto', key: 'contacto' },
  ]

  const loginHref = isN2 ? '/nivel-2/jugador-perfil' : '/nivel-3/jugador-dashboard'
  const registerHref = isN2 ? '/nivel-2/registro' : '/nivel-3/jugador-dashboard'

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">
        <Link to={`${prefix}/home`} className="text-xl font-bold tracking-tight" style={{ color: primaryColor, fontFamily: "'Noto Serif'", fontStyle: 'italic' }}>
          ML Scouting Academy
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.key}
              to={link.to}
              className={({ isActive }) =>
                isActive || activeItem === link.key
                  ? `font-semibold text-sm ${isN2 ? 'text-[#006970] border-b-2 border-[#006970] pb-1' : 'text-[#0A1A3A] font-semibold text-sm'}`
                  : `text-slate-600 hover:text-[${primaryColor}] text-sm font-medium transition-all`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {level === 3 && (
            <div className="flex items-center gap-1 text-xs text-slate-500 border-l pl-4 border-slate-200">
              <span className="font-bold text-[#0A1A3A]">ES</span> | <span>EN</span> | <span>PT</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <Link to={loginHref} className="text-sm font-medium text-slate-600 hover:text-[#0A1A3A] transition-all">Iniciar Sesion</Link>
          <Link to={registerHref} className="text-white px-6 py-2.5 rounded-lg text-sm font-semibold inline-block" style={{ backgroundColor: isN2 ? '#001529' : '#0A1A3A' }}>Registrarse</Link>
        </div>
      </div>
    </nav>
  )
}
