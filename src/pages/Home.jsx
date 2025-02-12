import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// Links für die Hauptseite
const links = [
  { title: 'Website', url: 'www.windschrank.de', color: 'bg-gray-500' },
  { title: 'YouTube', url: 'https://www.youtube.com/@WindSchrank', color: 'bg-gray-500' },
  { title: 'Instagram', url: 'https://www.instagram.com/windschrank/', color: 'bg-gray-500' },
  { title: 'Patreon', url: 'https://www.patreon.com/Windschrank', color: 'bg-gray-500' },
];

function Home() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-10 px-4">
        <div className="max-w-md mx-auto">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <img 
              src="https://placehold.co/100x100" 
              alt="Profile" 
              className="rounded-full w-24 h-24 mx-auto mb-4 border-4 border-white shadow-lg"
            />
            <h1 className="text-2xl font-bold text-gray-100 mb-2">@windschrank</h1>
            <p className="text-gray-100">Willkommen auf meiner Link-in-Bio Seite! 👋</p>
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
                } transition-transform duration-200 block rounded-lg text-white text-center p-4 shadow-lg hover:shadow-xl font-medium outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10` }
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
  
          {/* Footer mit React Router Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <Link to="/impressum" className="text-center text-gray-600 hover:text-gray-800 underline underline-offset-1 text-sm">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-center text-gray-600 hover:text-gray-800 underline underline-offset-1 text-sm">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default Home;