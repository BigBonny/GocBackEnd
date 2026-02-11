export function MembreApprenti() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Top motto */}
      <div className="bg-[#7A3A2E] text-[#F4EFE8] text-center py-3">
        <p className="text-sm md:text-base italic font-serif">
          Là où se trouve l'arbre de la connaissance, se trouve le bonheur
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Devenir Membre Apprenti-e
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">Le Premier Degré Initiatique</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Le statut de Membre Apprenti-e représente le premier pas sur le chemin de l'initiation ésotérique. 
            C'est le début d'un voyage transformateur qui vous conduira vers la maîtrise de vous-même 
            et la compréhension des mystères de l'univers.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">Qu'est-ce qu'un Apprenti ?</h3>
            <p className="text-gray-700">
              L'Apprenti est celui ou celle qui s'engage sur la voie de la connaissance avec humilité 
              et détermination. Durant cette période de formation initiale d'une année, vous apprendrez 
              les fondamentaux de l'ésotérisme et participerez aux rituels de base de l'Ordre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Ce que vous recevrez :</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">✦</span>
                  <span className="text-gray-700">Formation mensuelle (cours en ligne + présentiel)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">✦</span>
                  <span className="text-gray-700">Accès à la bibliothèque ésotérique</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">✦</span>
                  <span className="text-gray-700">Journal trimestriel "La Lumière du Cercle"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">✦</span>
                  <span className="text-gray-700">Participation aux rituels d'équinoxe et solstice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">✦</span>
                  <span className="text-gray-700">Mentorat par un membre initié</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">✦</span>
                  <span className="text-gray-700">Certificat d'apprenti après 12 mois</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Programme de formation :</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-700">📘</span>
                  <span className="text-gray-700">Introduction à l'ésotérisme occidental</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700">📘</span>
                  <span className="text-gray-700">Symbolisme sacré et hermétique</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700">📘</span>
                  <span className="text-gray-700">Méditation et concentration mentale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700">📘</span>
                  <span className="text-gray-700">Purification et préparation spirituelle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700">📘</span>
                  <span className="text-gray-700">Rituels de base et pratiques quotidiennes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700">📘</span>
                  <span className="text-gray-700">Éthique et morale ésotérique</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Conditions d'admission :</h3>
            <ul className="space-y-2 text-amber-50">
              <li>• Avoir 18 ans minimum</li>
              <li>• Motivation sincère et engagement dans la démarche spirituelle</li>
              <li>• Accepter les principes et l'éthique du Grand Ordre du Cercle</li>
              <li>• Disponibilité pour suivre la formation (minimum 4h par mois)</li>
              <li>• Entretien préalable avec un membre du Conseil</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 text-center">Tarifs & Cotisation</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 text-center">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Frais d'initiation</h3>
              <div className="text-4xl font-bold text-amber-700 mb-2">150€</div>
              <p className="text-sm text-gray-600">Paiement unique (inclut le kit d'apprenti)</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 text-center">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Cotisation mensuelle</h3>
              <div className="text-4xl font-bold text-amber-700 mb-2">45€</div>
              <p className="text-sm text-gray-600">Accès formations, publications et rituels</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            * Tarifs réduits disponibles selon situation (étudiants, revenus modestes)
          </p>
        </div>

        {/* Formulaire de candidature */}
        <div className="bg-gradient-to-br from-amber-700 to-amber-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-serif mb-6 text-center">Formulaire de Candidature</h2>
          <form className="max-w-2xl mx-auto space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Prénom *</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md text-gray-900"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Nom *</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md text-gray-900"
                  placeholder="Votre nom"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md text-gray-900"
                placeholder="votre.email@exemple.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Téléphone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 rounded-md text-gray-900"
                placeholder="+33 6 XX XX XX XX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Date de naissance *</label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-md text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Pourquoi souhaitez-vous rejoindre le GOC ? *
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-md text-gray-900 h-32"
                placeholder="Parlez-nous de votre motivation et de votre parcours spirituel..."
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Avez-vous une expérience préalable en ésotérisme ?
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-md text-gray-900 h-24"
                placeholder="Décrivez brièvement votre expérience..."
              ></textarea>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <label className="text-sm text-amber-50">
                J'accepte les conditions générales et la charte éthique du Grand Ordre du Cercle
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-amber-700 py-3 rounded-md hover:bg-amber-50 transition font-medium text-lg"
            >
              Soumettre ma candidature
            </button>
          </form>
          <p className="text-center text-sm text-amber-100 mt-6">
            Votre candidature sera examinée sous 7 jours. Un entretien sera organisé avant l'admission.
          </p>
        </div>
      </div>
    </div>
  );
}
