// file: app/components/HeroSection.js
export default function HeroSection() {
    const hero_title = "AMG: L'Energia che Ti Mette in Sicurezza.";
    const hero_subtitle = "Dalla piccola riparazione alla gestione completa degli impianti, AMG The Electrical Power garantisce interventi rapidi, soluzioni certificate e la massima affidabilità per la tua serenità elettrica.";

    return (
        <div 
            className="hero-section" 
            style={{ backgroundImage: "url('/images/hero-image.png')" }}
        >
            <div className="hero-content text-center text-white">
                <h1 className="mt-5">{hero_title}</h1>
                <p className="my-3">{hero_subtitle}</p>

                <div className="w-fit mx-auto">
                    <a href="#offerta">
                        <div className="button-preventivo">
                            richiedi un preventivo
                            <svg className="ms-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>  
                        </div>
                    </a>
                </div>  
            </div>
        </div>
    );
}