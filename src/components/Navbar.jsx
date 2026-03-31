import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar({ activeItem, transparent = false, hero = false }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = (isActive) =>
    isActive
      ? `font-semibold text-sm ${transparent && !scrolled ? 'text-white' : 'text-[#0A1A3A]'}`
      : `text-sm font-medium transition-all ${transparent && !scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-[#0A1A3A]'}`

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : transparent ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
      <div className={`flex justify-between items-center px-8 max-w-7xl mx-auto transition-all duration-300 ${!hero || scrolled ? 'py-1' : 'py-3'}`}>
        <Link to="/" onClick={(e) => { if (location.pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) } }} className="flex items-center gap-3">
          <Logo size={!hero || scrolled ? 60 : 110} className="transition-all duration-300" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" onClick={(e) => { if (location.pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) } }} className={({ isActive }) => linkClass(isActive || activeItem === 'inicio')}>Inicio</NavLink>

          <button onClick={() => {
            const scrollTo = () => {
              const el = document.getElementById('servicios')
              if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return true }
              return false
            }
            if (location.pathname === '/') { scrollTo() } else { navigate('/#servicios') }
          }} className={linkClass(['servicios','curso','diagnostico'].includes(activeItem)) + ' cursor-pointer'}>Servicios</button>

          <button onClick={() => {
            const scrollTo = () => {
              const el = document.getElementById('blog')
              if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return true }
              return false
            }
            if (location.pathname === '/') { scrollTo() } else { navigate('/#blog') }
          }} className={linkClass(activeItem === 'blog') + ' cursor-pointer'}>Blog</button>
          <NavLink to="/contacto" className={({ isActive }) => linkClass(isActive || activeItem === 'contacto')}>Contacto</NavLink>

          <a
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-4 px-5 py-2 rounded-lg font-semibold text-sm transition-all ${
              transparent && !scrolled
                ? 'bg-white text-[#0A1A3A] hover:bg-slate-100'
                : 'bg-[#0A1A3A] text-white hover:bg-[#0f2a43]'
            }`}
          >
            Ingresar
          </a>
        </div>
      </div>
    </nav>
  )
}
