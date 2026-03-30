import { Link } from 'react-router-dom'
import Icon from './Icon'

const n3Items = [
  { key: 'dashboard', icon: 'dashboard', label: 'Dashboard', href: '/nivel-3/admin/dashboard' },
  { key: 'jugadores', icon: 'groups', label: 'Jugadores', href: '/nivel-3/admin/jugadores' },
  { key: 'servicios', icon: 'handshake', label: 'Servicios', href: '#' },
  { key: 'curso', icon: 'school', label: 'Curso Scouting', href: '/nivel-3/admin/cursos' },
  { key: 'blog', icon: 'article', label: 'Blog', href: '/nivel-3/admin/blog' },
  { key: 'crm', icon: 'hub', label: 'Leads / CRM', href: '/nivel-3/admin/crm' },
  { key: 'finanzas', icon: 'payments', label: 'Pagos / Finanzas', href: '/nivel-3/admin/finanzas' },
  { key: 'referidos', icon: 'share', label: 'Referidos', href: '/nivel-3/admin/referidos' },
  { key: 'analytics', icon: 'analytics', label: 'Analytics', href: '/nivel-3/admin/analytics' },
  { key: 'configuracion', icon: 'settings', label: 'Configuracion', href: '/nivel-3/admin/configuracion' },
]

const n2Items = [
  { key: 'dashboard', icon: 'dashboard', label: 'Dashboard', href: '/nivel-2/admin/dashboard' },
  { key: 'jugadores', icon: 'groups', label: 'Jugadores', href: '/nivel-2/admin/jugadores' },
  { key: 'servicios', icon: 'handshake', label: 'Servicios', href: '#' },
  { key: 'curso', icon: 'school', label: 'Curso Scouting', href: '/nivel-2/admin/curso' },
  { key: 'leads', icon: 'hub', label: 'Leads', href: '/nivel-2/admin/leads' },
]

export default function AdminSidebar({ activeItem, level = 3 }) {
  const items = level === 2 ? n2Items : n3Items

  return (
    <aside className="h-screen w-64 border-r border-slate-100 bg-white flex flex-col py-4 shrink-0 z-50">
      <div className="px-6 mb-8">
        <h1 className="font-bold text-[#0A1A3A] text-xl tracking-tight">ML Scouting</h1>
        <p className="text-xs text-slate-500 font-medium">Panel de Administracion</p>
      </div>
      <nav className="flex-1 space-y-1">
        {items.map((item) => {
          const isActive = activeItem === item.key
          return (
            <Link
              key={item.key}
              to={item.href}
              className={`mx-2 my-1 rounded-lg flex items-center px-4 py-3 gap-3 transition-all duration-150 ${
                isActive
                  ? 'bg-[#0A1A3A] text-white'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon name={item.icon} filled={isActive} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
