const defaultLinks = [
  { label: 'Nossa Missão', href: '#', active: true },
  { label: 'Causas', href: '#' },
  { label: 'Transparência', href: '#' },
  { label: 'Sobre', href: '#' },
]

export default function Navbar({
  brand = 'ONG',
  brandAccent = '+',
  links = defaultLinks,
  mobileLabel = 'Menu',
  className = '',
}) {
  return (
    <nav className={`flex justify-between items-center py-6 px-8 md:px-16 bg-white ${className}`}>
      <div className="text-2xl font-bold text-teal-800 tracking-tight">
        {brand}
        <span className="text-teal-600">{brandAccent}</span>
      </div>

      <div className="hidden md:flex space-x-10 text-gray-500 font-medium text-sm">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={
              link.active
                ? 'text-gray-900 border-b-2 border-teal-700 pb-1'
                : 'hover:text-teal-700 transition'
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="md:hidden text-teal-800 font-bold">{mobileLabel}</div>
    </nav>
  )
}
