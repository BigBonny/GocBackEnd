import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";

import { Home } from "./pages/Home";
import { Formation } from "./pages/Formation";
import { DevenirMembre } from "./pages/DevenirMembre";
import { Bibliotheque } from "./pages/Bibliotheque";
import { Fraternite } from "./pages/Fraternite";
import { EspaceMembre } from "./pages/EspaceMembre";
import { Donation } from "./pages/Donation";
import { Seminaires } from "./pages/Seminaires";
import { Actions } from "./pages/Actions";
import { CommanderiesFraternelles } from "./pages/CommanderiesFraternelles";
import { ContactsCommanderies } from "./pages/ContactsCommanderies";
import { Contact } from "./pages/Contact";
import { Videos } from "./pages/Videos";

// GOC pages
import { Organisation } from "./pages/goc/Organisation";
import { GOCActions } from "./pages/goc/Actions";
import { GOCCharite } from "./pages/goc/Charite";
import { GOCFraternite } from "./pages/goc/Fraternite";

// Formation pages
import { Esoterisme } from "./pages/formation/Esoterisme";
import { Philosophie } from "./pages/formation/Philosophie";
import { Pouvoirs } from "./pages/formation/Pouvoirs";

// Bibliothèque pages
import { Accessoires } from "./pages/bibliotheque/Accessoires";
import { Livres } from "./pages/bibliotheque/Livres";
import { Journaux } from "./pages/bibliotheque/Journaux";
import { BibliothèqueVideos } from "./pages/bibliotheque/Videos";

// Devenir Membre pages
import { MembreApprenti } from "./pages/devenir-membre/Apprenti";
import { MembreFrereSoeur } from "./pages/devenir-membre/FrereSoeur";
import { ApprenantAuditeur } from "./pages/devenir-membre/Auditeur";

// Donation pages
import { DonationCharite } from "./pages/donation/Charite";
import { DonationSoutien } from "./pages/donation/Soutien";
import { DonationSympathie } from "./pages/donation/Sympathie";

// Auth & member content
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { Success } from "./pages/Success";
import { RequireClerkAuth } from "@/auth/RequireClerkAuth";

const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!CLERK_KEY) {
  throw new Error('Missing Clerk Publishable Key');
}

export default function App() {
  return (

      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Navbar />

          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />

            {/* Auth */}
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/payment-success" element={
              <RequireClerkAuth>
                <Success />
              </RequireClerkAuth>
            } />

            {/* GOC */}
            <Route path="/goc/organisation" element={<Organisation />} />
            <Route path="/goc/actions" element={<GOCActions />} />
            <Route path="/goc/charite" element={<GOCCharite />} />
            <Route path="/goc/fraternite" element={<GOCFraternite />} />

            {/* Formation - Protected by role */}
            <Route path="/formation" element={<Formation />} />
            <Route path="/formation/esoterisme" element={
              <RequireClerkAuth requiredRole="auditeur">
                <Esoterisme />
              </RequireClerkAuth>
            } />
            <Route path="/formation/philosophie" element={
              <RequireClerkAuth requiredRole="apprenti">
                <Philosophie />
              </RequireClerkAuth>
            } />
            <Route path="/formation/pouvoirs" element={
              <RequireClerkAuth requiredRole="frere-soeur">
                <Pouvoirs />
              </RequireClerkAuth>
            } />

            {/* Bibliothèque - Protected by role */}
            <Route path="/bibliotheque" element={
              <RequireClerkAuth requiredRole="auditeur">
                <Bibliotheque />
              </RequireClerkAuth>
            } />
            <Route path="/bibliotheque/accessoires" element={
              <RequireClerkAuth requiredRole="auditeur">
                <Accessoires />
              </RequireClerkAuth>
            } />
            <Route path="/bibliotheque/livres" element={
              <RequireClerkAuth requiredRole="apprenti">
                <Livres />
              </RequireClerkAuth>
            } />
            <Route path="/bibliotheque/journaux" element={
              <RequireClerkAuth requiredRole="apprenti">
                <Journaux />
              </RequireClerkAuth>
            } />
            <Route path="/bibliotheque/videos" element={
              <RequireClerkAuth requiredRole="frere-soeur">
                <BibliothèqueVideos />
              </RequireClerkAuth>
            } />

            {/* Devenir membre (marketing pages – public) */}
            <Route path="/devenir-membre" element={<DevenirMembre />} />
            <Route path="/devenir-membre/auditeur" element={<ApprenantAuditeur />} />
            <Route path="/devenir-membre/apprenti" element={<MembreApprenti />} />
            <Route path="/devenir-membre/frere-soeur" element={<MembreFrereSoeur />} />

            {/* Donation */}
            <Route path="/donation" element={<Donation />} />
            <Route path="/donation/charite" element={<DonationCharite />} />
            <Route path="/donation/soutien" element={<DonationSoutien />} />
            <Route path="/donation/sympathie" element={<DonationSympathie />} />

            {/* Other public pages */}
            <Route path="/fraternite" element={<Fraternite />} />
            <Route path="/seminaires" element={<Seminaires />} />
            <Route path="/actions" element={<Actions />} />
            <Route path="/commanderies-fraternelles" element={<CommanderiesFraternelles />} />
            <Route path="/contacts-commanderies" element={<ContactsCommanderies />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Videos - Protected by role */}
            <Route path="/videos" element={
              <RequireClerkAuth requiredRole="apprenti">
                <Videos />
              </RequireClerkAuth>
            } />

            {/* Member-only (requires any active subscription) */}
            <Route
              path="/espace-membre"
              element={
                <RequireClerkAuth>
                  <EspaceMembre />
                </RequireClerkAuth>
              }
            />
          </Routes>

          <Footer />
          <CookieBanner />
        </div>
      </BrowserRouter>
  );
}