import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/declined cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom">
      <div className="bg-amber-900 text-white shadow-lg border-t-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                🍪 Cookies & Confidentialité
              </h3>
              <p className="text-sm text-amber-100">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                analyser notre trafic et personnaliser le contenu. En cliquant sur "Accepter", 
                vous consentez à l'utilisation de ces cookies. Vous pouvez consulter notre{" "}
                <a href="/politique-confidentialite" className="underline hover:text-white">
                  politique de confidentialité
                </a>{" "}
                pour plus d'informations.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={declineCookies}
                className="px-6 py-2 bg-transparent border-2 border-amber-100 text-amber-100 rounded-md hover:bg-amber-100 hover:text-amber-900 transition font-medium"
              >
                Refuser
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 bg-amber-100 text-amber-900 rounded-md hover:bg-white transition font-medium"
              >
                Accepter
              </button>
              <button
                onClick={() => setShowBanner(false)}
                className="p-2 hover:bg-amber-800 rounded-full transition"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
