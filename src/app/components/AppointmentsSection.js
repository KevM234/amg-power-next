// file: app/components/AppointmentsSection.js
export default function AppointmentsSection() {
    const title = "I nostri interventi di successo in 4 fasi:";
    const appointments = [
        { num: '01', title: 'Analisi e Diagnosi Preliminare.', text: 'Ascoltiamo le tue esigenze e raccogliamo tutte le informazioni sull\'apparecchiatura o impianto. Effettuiamo una prima valutazione per comprendere la natura del problema e le sue possibili cause.', color: 'text-green-light' },
        { num: '02', title: 'Proposta di Soluzione e Preventivo.', text: 'Ti presentiamo le opzioni di intervento più efficaci, dai ricambi specifici alle tecniche di riparazione. Discutiamo insieme la soluzione migliore e ti forniamo un preventivo trasparente e dettagliato.', color: 'text-orange-lighter' },
        { num: '03', title: 'Riparazione, Manutenzione e Test.', text: 'Eseguiamo l\'intervento concordato con precisione e professionalità. Una volta completato il lavoro, effettuiamo test rigorosi per assicurarti che l\'apparecchiatura o l\'impianto funzioni perfettamente e in sicurezza.', color: 'text-red-light' },
        { num: '04', title: 'Consegna, Garanzia e Assistenza Post-Intervento.', text: 'Ti restituiamo l\'apparecchiatura o certificato l\'impianto in perfette condizioni, fornendo consigli per la corretta manutenzione. Offriamo garanzia sul lavoro svolto e siamo sempre disponibili per supporto futuro.', color: 'text-orange-light' }
    ];

    return (
        <div className='container-fluid bg-black' id="i-nostri-interventi">
            <div className="container row py-7 align-items-center mx-auto">
                
                <h2 className="col-12 mb-5 text-center text-white">{title}</h2>

                {appointments.map((app, index) => (
                    <div className="row align-items-center mb-4" key={index}>
                        <h1 className={`col-12 col-md-1 fs-50 ${app.color}`}>{app.num}</h1>
                        <h3 className="col-12 col-md-3 text-white">{app.title}</h3>
                        <p className="col-12 col-md-8 text-white">{app.text}</p>
                        {index < appointments.length - 1 && 
                            <div className="col-12 mt-2" style={{ border: '1px solid #3b3b3bff' }}></div>
                        }
                    </div>
                ))}
                
            </div>        
        </div>
    );
}