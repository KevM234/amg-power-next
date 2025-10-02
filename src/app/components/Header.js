// file: app/components/Header.js
"use client";

import { useEffect, useState } from 'react'; // <-- 1. AGGIUNGI 'useState' QUI
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // <-- 2. AGGIUNGI QUESTA RIGA

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <div className="container-fluid py-2" style={{ marginTop: '0px', position: 'absolute', zIndex: 2, background: 'white', paddingTop: '20px', top: '-30px' }}>
        <div className="container mt-4 d-flex flex-row align-items-center justify-content-between w-100 z-2">
          
          <div className="d-flex flex-row align-items-center">
            <Link href="/">
              <img src="/images/loghi/logo-amg.png" alt="logo AMG" className="logo-header" />
            </Link>
            <div className="menu-list flex-row d-none d-md-flex">
              <a className="mx-4" style={{ fontSize: '15px' }} href="#lavori">I nostri lavori</a>
              <a className="me-4" style={{ fontSize: '15px' }} href="#amg">Cos'è AMG?</a>
              <a className="me-4" style={{ fontSize: '15px' }} href="#i-nostri-interventi">I nostri interventi</a>
              <a className="me-4" style={{ fontSize: '15px' }} href="#offerta">Richiedi preventivo</a>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center">
            <a href="tel:3463092617" target="_blank" rel="noopener noreferrer" className="d-none d-md-block">
              <div className="button-v1 mt-0">
                Chiamaci ora
                <svg className="ms-2" width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>  
              </div>
            </a> 

            <a href="https://wa.me/3463092617" target="_blank" rel="noopener noreferrer" className="ms-4">
              <div className="whatsapp-header d-flex align-items-center justify-content-center">
                <img src="/images/loghi/whatsapp.png" alt="whatsapp" style={{ width: '20px', height: '20px' }} />
              </div>
            </a>
            
           <div className="container burger-container d-md-none">
              <button 
                className={`burger-menu ${isMenuOpen ? 'is-active' : ''}`}
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarContent"
                aria-expanded={isMenuOpen}
                aria-controls="navbarContent"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="collapse" id="navbarContent">
        {/* 1. Abbiamo rimosso lo stile da qui... */}
        <div style={{ paddingTop: '70px' }}> {/* 2. ...e lo abbiamo messo su un div interno! */}
          <ul className="list-group">
            <li className="list-group-item"><a href="#lavori">I nostri lavori</a></li>
            <li className="list-group-item"><a href="#amg">Cos'è AMG?</a></li>
            <li className="list-group-item"><a href="#i-nostri-interventi">I nostri interventi</a></li>
            <li className="list-group-item"><a href="#offerta">Richiedi preventivo</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}