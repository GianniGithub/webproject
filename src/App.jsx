import { useState } from 'react'

const links = [
  { title: 'Mein Shop', url: '#', color: 'bg-purple-500' },
  { title: 'YouTube Kanal', url: '#', color: 'bg-red-500' },
  { title: 'Instagram', url: '#', color: 'bg-pink-500' },
  { title: 'TikTok', url: '#', color: 'bg-black' },
]

export default function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-blue-200 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <img 
            src="https://placehold.co/100x100" 
            alt="Profile" 
            className="rounded-full w-24 h-24 mx-auto mb-4 border-4 border-white shadow-lg"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">@DeinUsername</h1>
          <p className="text-gray-600">Willkommen auf meiner Link-in-Bio Seite! 👋</p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} ${
                hoveredIndex === index ? 'scale-105' : ''
              } transition-transform duration-200 block rounded-lg text-white text-center p-4 shadow-lg hover:shadow-xl font-medium`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Instagram Icon */}
            </svg>
          </a>
          {/* Weitere Icons hier einfügen */}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-8">
          © 2023 Dein Name. Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  )
}