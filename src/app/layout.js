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
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a] = c[a] || function(){ (c[a].q = c[a].q || []).push(arguments) };
                t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "smicsnidwt");
          `}
        </Script>

        <Script id="facebook-pixel-script" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1188715056359080');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Questo è il fallback noscript per il pixel di Facebook */}
        <noscript>
            <img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=1188715056359080&ev=PageView&noscript=1"/>
        </noscript>
        
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