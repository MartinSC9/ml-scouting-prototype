import AdminSidebar from './AdminSidebar'
import { useAuth } from '../core/contexts/AuthContext'

export default function AdminLayout({ activeItem, title, subtitle, level = 3, headerActions, children }) {
  const { user } = useAuth()

  return (
    <div className="bg-[#f7f9fc] text-[#191c1e] flex h-screen overflow-hidden">
      <AdminSidebar activeItem={activeItem} level={level} />
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 flex justify-between items-center h-16 px-8 shadow-sm">
          <div>
            <h2 className="text-[#0A1A3A] text-lg font-bold">{title}</h2>
            {subtitle && <span className="text-xs text-slate-500">{subtitle}</span>}
          </div>
          <div className="flex items-center gap-4">
            {headerActions}
            <span className="text-sm font-semibold text-[#0A1A3A]">Hola, {user?.firstName || 'Admin'}</span>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#001529] to-[#006970] flex items-center justify-center shadow-md">
              <span className="text-white text-sm font-bold">{user ? `${user.firstName[0]}${user.lastName[0]}` : 'A'}</span>
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  )
}
