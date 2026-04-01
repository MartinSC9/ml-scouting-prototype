import { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import Icon from './Icon'
import { useAuth } from '../core/contexts/AuthContext'

export default function AdminLayout({ activeItem, title, subtitle, level = 3, headerActions, children }) {
  const { user } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="bg-[#f7f9fc] text-[#191c1e] flex h-screen overflow-hidden">
      <AdminSidebar activeItem={activeItem} level={level} mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />
      <main className="flex-1 overflow-y-auto min-w-0">
        <header className="sticky top-0 w-full z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 flex justify-between items-center h-14 md:h-16 px-4 md:px-8 shadow-sm gap-2">
          <div className="flex items-center gap-2 min-w-0">
            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(true)} className="md:hidden p-2 -ml-1 text-slate-600 hover:text-[#0A1A3A] shrink-0">
              <Icon name="menu" />
            </button>
            <div className="min-w-0">
              <h2 className="text-[#0A1A3A] text-base md:text-lg font-bold truncate">{title}</h2>
              {subtitle && <span className="text-[10px] md:text-xs text-slate-500 hidden sm:inline">{subtitle}</span>}
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            {headerActions}
            <span className="text-sm font-semibold text-[#0A1A3A] hidden sm:inline">Hola, {user?.firstName || 'Admin'}</span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#001529] to-[#006970] flex items-center justify-center shadow-md">
              <span className="text-white text-xs md:text-sm font-bold">{user ? `${user.firstName[0]}${user.lastName[0]}` : 'A'}</span>
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  )
}
