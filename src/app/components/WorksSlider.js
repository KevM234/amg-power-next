// file: app/components/WorksSlider.js
"use client";

import Slider from "react-slick";

export default function WorksSlider() {
    const sliderImages = Array(8).fill('/images/hero-image3.png');

    const settings = {
        className: "center", // Aggiungiamo una classe per il CSS
        centerMode: true,
        infinite: true,
        centerPadding: "60px", // Aumentiamo un po' il padding per un effetto migliore
        slidesToShow: 3,
        speed: 500,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              centerPadding: "40px",
            }
          }
        ]
      };

    return (
        // Usiamo un contenitore personalizzato per isolarlo da Bootstrap
        <section className="works-section" id="lavori">
            <div className="works-title-container">
                <h2>Alcuni dei nostri lavori...</h2>
            </div>

            {/* Lo slider ora vive libero da altre classi di layout */}
            <Slider {...settings}>
                {sliderImages.map((src, index) => (
                    <div className="card-v1" key={index}>
                        <img src={src} alt={`Lavoro esempio ${index + 1}`} className="image" />
                    </div>
                ))}
            </Slider>
        </section>
    );
}