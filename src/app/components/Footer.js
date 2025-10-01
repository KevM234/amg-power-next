// file: app/components/Footer.js

import Link from 'next/link'; // Opzionale, per link interni futuri
import Image from 'next/image'; // Opzionale ma consigliato per le immagini per ottimizzazione

export default function Footer() {
  return (
    <footer className="container pt-5 px-5 overflow-hidden">
      <div className="row justify-content-between z-1 text-center text-md-start">

        <div className="col-12 col-md-4 mb-0 mb-md-0 d-flex flex-column align-items-center align-items-md-start px-4">
          <div className="mb-4">
            {/* Il percorso dell'immagine ora parte dalla cartella 'public' */}
            <img 
              src="/images/loghi/logo-amg.png" 
              alt="logo AMG The Electrical Power"  
              style={{ maxHeight: '100px' }} 
            />
          </div>
          <div>
            <p className="mb-1" style={{ fontSize: '20px' }}><span>Vicolo Rotondo 6</span></p>
            <p className="mb-1" style={{ fontSize: '20px' }}><span>25047 Darfo Boario Terme (BS)</span></p>
            <p className="mb-1" style={{ fontSize: '20px' }}><span>P. IVA 04398080988</span></p>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex mt-footer flex-column align-items-center align-items-md-end px-4">
          <h3 className="mb-3">Contatti</h3>
          <p className="mb-1"><a href="tel:3463092617">+39 346 309 2617</a></p>
          <p className="mb-3"><a href="mailto:amgelectricalpower@gmail.com">amgelectricalpower@gmail.com</a></p>
        </div>

      </div>
      <div className="row px-md-4 w-100 pt-5">
        <div className="col-12 text-center">

          <div className="d-flex justify-content-center gap-3 mb-3">
              <a href="https://www.iubenda.com/privacy-policy/91044125" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a>
              <a href="https://www.iubenda.com/privacy-policy/91044125/cookie-policy" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">Cookie Policy</a>
          </div>
          {/* L'anno dinamico viene generato con JavaScript */}
          <p className="small text-muted">&copy; {new Date().getFullYear()} AMG The Electrical Power. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}