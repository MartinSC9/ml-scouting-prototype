export default function FifaCard({ name = 'Jugador', position = 'MC', rating = 76, stats = {}, level = 'semi' }) {
  const { ritmo = 0, tiro = 0, pase = 0, regate = 0, defensa = 0, fisico = 0 } = stats

  const gradients = {
    amateur: 'from-amber-700 to-amber-900',
    semi: 'from-[#0A1A3A] to-[#1a3a6a]',
    pro: 'from-yellow-400 to-yellow-600',
  }

  const gradient = gradients[level] || gradients.semi

  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-6 text-white text-center`}>
      <p className="text-4xl font-bold mb-1">{rating}</p>
      <p className="text-[10px] uppercase tracking-wider text-slate-300 mb-1">{position}</p>
      <p className="text-sm font-semibold mb-3">{name}</p>
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div><span className="font-bold">{ritmo}</span><br /><span className="text-slate-400">RIT</span></div>
        <div><span className="font-bold">{tiro}</span><br /><span className="text-slate-400">TIR</span></div>
        <div><span className="font-bold">{pase}</span><br /><span className="text-slate-400">PAS</span></div>
        <div><span className="font-bold">{regate}</span><br /><span className="text-slate-400">REG</span></div>
        <div><span className="font-bold">{defensa}</span><br /><span className="text-slate-400">DEF</span></div>
        <div><span className="font-bold">{fisico}</span><br /><span className="text-slate-400">FIS</span></div>
      </div>
    </div>
  )
}
