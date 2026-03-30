import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f9fc] text-[#0a1a3a]" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <div className="max-w-[700px] w-full p-8">
        <h1 className="text-[2rem] mb-2 italic" style={{ fontFamily: 'Georgia, serif' }}>ML Scouting Academy</h1>
        <p className="text-[#666] mb-8">Prototipos de interfaz para la propuesta de desarrollo</p>

        <div className="bg-white rounded-xl p-8 mb-6 shadow-[0_4px_20px_rgba(10,26,58,.06)]">
          <span className="inline-block bg-[#0a1a3a] text-white text-[.7rem] px-2.5 py-1 rounded-full mb-4 font-semibold">NIVEL 2 — Plataforma Completa</span>
          <h2 className="text-[1.2rem] font-bold mb-1">12 paginas</h2>
          <div className="text-[#666] text-[.9rem] mb-4">Landing + Portal Jugador + Panel Admin</div>
          <div className="flex flex-wrap gap-2">
            {[
              ['/nivel-2/home', 'Home'],
              ['/nivel-2/servicios', 'Servicios'],
              ['/nivel-2/diagnostico', 'Diagnostico'],
              ['/nivel-2/curso', 'Curso'],
              ['/nivel-2/contacto', 'Contacto'],
              ['/nivel-2/registro', 'Registro'],
              ['/nivel-2/jugador-perfil', 'Portal Jugador'],
              ['/nivel-2/admin/dashboard', 'Admin Dashboard'],
              ['/nivel-2/admin/jugadores', 'Admin Jugadores'],
              ['/nivel-2/admin/jugador-detalle', 'Detalle Jugador'],
              ['/nivel-2/admin/curso', 'Admin Curso'],
              ['/nivel-2/admin/leads', 'Admin Leads'],
            ].map(([to, label]) => (
              <Link key={to} to={to} className="inline-block bg-[#f2f4f7] text-[#0a1a3a] no-underline px-3 py-1.5 rounded-md text-[.8rem] font-medium hover:bg-[#0a1a3a] hover:text-white transition-all">{label}</Link>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 mb-6 shadow-[0_4px_20px_rgba(10,26,58,.06)]">
          <span className="inline-block bg-[#0a1a3a] text-white text-[.7rem] px-2.5 py-1 rounded-full mb-4 font-semibold">NIVEL 3 — Premium</span>
          <h2 className="text-[1.2rem] font-bold mb-1">22 paginas</h2>
          <div className="text-[#666] text-[.9rem] mb-4">Todo lo de Nivel 2 + LMS, Blog, CRM, Analytics, Referidos</div>
          <div className="flex flex-wrap gap-2">
            {[
              ['/nivel-3/home', 'Home'],
              ['/nivel-3/servicios', 'Servicios'],
              ['/nivel-3/diagnostico', 'Diagnostico'],
              ['/nivel-3/curso', 'Curso'],
              ['/nivel-3/blog', 'Blog'],
              ['/nivel-3/blog-articulo', 'Articulo'],
              ['/nivel-3/contacto', 'Contacto'],
              ['/nivel-3/jugador-dashboard', 'Player Dashboard'],
              ['/nivel-3/jugador-perfil', 'Player Perfil'],
              ['/nivel-3/jugador-cursos', 'Player Cursos'],
              ['/nivel-3/jugador-clase', 'Player Clase'],
              ['/nivel-3/jugador-referidos', 'Player Referidos'],
              ['/nivel-3/admin/dashboard', 'Admin Dashboard'],
              ['/nivel-3/admin/jugadores', 'Admin Jugadores'],
              ['/nivel-3/admin/jugador-detalle', 'Detalle Jugador'],
              ['/nivel-3/admin/crm', 'CRM Pipeline'],
              ['/nivel-3/admin/cursos', 'Admin Cursos'],
              ['/nivel-3/admin/blog', 'Admin Blog'],
              ['/nivel-3/admin/finanzas', 'Finanzas'],
              ['/nivel-3/admin/referidos', 'Referidos'],
              ['/nivel-3/admin/analytics', 'Analytics'],
              ['/nivel-3/admin/configuracion', 'Configuracion'],
            ].map(([to, label]) => (
              <Link key={to} to={to} className="inline-block bg-[#f2f4f7] text-[#0a1a3a] no-underline px-3 py-1.5 rounded-md text-[.8rem] font-medium hover:bg-[#0a1a3a] hover:text-white transition-all">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
