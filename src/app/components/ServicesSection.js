// file: app/components/ServicesSection.js
export default function ServicesSection() {
    const title = "La tua elettricità in buone mani (e perché siamo la scelta giusta?)";
    const subtitle = "Ti offriamo soluzioni complete per le tue apparecchiature elettriche, garantendo efficienza, sicurezza e durata. Ecco come ti supportiamo:";
    
    // Un array di oggetti per gestire facilmente le card
    const services = [
        { icon: '💡', title: 'Diagnosi Precisa, Soluzioni Mirate.', subtitle: 'Partiamo da un\'analisi dettagliata del problema delle tue apparecchiature. Capiremo l\'origine del guasto per offrirti l\'intervento più efficace e duraturo.' },
        { icon: '🔧', title: 'Riparazioni Rapide e Professionali.', subtitle: 'I nostri tecnici esperti intervengono con tempestività per ripristinare la piena funzionalità dei tuoi impianti. Utilizziamo solo ricambi di qualità e tecniche all\'avanguardia.' },
        { icon: '🔩', title: 'Manutenzione Preventiva per la Longevità.', subtitle: 'Non aspettare il guasto. Con piani di manutenzione periodica, preveniamo malfunzionamenti, prolunghiamo la vita delle tue apparecchiature e ottimizziamo i costi a lungo termine.' },
        { icon: '✅', title: 'Impianti a Norma, Sicurezza Garantita.', subtitle: 'Verifichiamo e adeguiamo i tuoi impianti alle normative vigenti, rilasciando certificazioni dove richiesto. La tua sicurezza e quella delle tue apparecchiature sono la nostra priorità.' },
        { icon: '📈', title: 'Gestione Impianti e Consigli Pratici.', subtitle: 'Ti aiutiamo a organizzare e ottimizzare la gestione dei tuoi sistemi elettrici. Ti forniremo consigli utili per l\'uso corretto e la piccola manutenzione quotidiana.' },
        { icon: '📞', title: 'Assistenza Continua, Supporto Dedicato.', subtitle: 'Non ti lasciamo solo. Per qualsiasi esigenza o dubbio, il nostro team è sempre disponibile per fornirti supporto e assistenza post-intervento, garantendoti tranquillità.' },
    ];

    return (
        <div className='container-fluid position-relative overflow-hidden' id="amg">
            {/* Nota: le immagini di sfondo vanno gestite con Next/Image o CSS per una migliore performance */}
            <img src="/images/sfumatura-2.png" alt="sfumatura" className="position-absolute z-0 sfumatura-2"/>
            <div className="container row justify-content-center py-6 z-1 pb-4 mx-auto" >
                <div className="col-md-8 text-center">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
                    {services.map((service, index) => (
                        <div className="card-v2" key={index}>
                            <p style={{ fontSize: '40px' }}>{service.icon}</p>
                            <h3>{service.title}</h3>
                            <p>{service.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* ... resto della sezione ... */}
        </div>
    );
}