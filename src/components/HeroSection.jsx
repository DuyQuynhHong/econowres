import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/images/4232_minhhoakt.jpg',
      title: 'Khám Phá Thế Giới Kinh Tế',
      subtitle: 'Trải nghiệm các ngành nghề kinh tế thông qua game tương tác'
    },
    {
      id: 2,
      image: '/images/cover-1707525851376.webp',
      title: 'Học Tập Qua Thực Hành',
      subtitle: 'Hoàn thành nhiệm vụ và tích lũy kinh nghiệm'
    },
    {
      id: 3,
      image: '/images/download.jpg',
      title: 'Cộng Đồng Econowres',
      subtitle: 'Kết nối và chia sẻ với bạn bè cùng đam mê'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <button className="hero-arrow hero-arrow-left" onClick={prevSlide}>
        &#8249;
      </button>
      
      <div className="hero-content">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="hero-arrow hero-arrow-right" onClick={nextSlide}>
        &#8250;
      </button>

      {/* Slide indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
