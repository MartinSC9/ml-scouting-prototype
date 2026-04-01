import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../core/contexts/AuthContext'
import Icon from './Icon'

export default function PlayerNavbar({ activeItem }) {
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const links = [
    { to: '/jugador-dashboard', label: 'Dashboard', key: 'dashboard' },
    { to: '/jugador-perfil', label: 'Mi Perfil', key: 'perfil' },
    { to: '/jugador-cursos', label: 'Mis Cursos', key: 'cursos' },
    { to: '/jugador-referidos', label: 'Referidos', key: 'referidos' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center h-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Link to="/" className="text-lg font-bold text-[#0A1A3A]" style={{ fontFamily: "'Noto Serif'", fontStyle: 'italic' }}>
          ML Scouting
        </Link>
        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.key}
              to={link.to}
              className={({ isActive }) =>
                isActive || activeItem === link.key
                  ? 'text-[#0A1A3A] font-semibold text-sm'
                  : 'text-slate-500 hover:text-[#0A1A3A] text-sm font-medium transition-all'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="relative flex items-center gap-2 md:gap-3">
          <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-slate-600">notifications</span>
          {/* Mobile hamburger */}
          <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-50">
            <Icon name={mobileNavOpen ? 'close' : 'menu'} className="text-slate-600" />
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-[#006970] flex items-center justify-center text-white text-xs font-bold">
              {user ? `${user.firstName[0]}${user.lastName[0]}` : '?'}
            </div>
            <Icon name="expand_more" className="text-slate-400 text-sm hidden md:block" />
          </button>
          {menuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                {user && (
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-sm font-semibold text-[#0A1A3A]">{user.firstName} {user.lastName}</p>
                    <p className="text-xs text-slate-400">{user.email}</p>
                  </div>
                )}
                <Link to="/" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50">
                  <span className="flex items-center gap-2"><Icon name="home" className="text-lg text-slate-400" /> Ir al sitio</span>
                </Link>
                <button onClick={() => { setMenuOpen(false); logout() }} className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
                  <Icon name="logout" className="text-lg" /> Cerrar sesión
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Mobile nav menu */}
      {mobileNavOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="flex flex-col px-4 py-2">
            {links.map((link) => (
              <NavLink
                key={link.key}
                to={link.to}
                onClick={() => setMobileNavOpen(false)}
                className={({ isActive }) =>
                  `py-3 px-2 text-sm font-medium border-b border-slate-50 last:border-0 ${
                    isActive || activeItem === link.key
                      ? 'text-[#0A1A3A] font-semibold'
                      : 'text-slate-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
