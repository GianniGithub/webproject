export default function Impressum() {
    return (
      <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-3xl font-bold mb-6">Impressum</h1>
  
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
              <p className="text-gray-600">
                Max Mustermann<br />
                Musterstraße 123<br />
                12345 Musterstadt
              </p>
            </section>
  
            <section className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
              <p className="text-gray-600">
                Telefon: +49 123 456789<br />
                E-Mail: info@example.com
              </p>
            </section>
  
            <section className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h2>
              <p className="text-gray-600">
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                DE123456789
              </p>
            </section>
  
            <section className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-3">Verantwortlich für den Inhalt</h2>
              <p className="text-gray-600">
                Max Mustermann<br />
                Musterstraße 123<br />
                12345 Musterstadt
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }