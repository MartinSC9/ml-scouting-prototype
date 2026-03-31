import { Routes, Route, Navigate } from 'react-router-dom'

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
      <Route path="/" element={<Navigate to="/nivel-3/home" replace />} />

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
