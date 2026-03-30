import AdminLayout from '../../components/AdminLayout'
import Icon from '../../components/Icon'

export default function AdminBlog() {
  const articles = [
    { title: 'Como preparar tu video highlight para scouts', cat: 'Scouting', catBg: 'bg-blue-50 text-blue-700', status: 'Publicado', statusBg: 'bg-green-50 text-green-700', date: '15 Oct 2026', views: '1,234' },
    { title: 'Las ligas europeas que mas buscan talento sudamericano', cat: 'Mercado', catBg: 'bg-green-50 text-green-700', status: 'Publicado', statusBg: 'bg-green-50 text-green-700', date: '10 Oct 2026', views: '987' },
    { title: '5 errores que cometen los jugadores al buscar club', cat: 'Para Jugadores', catBg: 'bg-purple-50 text-purple-700', status: 'Publicado', statusBg: 'bg-green-50 text-green-700', date: '5 Oct 2026', views: '856' },
    { title: 'El rol del mediocampista moderno', cat: 'Analisis Tactico', catBg: 'bg-orange-50 text-orange-700', status: 'Borrador', statusBg: 'bg-yellow-50 text-yellow-700', date: '-', views: '-' },
    { title: 'Que aprenderas en el Curso de Scouting Profesional', cat: 'Curso', catBg: 'bg-yellow-50 text-yellow-700', status: 'Programado', statusBg: 'bg-blue-50 text-blue-700', date: '1 Nov 2026', views: '-' },
    { title: 'La importancia de los datos en el scouting actual', cat: 'Scouting', catBg: 'bg-blue-50 text-blue-700', status: 'Publicado', statusBg: 'bg-green-50 text-green-700', date: '15 Sep 2026', views: '654' },
  ]

  const headerActions = (
    <div className="flex items-center gap-4">
      <button className="bg-[#0A1A3A] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1"><Icon name="add" className="text-lg" />Nuevo Articulo</button>
      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center"><Icon name="person" className="text-slate-400" /></div>
    </div>
  )

  return (
    <AdminLayout activeItem="blog" title="Blog" subtitle="Gestion de articulos" level={3} headerActions={headerActions}>
      <section className="p-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                {['Titulo','Categoria','Estado','Fecha','Vistas','Acciones'].map(h => (
                  <th key={h} className="text-left p-4 text-xs font-semibold text-slate-500 uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {articles.map((a, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="p-4 text-[#0A1A3A] font-medium">{a.title}</td>
                  <td className="p-4"><span className={`text-xs ${a.catBg} px-2 py-1 rounded-full`}>{a.cat}</span></td>
                  <td className="p-4"><span className={`text-xs ${a.statusBg} px-2 py-1 rounded-full`}>{a.status}</span></td>
                  <td className="p-4 text-slate-500">{a.date}</td>
                  <td className="p-4 text-slate-600">{a.views}</td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      <button className="p-1 text-slate-400 hover:text-[#0A1A3A]"><Icon name="edit" className="text-lg" /></button>
                      <button className="p-1 text-slate-400 hover:text-red-500"><Icon name="delete" className="text-lg" /></button>
                    </div>
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
