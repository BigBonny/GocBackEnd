export function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Contact
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-serif text-amber-900 mb-4">
              Informations de Contact
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-medium text-amber-900">Siège Principal</p>
                  <p>Grand Ordre du Cercle</p>
                  <p>123 Rue de la Sagesse</p>
                  <p>75001 Paris, France</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-medium text-amber-900">Email</p>
                  <a href="mailto:contact@goc.org" className="text-amber-700 hover:text-amber-800">
                    contact@goc.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-medium text-amber-900">Téléphone</p>
                  <a href="tel:+33123456789" className="text-amber-700 hover:text-amber-800">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-serif text-amber-900 mb-4">
              Envoyez-nous un Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-amber-900 font-medium mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-amber-900 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-amber-900 font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-3 rounded-md hover:bg-amber-800 transition font-medium"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-200">
          <h3 className="text-xl font-serif text-amber-900 mb-3 text-center">
            Horaires d'Ouverture
          </h3>
          <div className="text-center text-gray-700 space-y-1">
            <p>Lundi - Vendredi : 9h00 - 18h00</p>
            <p>Samedi : 10h00 - 16h00</p>
            <p>Dimanche : Fermé</p>
          </div>
        </div>
      </div>
    </div>
  );
}
