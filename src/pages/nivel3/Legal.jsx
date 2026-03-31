import { useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const sections = {
  privacidad: {
    title: 'Politica de Privacidad',
    updated: '31 de marzo de 2026',
    content: [
      { heading: 'Responsable del tratamiento', text: 'ML Scouting es responsable del tratamiento de los datos personales recogidos a traves de este sitio web y sus servicios asociados.' },
      { heading: 'Datos que recopilamos', text: 'Recopilamos los datos que nos proporcionas voluntariamente: nombre, email, pais, posicion de juego, edad, material audiovisual y cualquier informacion que compartas a traves de nuestros formularios de contacto, diagnostico o contratacion de servicios.' },
      { heading: 'Finalidad del tratamiento', list: [
        'Gestionar tu consulta o solicitud de servicio.',
        'Elaborar informes de scouting y planes de mercado personalizados.',
        'Enviarte comunicaciones relacionadas con nuestros servicios (solo si das tu consentimiento).',
        'Gestionar tu inscripcion en el curso o lista de espera.',
        'Mejorar nuestros servicios y la experiencia del usuario.',
      ]},
      { heading: 'Base legal', text: 'El tratamiento se basa en tu consentimiento expreso al enviar los formularios, y en la ejecucion del contrato cuando contratas un servicio.' },
      { heading: 'Conservacion de datos', text: 'Tus datos se conservan mientras dure la relacion contractual o mientras no solicites su eliminacion. Los datos de leads se conservan un maximo de 24 meses desde el ultimo contacto.' },
      { heading: 'Comparticion de datos', text: 'No vendemos ni compartimos tus datos personales con terceros, salvo cuando sea necesario para la prestacion del servicio contratado (por ejemplo, compartir tu perfil con clubes en el marco del Plan de Mercado, siempre con tu autorizacion previa).' },
      { heading: 'Procesadores de pago', text: 'Los pagos son procesados por Gumroad, que actua como procesador independiente. Te recomendamos revisar su politica de privacidad.' },
      { heading: 'Tus derechos', text: 'Puedes ejercer tus derechos de acceso, rectificacion, supresion, portabilidad y oposicion enviando un email a contacto@ml-scouting.com.' },
      { heading: 'Cookies', text: 'Este sitio utiliza cookies tecnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento publicitario.' },
    ],
  },
  terminos: {
    title: 'Terminos de Uso',
    updated: '31 de marzo de 2026',
    content: [
      { heading: 'Aceptacion', text: 'Al utilizar este sitio web y contratar nuestros servicios, aceptas estos terminos de uso en su totalidad.' },
      { heading: 'Servicios ofrecidos', text: 'ML Scouting ofrece servicios de scouting, analisis de perfil futbolistico, planes de mercado, asesoria y formacion. Los servicios se describen en la seccion correspondiente y pueden estar sujetos a condiciones particulares.' },
      { heading: 'Contratacion y pagos', list: [
        'Los precios estan indicados en euros (EUR) e incluyen impuestos cuando corresponda.',
        'El pago se realiza a traves de Gumroad u otros medios indicados al momento de la contratacion.',
        'Una vez realizado el pago, el servicio se considera contratado y se iniciara segun los plazos indicados.',
      ]},
      { heading: 'Politica de reembolso', text: 'Si no estamos en condiciones de iniciar el servicio, se realizara un reembolso completo. Una vez iniciado el trabajo (envio de informe, primera sesion, etc.), no se aceptan reembolsos salvo acuerdo mutuo.' },
      { heading: 'Propiedad intelectual', text: 'Todo el contenido de este sitio (textos, disenos, logotipos, materiales del curso) es propiedad de ML Scouting y no puede ser reproducido sin autorizacion.' },
      { heading: 'Material del jugador', text: 'El material audiovisual que nos envias (videos, fotos) sera utilizado exclusivamente para los fines del servicio contratado. No sera publicado ni compartido sin tu consentimiento explicito.' },
      { heading: 'Limitacion de responsabilidad', text: 'ML Scouting no garantiza resultados especificos (fichajes, contratos, pruebas). Nuestros servicios son de asesoria y posicionamiento profesional. El resultado depende de multiples factores fuera de nuestro control.' },
      { heading: 'Curso de scouting', list: [
        'El acceso al curso es personal e intransferible.',
        'El contenido grabado esta disponible durante el periodo indicado al momento de la inscripcion.',
        'La certificacion se otorga al completar el programa y las practicas requeridas.',
      ]},
      { heading: 'Modificaciones', text: 'Nos reservamos el derecho de modificar estos terminos. Las modificaciones se publicaran en esta pagina con la fecha de actualizacion.' },
      { heading: 'Contacto', text: 'Para cualquier consulta sobre estos terminos, escribinos a contacto@ml-scouting.com.' },
    ],
  },
}

export default function Legal() {
  const [params] = useSearchParams()
  const tab = params.get('tab') === 'terminos' ? 'terminos' : 'privacidad'
  const data = sections[tab]

  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="" />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-[#0A1A3A] mb-1" style={{fontFamily:"'Noto Serif'"}}>{data.title}</h1>
          <p className="text-slate-400 text-sm mb-8">Ultima actualizacion: {data.updated}</p>

          <div className="flex gap-3 mb-10">
            <a href="?tab=privacidad" className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tab === 'privacidad' ? 'bg-[#0A1A3A] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'}`}>Politica de Privacidad</a>
            <a href="?tab=terminos" className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tab === 'terminos' ? 'bg-[#0A1A3A] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'}`}>Terminos de Uso</a>
          </div>

          <div className="space-y-8">
            {data.content.map((section, i) => (
              <div key={i}>
                <h2 className="text-lg font-bold text-[#0A1A3A] mb-2">{i + 1}. {section.heading}</h2>
                {section.text && <p className="text-slate-600 text-sm leading-relaxed">{section.text}</p>}
                {section.list && (
                  <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm leading-relaxed">
                    {section.list.map((item, li) => <li key={li}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
