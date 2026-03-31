import AdminLayout from '../../components/AdminLayout'
import Icon from '../../components/Icon'

export default function AdminCursos() {
  const modules = [
    { n: '01', title: 'Introducción al Scouting', hours: '4 clases · 6h', status: '100% completado', statusColor: 'text-green-600', open: true, lessons: ['Qué es el scouting','Tipos de scout','Mercado futbolístico actual','Evaluación Módulo 1'], lessonIcons: ['play_circle','play_circle','play_circle','description'] },
    { n: '02', title: 'Herramientas de Análisis', hours: '4 clases · 8h', status: '85% completado', statusColor: 'text-green-600' },
    { n: '03', title: 'Creación de Informes', hours: '5 clases · 8h', status: 'En curso', statusColor: 'text-blue-600' },
    { n: '04', title: 'Análisis Táctico', hours: '4 clases · 6h', status: 'Bloqueado', locked: true },
    { n: '05', title: 'Prácticas en Vivo', hours: '3 clases · 9h', status: 'Bloqueado', locked: true },
    { n: '06', title: 'Red de Contactos', hours: '3 clases · 5h', status: 'Bloqueado', locked: true },
  ]

  const students = [
    { name: 'Mateo Lopez', email: 'mateo@email.com', progress: 35, lastAccess: 'Hace 2h', status: 'Activo', statusBg: 'bg-green-50 text-green-700' },
    { name: 'Nicolas Perez', email: 'nicolas@email.com', progress: 60, lastAccess: 'Hace 1 dia', status: 'Activo', statusBg: 'bg-green-50 text-green-700' },
    { name: 'Tomas Garcia', email: 'tomas@email.com', progress: 20, lastAccess: 'Hace 5 dias', status: 'Inactivo', statusBg: 'bg-yellow-50 text-yellow-700' },
    { name: 'Carlos Mendez', email: 'carlos@email.com', progress: 85, lastAccess: 'Hace 3h', status: 'Activo', statusBg: 'bg-green-50 text-green-700' },
  ]

  const waitlist = [
    { name: 'Ana Martinez', email: 'ana@email.com', date: '1 Sep 2026', defaultStatus: 'En espera' },
    { name: 'Roberto Silva', email: 'roberto@email.com', date: '5 Sep 2026', defaultStatus: 'Contactado' },
    { name: 'Laura Fernandez', email: 'laura@email.com', date: '12 Sep 2026', defaultStatus: 'En espera' },
  ]

  return (
    <AdminLayout activeItem="curso" title="Curso Scouting" subtitle="Gestión del curso y alumnos" level={3}>
      <section className="p-8 space-y-8">
        {/* Active Course */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full mb-2 inline-block">Activo</span>
              <h3 className="text-xl font-bold text-[#0A1A3A]" style={{ fontFamily: "'Noto Serif'" }}>Scouting Profesional - Edición Septiembre 2026</h3>
              <p className="text-sm text-slate-500 mt-1">6 módulos · 24 clases · 42 horas totales</p>
            </div>
            <div className="flex gap-2">
              <button className="border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium">Editar Curso</button>
              <button className="bg-[#0A1A3A] text-white px-4 py-2 rounded-lg text-sm font-semibold">+ Agregar Modulo</button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[['Alumnos inscritos','18'],['Promedio progreso','42%'],['Tasa completación','78%'],['Ingresos curso','\u20AC11,700']].map(([label,val]) => (
              <div key={label} className="bg-[#f7f9fc] p-4 rounded-lg"><p className="text-xs text-slate-500">{label}</p><p className="text-2xl font-bold text-[#0A1A3A]">{val}</p></div>
            ))}
          </div>
        </div>

        {/* Modules */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#0A1A3A]" style={{ fontFamily: "'Noto Serif'" }}>Módulos del Curso</h3>
            <button className="text-sm text-[#0A1A3A] font-medium flex items-center gap-1"><Icon name="add" className="text-lg" />Agregar Clase</button>
          </div>
          <div className="space-y-3">
            {modules.map((m, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden" open={m.open}>
                <summary className="flex items-center justify-between p-4 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 ${m.locked ? 'bg-slate-300' : 'bg-[#0A1A3A]'} text-white rounded-lg flex items-center justify-center font-bold text-xs`}>{m.n}</span>
                    <div>
                      <p className={`text-sm font-bold ${m.locked ? 'text-slate-400' : 'text-[#0A1A3A]'}`}>{m.title}</p>
                      <p className={`text-xs ${m.locked ? 'text-slate-400' : 'text-slate-500'}`}>{m.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {m.locked ? <span className="text-xs text-slate-400">{m.status}</span> : <span className={`text-xs ${m.statusColor} font-medium`}>{m.status}</span>}
                    <Icon name="expand_more" className="text-slate-400 text-lg transition-transform" />
                  </div>
                </summary>
                {m.lessons && (
                  <div className="px-4 pb-4 border-t border-slate-100 pt-3 space-y-2">
                    {m.lessons.map((lesson, j) => (
                      <div key={j} className="flex items-center justify-between text-xs p-2 bg-[#f7f9fc] rounded-lg">
                        <span className="text-slate-600"><Icon name={m.lessonIcons[j]} className="text-sm align-middle mr-1" />{lesson}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400">1h 30m</span>
                          <button className="text-[#0A1A3A]"><Icon name="edit" className="text-sm" /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </details>
            ))}
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-[#0A1A3A] mb-4" style={{ fontFamily: "'Noto Serif'" }}>Alumnos Inscritos</h3>
          <table className="w-full text-sm">
            <thead><tr className="border-b border-slate-100">
              {['Nombre','Email','Progreso','Último acceso','Estado'].map(h => <th key={h} className="text-left p-3 text-xs font-semibold text-slate-500 uppercase">{h}</th>)}
            </tr></thead>
            <tbody className="divide-y divide-slate-50">
              {students.map((s, i) => (
                <tr key={i}>
                  <td className="p-3 text-slate-700 font-medium">{s.name}</td>
                  <td className="p-3 text-slate-500">{s.email}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-slate-100 rounded-full"><div className="h-full bg-[#0A1A3A] rounded-full" style={{ width: `${s.progress}%` }}></div></div>
                      <span className="text-xs text-slate-500">{s.progress}%</span>
                    </div>
                  </td>
                  <td className="p-3 text-slate-500">{s.lastAccess}</td>
                  <td className="p-3"><span className={`text-xs ${s.statusBg} px-2 py-0.5 rounded-full`}>{s.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Waitlist */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#0A1A3A]" style={{ fontFamily: "'Noto Serif'" }}>Lista de Espera</h3>
            <span className="text-sm text-slate-500">83 personas</span>
          </div>
          <table className="w-full text-sm">
            <thead><tr className="border-b border-slate-100">
              {['Nombre','Email','Fecha inscripción','Estado'].map(h => <th key={h} className="text-left p-3 text-xs font-semibold text-slate-500 uppercase">{h}</th>)}
            </tr></thead>
            <tbody className="divide-y divide-slate-50">
              {waitlist.map((w, i) => (
                <tr key={i}>
                  <td className="p-3 text-slate-700">{w.name}</td>
                  <td className="p-3 text-slate-500">{w.email}</td>
                  <td className="p-3 text-slate-500">{w.date}</td>
                  <td className="p-3">
                    <select defaultValue={w.defaultStatus} className="text-xs border border-slate-200 rounded-lg px-2 py-1">
                      <option>En espera</option><option>Contactado</option><option>Confirmado</option><option>Descartado</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminLayout>
  )
}
