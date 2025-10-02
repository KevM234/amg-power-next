// file: app/layout.js

import localFont from 'next/font/local'; // Importiamo la funzione per i font locali
import Script from 'next/script'; // Importiamo il componente per gli script esterni

// Importa prima i CSS delle librerie
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importa i tuoi CSS personalizzati DOPO
// Qui puoi mettere il tuo style.css o globals.css
import './style.css'; 
import './header.css'; 
import './cards.css'; 
import './buttons.css'; 
import './form.css'; 

import Header from './components/Header';
import Footer from './components/Footer';

// --- CONFIGURAZIONE FONT LOCALI ---
// Diciamo a Next.js dove trovare i file dei tuoi font.
// Il percorso parte dalla cartella 'app'.
const lexendDeca = localFont({
  src: [
    {
      path: './fonts/LexendDeca-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/LexendDeca-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/LexendDeca-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    // Nota: hai due file con weight 600, ho commentato il "black"
    // {
    //   path: './fonts/LexendDeca-black.ttf',
    //   weight: '600',
    //   style: 'normal',
    // },
  ],
  variable: '--font-lexend-deca', // Creiamo una variabile CSS
  display: 'swap',
});

export const metadata = {
  title: 'AMG Electrical Power',
  description: 'Soluzioni per apparecchiature elettriche',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      {/* Applichiamo la classe del font al tag <body> */}
      <body className={lexendDeca.variable}>
        {/*
          --- SCRIPT DI TRACCIAMENTO ---
          Questi script verranno caricati da Next.js in modo ottimizzato
          senza bloccare il rendering della pagina.
        */}
      
        <Header /> 
        <main>
          {children}
        </main>
        <Footer />

        
    <Script id="iubenda-config" strategy="beforeInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {
              "lang":"it",
              "siteId": 4261972,
              "cookiePolicyId": 91044125,
              "banner": {
                "acceptButtonDisplay": true,
                "customizeButtonDisplay": true,
                "position": "bottom"
              }
            };
          `}
        </Script>
        <Script
          id="iubenda-cs"
          src="https://cdn.iubenda.com/cs/iubenda_cs.js"
          strategy="afterInteractive"
          async
        />

      </body>
    </html>
  );
}