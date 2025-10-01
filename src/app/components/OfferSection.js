// file: app/components/OfferSection.js

// Importiamo il componente del form che abbiamo preparato
import OfferForm from './OfferForm';

export default function OfferSection() {
    return (
        <div className='container-fluid mt-5' id="offerta">
            <div className='container d-flex justify-content-center align-items-center py-3'>
                <h2>Richiedi un preventivo</h2>
            </div>
            <div className="il-tuo-contenitore-form mt-3 me-2 ms-2" >
                {/* Usiamo il componente del form */}
                <OfferForm />
            </div>
        </div>
    );
}