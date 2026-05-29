const defaultLinks = [
  { label: 'Explorar', id: 'landing' },
  { label: 'Causas', id: 'causas' },
  { label: 'Transparência', id: 'transparency' },
  { label: 'Sobre', id: 'sobre' },
]

export default function Navbar({
  brand = 'ONG',
  brandAccent = '+',
  links = defaultLinks,
  mobileLabel = 'Menu',
  className = '',
  rightContent = null,
  onBrandClick,
  onNavigate,
  activePage,
}) {
  return (
    <nav className={`flex justify-between items-center py-6 px-8 md:px-16 bg-white ${className}`}>
      <div 
        className="text-2xl font-bold text-teal-800 tracking-tight cursor-pointer"
        onClick={onBrandClick}
      >
        {brand}
        <span className="text-teal-600">{brandAccent}</span>
      </div>

      <div className="hidden md:flex space-x-10 text-gray-500 font-medium text-sm">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigate && onNavigate(link.id)}
            className={
              activePage === link.id
                ? 'text-teal-800 font-bold border-b-2 border-teal-700 pb-1'
                : 'hover:text-teal-700 transition'
            }
          >
            {link.label}
          </button>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-4">
        {rightContent}
      </div>

      <div className="md:hidden text-teal-800 font-bold flex items-center space-x-4">
        {rightContent}
        <span>{mobileLabel}</span>
      </div>
    </nav>
  )
}

