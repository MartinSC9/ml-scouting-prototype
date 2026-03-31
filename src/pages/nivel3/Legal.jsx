import { useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const sections = {
  privacidad: {
    title: 'Política de Privacidad',
    updated: '31 de marzo de 2026',
    content: [
      { heading: 'Responsable del tratamiento', text: 'ML Scouting es responsable del tratamiento de los datos personales recogidos a través de este sitio web y sus servicios asociados.' },
      { heading: 'Datos que recopilamos', text: 'Recopilamos los datos que nos proporcionas voluntariamente: nombre, email, país, posición de juego, edad, material audiovisual y cualquier información que compartas a través de nuestros formularios de contacto, diagnóstico o contratación de servicios.' },
      { heading: 'Finalidad del tratamiento', list: [
        'Gestionar tu consulta o solicitud de servicio.',
        'Elaborar informes de scouting y planes de mercado personalizados.',
        'Enviarte comunicaciones relacionadas con nuestros servicios (solo si das tu consentimiento).',
        'Gestionar tu inscripción en el curso o lista de espera.',
        'Mejorar nuestros servicios y la experiencia del usuario.',
      ]},
      { heading: 'Base legal', text: 'El tratamiento se basa en tu consentimiento expreso al enviar los formularios, y en la ejecución del contrato cuando contratas un servicio.' },
      { heading: 'Conservación de datos', text: 'Tus datos se conservan mientras dure la relación contractual o mientras no solicites su eliminación. Los datos de leads se conservan un máximo de 24 meses desde el último contacto.' },
      { heading: 'Compartición de datos', text: 'No vendemos ni compartimos tus datos personales con terceros, salvo cuando sea necesario para la prestación del servicio contratado (por ejemplo, compartir tu perfil con clubes en el marco del Plan de Mercado, siempre con tu autorización previa).' },
      { heading: 'Procesadores de pago', text: 'Los pagos son procesados por Gumroad, que actúa como procesador independiente. Te recomendamos revisar su política de privacidad.' },
      { heading: 'Tus derechos', text: 'Puedes ejercer tus derechos de acceso, rectificación, supresión, portabilidad y oposición enviando un email a contacto@ml-scouting.com.' },
      { heading: 'Cookies', text: 'Este sitio utiliza cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento publicitario.' },
    ],
  },
  terminos: {
    title: 'Términos de Uso',
    updated: '31 de marzo de 2026',
    content: [
      { heading: 'Aceptación', text: 'Al utilizar este sitio web y contratar nuestros servicios, aceptas estos términos de uso en su totalidad.' },
      { heading: 'Servicios ofrecidos', text: 'ML Scouting ofrece servicios de scouting, análisis de perfil futbolístico, planes de mercado, asesoría y formación. Los servicios se describen en la sección correspondiente y pueden estar sujetos a condiciones particulares.' },
      { heading: 'Contratación y pagos', list: [
        'Los precios están indicados en euros (EUR) e incluyen impuestos cuando corresponda.',
        'El pago se realiza a través de Gumroad u otros medios indicados al momento de la contratación.',
        'Una vez realizado el pago, el servicio se considera contratado y se iniciará según los plazos indicados.',
      ]},
      { heading: 'Política de reembolso', text: 'Si no estamos en condiciones de iniciar el servicio, se realizará un reembolso completo. Una vez iniciado el trabajo (envío de informe, primera sesión, etc.), no se aceptan reembolsos salvo acuerdo mutuo.' },
      { heading: 'Propiedad intelectual', text: 'Todo el contenido de este sitio (textos, diseños, logotipos, materiales del curso) es propiedad de ML Scouting y no puede ser reproducido sin autorización.' },
      { heading: 'Material del jugador', text: 'El material audiovisual que nos envías (videos, fotos) será utilizado exclusivamente para los fines del servicio contratado. No será publicado ni compartido sin tu consentimiento explícito.' },
      { heading: 'Limitación de responsabilidad', text: 'ML Scouting no garantiza resultados específicos (fichajes, contratos, pruebas). Nuestros servicios son de asesoría y posicionamiento profesional. El resultado depende de múltiples factores fuera de nuestro control.' },
      { heading: 'Curso de scouting', list: [
        'El acceso al curso es personal e intransferible.',
        'El contenido grabado está disponible durante el período indicado al momento de la inscripción.',
        'La certificación se otorga al completar el programa y las prácticas requeridas.',
      ]},
      { heading: 'Modificaciones', text: 'Nos reservamos el derecho de modificar estos términos. Las modificaciones se publicarán en esta página con la fecha de actualización.' },
      { heading: 'Contacto', text: 'Para cualquier consulta sobre estos términos, escríbenos a contacto@ml-scouting.com.' },
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
          <p className="text-slate-400 text-sm mb-8">Última actualización: {data.updated}</p>

          <div className="flex gap-3 mb-10">
            <a href="?tab=privacidad" className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tab === 'privacidad' ? 'bg-[#0A1A3A] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'}`}>Política de Privacidad</a>
            <a href="?tab=terminos" className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tab === 'terminos' ? 'bg-[#0A1A3A] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'}`}>Términos de Uso</a>
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
