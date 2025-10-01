// file: app/components/ExampleSection.js
export default function ExampleSection() {
    const title = "Un impianto sicuro e efficiente, ecco l'esempio:";
    const text = "Grazie al nostro intervento mirato, il cliente ha trasformato un impianto obsoleto e problematico in un sistema elettrico all'avanguardia. In poche settimane, abbiamo ottimizzato l'efficienza energetica, garantito la piena conformità alle normative e azzerato i fermi macchina imprevisti, valorizzando la produttività e la sicurezza dell'ambiente di lavoro.";

    return (
        <div className='container-fluid'>
            <div className="container row py-5 align-items-center mx-auto">
                <img src="/images/hero-image.png" className="d-none d-md-block col-md-6 my-4" style={{ borderRadius: '32px' }} alt="Esempio di installazione" />
                <div className="col-12 col-md-6 px-md-5">
                    
                    <h2>{title}</h2>
                    
                    <ul>
                        <li>+80% di affidabilità dell'impianto.</li>
                        <li>-40% costi di gestione.</li>
                        <li>+100% sicurezza operativa.</li>
                    </ul>
                    
                    <p>{text}</p>

                    <div className="d-flex justify-content-center justify-content-md-start align-items-center align-items-md-start mt-3 mb-3 mb-md-0">
                        <a href="tel:3278821634" className="">
                            <div className="button-v1">
                                Chiamaci ora
                                <svg className="ms-2" width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>  
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}