import { Routes, Route, Navigate } from 'react-router-dom'
import Index from './pages/Index'

// Nivel 2 pages
import N2Home from './pages/nivel2/Home'
import N2Servicios from './pages/nivel2/Servicios'
import N2Diagnostico from './pages/nivel2/Diagnostico'
import N2Curso from './pages/nivel2/Curso'
import N2Contacto from './pages/nivel2/Contacto'
import N2Registro from './pages/nivel2/Registro'
import N2JugadorPerfil from './pages/nivel2/JugadorPerfil'
import N2AdminDashboard from './pages/nivel2/AdminDashboard'
import N2AdminJugadores from './pages/nivel2/AdminJugadores'
import N2AdminJugadorDetalle from './pages/nivel2/AdminJugadorDetalle'
import N2AdminCurso from './pages/nivel2/AdminCurso'
import N2AdminLeads from './pages/nivel2/AdminLeads'

// Nivel 3 pages
import N3Home from './pages/nivel3/Home'
import N3Servicios from './pages/nivel3/Servicios'
import N3Diagnostico from './pages/nivel3/Diagnostico'
import N3Curso from './pages/nivel3/Curso'
import N3Blog from './pages/nivel3/Blog'
import N3BlogArticulo from './pages/nivel3/BlogArticulo'
import N3Contacto from './pages/nivel3/Contacto'
import N3JugadorDashboard from './pages/nivel3/JugadorDashboard'
import N3JugadorPerfil from './pages/nivel3/JugadorPerfil'
import N3JugadorCursos from './pages/nivel3/JugadorCursos'
import N3JugadorClase from './pages/nivel3/JugadorClase'
import N3JugadorReferidos from './pages/nivel3/JugadorReferidos'
import N3AdminDashboard from './pages/nivel3/AdminDashboard'
import N3AdminJugadores from './pages/nivel3/AdminJugadores'
import N3AdminJugadorDetalle from './pages/nivel3/AdminJugadorDetalle'
import N3AdminCrm from './pages/nivel3/AdminCrm'
import N3AdminCursos from './pages/nivel3/AdminCursos'
import N3AdminBlog from './pages/nivel3/AdminBlog'
import N3AdminFinanzas from './pages/nivel3/AdminFinanzas'
import N3AdminReferidos from './pages/nivel3/AdminReferidos'
import N3AdminAnalytics from './pages/nivel3/AdminAnalytics'
import N3AdminConfiguracion from './pages/nivel3/AdminConfiguracion'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />

      {/* Nivel 2 */}
      <Route path="/nivel-2/home" element={<N2Home />} />
      <Route path="/nivel-2/servicios" element={<N2Servicios />} />
      <Route path="/nivel-2/diagnostico" element={<N2Diagnostico />} />
      <Route path="/nivel-2/curso" element={<N2Curso />} />
      <Route path="/nivel-2/contacto" element={<N2Contacto />} />
      <Route path="/nivel-2/registro" element={<N2Registro />} />
      <Route path="/nivel-2/jugador-perfil" element={<N2JugadorPerfil />} />
      <Route path="/nivel-2/admin/dashboard" element={<N2AdminDashboard />} />
      <Route path="/nivel-2/admin/jugadores" element={<N2AdminJugadores />} />
      <Route path="/nivel-2/admin/jugador-detalle" element={<N2AdminJugadorDetalle />} />
      <Route path="/nivel-2/admin/curso" element={<N2AdminCurso />} />
      <Route path="/nivel-2/admin/leads" element={<N2AdminLeads />} />

      {/* Nivel 3 */}
      <Route path="/nivel-3/home" element={<N3Home />} />
      <Route path="/nivel-3/servicios" element={<N3Servicios />} />
      <Route path="/nivel-3/diagnostico" element={<N3Diagnostico />} />
      <Route path="/nivel-3/curso" element={<N3Curso />} />
      <Route path="/nivel-3/blog" element={<N3Blog />} />
      <Route path="/nivel-3/blog-articulo" element={<N3BlogArticulo />} />
      <Route path="/nivel-3/contacto" element={<N3Contacto />} />
      <Route path="/nivel-3/jugador-dashboard" element={<N3JugadorDashboard />} />
      <Route path="/nivel-3/jugador-perfil" element={<N3JugadorPerfil />} />
      <Route path="/nivel-3/jugador-cursos" element={<N3JugadorCursos />} />
      <Route path="/nivel-3/jugador-clase" element={<N3JugadorClase />} />
      <Route path="/nivel-3/jugador-referidos" element={<N3JugadorReferidos />} />
      <Route path="/nivel-3/admin/dashboard" element={<N3AdminDashboard />} />
      <Route path="/nivel-3/admin/jugadores" element={<N3AdminJugadores />} />
      <Route path="/nivel-3/admin/jugador-detalle" element={<N3AdminJugadorDetalle />} />
      <Route path="/nivel-3/admin/crm" element={<N3AdminCrm />} />
      <Route path="/nivel-3/admin/cursos" element={<N3AdminCursos />} />
      <Route path="/nivel-3/admin/blog" element={<N3AdminBlog />} />
      <Route path="/nivel-3/admin/finanzas" element={<N3AdminFinanzas />} />
      <Route path="/nivel-3/admin/referidos" element={<N3AdminReferidos />} />
      <Route path="/nivel-3/admin/analytics" element={<N3AdminAnalytics />} />
      <Route path="/nivel-3/admin/configuracion" element={<N3AdminConfiguracion />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
