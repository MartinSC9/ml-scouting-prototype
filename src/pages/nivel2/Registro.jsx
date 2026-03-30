import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

const countries = ['Argentina','Brasil','Chile','Colombia','Ecuador','Espana','Mexico','Paraguay','Peru','Uruguay','Otro']
const positions = ['Arquero','Defensor central','Lateral derecho','Lateral izquierdo','Mediocampista defensivo','Mediocampista central','Mediocampista ofensivo','Extremo derecho','Extremo izquierdo','Delantero centro']

export default function Registro() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="" level={2} />

      <section className="pt-32 pb-20 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold italic text-[#001529] mb-3" style={{fontFamily:"'Noto Serif'"}}>Crea tu perfil de jugador</h1>
            <p className="text-[#43474d]">Registrate para acceder a tus informes, contratar servicios y mostrar tu perfil a clubes</p>
          </div>

          {/* Step Indicators */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#001529] text-white flex items-center justify-center text-sm font-bold">1</div>
              <span className="text-sm font-semibold text-[#001529]">Datos personales</span>
            </div>
            <div className="w-12 h-[2px] bg-[#c3c6ce]"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#c3c6ce] text-[#43474d] flex items-center justify-center text-sm font-bold">2</div>
              <span className="text-sm text-[#43474d]">Datos deportivos</span>
            </div>
          </div>

          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#c3c6ce]/30 shadow-sm">
            <h2 className="text-lg font-semibold text-[#191c1e] mb-6">Paso 1 de 2 - Datos personales</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Nombre completo</label>
                <input type="text" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="Tu nombre completo"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Email</label>
                <input type="email" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="tu@email.com"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Contrasena</label>
                  <input type="password" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="Min. 8 caracteres"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Confirmar contrasena</label>
                  <input type="password" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="Repetir contrasena"/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Fecha de nacimiento</label>
                <input type="date" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Nacionalidad</label>
                  <select className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]">
                    <option value="">Seleccionar</option>
                    {countries.map(c=><option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Pais de residencia</label>
                  <select className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]">
                    <option value="">Seleccionar</option>
                    {countries.map(c=><option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Telefono / WhatsApp</label>
                <input type="tel" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="+54 9 11 1234-5678"/>
              </div>
              <button type="button" className="w-full bg-[#001529] text-white py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-transform active:scale-[0.98]">Siguiente</button>
            </form>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#c3c6ce]/30 shadow-sm mt-8 opacity-60">
            <h2 className="text-lg font-semibold text-[#191c1e] mb-6">Paso 2 de 2 - Datos deportivos</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Posicion principal</label>
                  <select className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]">
                    <option value="">Seleccionar</option>
                    {positions.map(p=><option key={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Posicion secundaria <span className="text-[#43474d]">(opcional)</span></label>
                  <select className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]">
                    <option value="">Seleccionar</option>
                    {positions.map(p=><option key={p}>{p}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Pie habil</label>
                <div className="flex gap-6 mt-1">
                  {['Derecho','Izquierdo','Ambidiestro'].map(p=>(
                    <label key={p} className="flex items-center gap-2 text-sm"><input type="radio" name="pie" className="text-[#006970] focus:ring-[#006970]"/> {p}</label>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Altura (cm)</label>
                  <input type="number" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="178"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Peso (kg)</label>
                  <input type="number" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="72"/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Club actual</label>
                  <input type="text" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="Nombre del club"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Liga / Division actual</label>
                  <input type="text" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="Ej: Primera Division"/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Nivel</label>
                <div className="flex flex-wrap gap-4 mt-1">
                  {['Profesional','Semi profesional','Semi amateur','Amateur'].map(n=>(
                    <label key={n} className="flex items-center gap-2 text-sm"><input type="radio" name="nivel" className="text-[#006970] focus:ring-[#006970]"/> {n}</label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Link a highlights YouTube/Vimeo <span className="text-[#43474d]">(opcional)</span></label>
                <input type="url" className="w-full border border-[#c3c6ce] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#006970] focus:border-[#006970]" placeholder="https://youtube.com/..."/>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Foto de perfil</label>
                <div className="border-2 border-dashed border-[#c3c6ce] rounded-xl p-8 text-center hover:border-[#006970] transition-colors cursor-pointer">
                  <Icon name="cloud_upload" className="text-4xl text-[#43474d] mb-2" />
                  <p className="text-sm text-[#43474d]">Arrastra tu foto o hace click para seleccionar</p>
                  <p className="text-xs text-[#74777e] mt-1">JPG, PNG. Max 5MB</p>
                </div>
              </div>
              <button type="button" className="w-full bg-[#001529] text-white py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-transform active:scale-[0.98]">Crear mi perfil</button>
            </form>
          </div>
        </div>
      </section>

      <Footer level={2} />
    </div>
  )
}
