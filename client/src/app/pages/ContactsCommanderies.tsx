export function ContactsCommanderies() {
  const contacts = [
    { commanderie: "Paris", responsable: "Maître Jean Dupont", email: "paris@goc.org" },
    { commanderie: "Lyon", responsable: "Maître Marie Laurent", email: "lyon@goc.org" },
    { commanderie: "Bordeaux", responsable: "Maître Pierre Martin", email: "bordeaux@goc.org" },
    { commanderie: "Marseille", responsable: "Maître Sophie Bernard", email: "marseille@goc.org" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Contacts Commanderies
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-serif text-amber-900 mb-3">
                Commanderie de {contact.commanderie}
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-start gap-2">
                  <span className="text-amber-700">👤</span>
                  <span>{contact.responsable}</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-700">📧</span>
                  <a href={`mailto:${contact.email}`} className="text-amber-700 hover:text-amber-800">
                    {contact.email}
                  </a>
                </p>
              </div>
              <button className="w-full mt-4 bg-amber-700 text-white py-2 rounded-md hover:bg-amber-800 transition">
                Envoyer un message
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
