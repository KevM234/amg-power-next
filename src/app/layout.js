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
        <Script id="iubenda-main-script">
          {`
            (function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);
          `}
        </Script>
        <Script id="iubenda-widget-script" src="https://embeds.iubenda.com/widgets/a65051d3-72ba-4cf2-a67f-599093f1dc97.js" />
        
      </body>
    </html>
  );
}