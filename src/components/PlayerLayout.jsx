import PlayerNavbar from './PlayerNavbar'

export default function PlayerLayout({ activeItem, level = 3, children }) {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e] min-h-screen">
      <PlayerNavbar activeItem={activeItem} level={level} />
      <main className="pt-20 pb-12 px-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
