// file: app/components/OfferForm.js
"use client";

import { useState } from 'react';

export default function OfferForm() {
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        if (!privacyAccepted) {
            event.preventDefault();
            setError('Devi accettare la privacy policy per continuare.');
            setTimeout(() => setError(''), 4000);
            return;
        }
        if (typeof fbq === 'function') {
            fbq('track', 'Lead');
            console.log('FB Lead Tracked!');
        }
    };

    return (
        // Aggiungiamo una classe personalizzata per poter applicare il nostro stile
        <form 
            className="form-custom-style"
            action="https://formspree.io/f/mdkwzojr" 
            method="POST"
            onSubmit={handleSubmit}
        >
            <div className="row">
                {/* Riga 1: Nome e Email */}
                <div className="col-md-6 mb-4">
                    <input id="name" type="text" name="name" className="form-control" placeholder="Nome *" required />
                </div>
                <div className="col-md-6 mb-4">
                    <input id="email" type="email" name="email" className="form-control" placeholder="E-mail *" required />
                </div>

                {/* Riga 2: Cellulare e Ragione Sociale */}
                <div className="col-md-6 mb-4">
                    <input id="cellulare" type="tel" name="cellulare" className="form-control" placeholder="Cellulare *" required />
                </div>
                <div className="col-md-6 mb-4">
                    <input id="ragione-sociale" type="text" name="ragione_sociale" className="form-control" placeholder="Ragione sociale *" required />
                </div>

                {/* Riga 4: Textarea (Campo unico) */}
                <div className="col-12 mb-4">
                    <textarea id="message" name="message" className="form-control" rows="6" placeholder="Raccontaci di cosa hai bisogno e secondo te come potremmo aiutarti" required></textarea>
                </div>
            </div>

            {/* Checkbox per la Privacy con link */}
            <div className="mb-3 form-check">
                <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="privacy"
                    checked={privacyAccepted}
                    onChange={(e) => {
                        setPrivacyAccepted(e.target.checked);
                        if(e.target.checked) setError('');
                    }}
                />
                <label className="form-check-label" htmlFor="privacy">
                    Accetto la <a href="https://www.iubenda.com/privacy-policy/91044125" target="_blank" rel="noopener noreferrer" className="iubenda-link">Privacy Policy</a>
                </label>
            </div>
            
            {/* Messaggio di errore */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Bottone di invio */}
            <div className="text-center">
                <button type="submit" className="btn btn-submit mt-3">Invia richiesta</button>
            </div>
        </form>
    );
}