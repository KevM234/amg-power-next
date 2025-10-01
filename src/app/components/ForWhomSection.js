// file: app/components/ForWhomSection.js
export default function ForWhomSection() {
    return (
        <div className='container-fluid'>
            <div className="container row justify-content-center py-6 text-center text-md-start mx-auto">
                
                <div className="col-12 col-md-5 row">
                    <h3 className="col-12" style={{ color: '#4BCAD4' }}>Per chi ha già apparecchiature elettriche:</h3>
                    
                    <div className="col-12 col-md-6 p-4">
                        <h3 className="fs-60">-30%</h3>
                        <p >Riduzione dei costi di guasto imprevisto (grazie alla manutenzione preventiva)</p>
                    </div>
                    
                    <div className="col-12 col-md-6 p-4">
                        <h3 className="fs-60">€0</h3>
                        <p>Nessun costo nascosto o sorpresa in fattura (trasparenza sui preventivi)</p>
                    </div>            
                </div>
                
                <span className="col-12 col-md-1 separator"></span>
                <span className="col-12 col-md-1"></span>
                
                <div className="col-12 col-md-5 row mt-4 mt-md-0">
                    <h3 className="col-12" style={{ color: '#4bb4d4' }}>Per chi ha bisogno di un partner affidabile:</h3>

                    <div className="col-12 col-md-6 p-4">
                        <h3 className="fs-60">-24</h3>
                        <p>ore per un intervento di emergenza (pronto intervento rapido)</p>
                    </div>
                    
                    <div className="col-12 col-md-6 p-4">
                        <h3 className="fs-60">10+</h3>
                        <p>anni di esperienza nel settore e tecnici qualificati (esperienza e competenza)</p>
                    </div>            
                </div>

            </div>
        </div>
    );
}