import React from 'react';


// Impressum-Seite
function ssImpressumlll() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-10 px-4">
        <div className="max-w-md mx-auto text-center text-gray-100">
          <h1 className="text-2xl font-bold mb-4">Impressum</h1>
          <p>Hier steht das Impressum.</p>
          <Link to="/" className="text-gray-600 hover:text-gray-800 underline underline-offset-1 text-sm mt-4 block">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  // Impressum-Seite
export default function Impressum() {
    return (
        <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-10 px-4">
            <div class="container mx-auto px-4 pt-10">
                <h1 class="text-3xl font-bold mb-6 text-gray-200">Impressum</h1>

                <div class="bg-gray-300 p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG:</h2>
                    <p class="mb-2"><strong>Betreiber:</strong> Johannes Bauer</p>
                    <p class="mb-2"><strong>Adresse:</strong> Böhmische Str. 43, 01099 Dresden</p>
                    <p class="mb-2"><strong>Telefon:</strong> +49 157 7962653</p>
                    <p class="mb-2"><strong>E-Mail:</strong> info@windschrank.de</p>
                    <a to="/Home" className="text-gray-600 hover:text-gray-800 underline underline-offset-1 text-sm mt-4 block">
            Zurück zur Startseite
          </a>
                    <h2 class="text-xl font-semibold mt-6 mb-4">Haftungsausschluss:</h2>
                    <p class="mb-2">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
                </div>
            </div>
        </div>
    );
  }

