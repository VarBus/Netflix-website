import React, { useState } from 'react';
import './App.css';
import Netflix from './Assets/Netflix-logo.png';
import JuegoCalamar from './Assets/juego-calamar.png';
import Mascotas from './Assets/Mascotas.png';
import adVitam from './Assets/adVitam.png';

function App() {
  const [idioma, setIdioma] = useState('español');

  const cambiarIdioma = () => {
    setIdioma(idioma === 'español' ? 'inglés' : 'español');
  };

  const inicioSesion = () => {
    if (idioma === 'español') {
      alert('Has hecho clic en Iniciar sesión');
    } else {
      alert('You clicked on Sign In');
    }
  };

  const SaberMas = () => {
    if (idioma === 'español') {
      alert('Has hecho clic en Más Información');
    } else {
      alert('You clicked on More information');
    }
  };

  return (
    <div className="App">
      {/* Barra de navegación */}
      <div className='nav-bar-class'>
        <nav className='nav-bar'>
          <ul className='nav-list'>
            <li>
              <a href='/'>
                <img src={Netflix} alt='Netflix Logo' className='netflix-logo' />
              </a>
            </li>
            <li>
              <select value={idioma} onChange={cambiarIdioma} className='language-select'>
                <option value="español">Español</option>
                <option value="inglés">Inglés</option>
              </select>
            </li>
            <li>
              <button onClick={inicioSesion} className='sign-in-button'>
                {idioma === 'español' ? 'Iniciar sesión' : 'Sign In'}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <div className='hero-section'>
        <h1 className='hero-title'>
          {idioma === 'español' ? 'Películas y series ilimitadas y mucho más' : 'Unlimited movies, TV shows, and more'}
        </h1>
        <p className='hero-subtitle'>
          {idioma === 'español' ? 'A partir de S/ 28.90. Cancela cuando quieras.' : 'Starting at S/ 28.90. Cancel anytime.'}
        </p>
        <p className='hero-description'>
          {idioma === 'español'
            ? '¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.'
            : 'Ready to watch Netflix? Enter your email to create or restart your membership.'}
        </p>
        <div className='email-input-container'>
          <input type='text' placeholder={idioma === 'español' ? 'Email' : 'Email Address'} className='email-input' />
          <button onClick={SaberMas} className='get-started-button'>
            {idioma === 'español' ? 'Comenzar' : 'Get Started'}
          </button>
        </div>
      </div>

      {/* Sección de tendencias */}
      <div className='trending-section'>
        <h2 className='section-title'>{idioma === 'español' ? 'Tendencias' : 'Trending Now'}</h2>
        <div className='trending-grid'>
          <img src={JuegoCalamar} alt='El Juego del Calamar' className='trending-image' />
          <img src={Mascotas} alt='Mascotas' className='trending-image' />
          <img src={adVitam} alt='Ad Vitam' className='trending-image' />
        </div>
      </div>

      {/* Sección de características */}
      <div className='features-section'>
        <h2 className='section-title'>{idioma === 'español' ? 'Más motivos para unirte' : 'More reasons to join'}</h2>
        <div className='features-grid'>
          <div className='feature-card'>
            <h3>{idioma === 'español' ? 'Disfruta en tu TV' : 'Enjoy on your TV'}</h3>
            <p>
              {idioma === 'español'
                ? 'Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.'
                : 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'}
            </p>
          </div>
          <div className='feature-card'>
            <h3>{idioma === 'español' ? 'Descarga tus series' : 'Download your shows'}</h3>
            <p>
              {idioma === 'español'
                ? 'Guarda tu contenido favorito y siempre tendrás algo para ver.'
                : 'Save your favorites easily and always have something to watch.'}
            </p>
          </div>
          <div className='feature-card'>
            <h3>{idioma === 'español' ? 'Disfruta donde quieras' : 'Watch everywhere'}</h3>
            <p>
              {idioma === 'español'
                ? 'Películas y series ilimitadas en tu teléfono, tablet, laptop y TV.'
                : 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'}
            </p>
          </div>
          <div className='feature-card'>
            <h3>{idioma === 'español' ? 'Crea perfiles para niños' : 'Create profiles for kids'}</h3>
            <p>
              {idioma === 'español'
                ? 'Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos.'
                : 'Kids can enjoy their favorite characters in a space made just for them.'}
            </p>
          </div>
        </div>
      </div>

      {/* Sección de preguntas frecuentes */}
      <div className='faq-section'>
        <h2 className='section-title'>{idioma === 'español' ? 'Preguntas frecuentes' : 'Frequently Asked Questions'}</h2>
        <div className='faq-grid'>
          {[
            {
              question: idioma === 'español' ? '¿Qué es Netflix?' : 'What is Netflix?',
              answer: idioma === 'español'
                ? 'Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.'
                : 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, and more on thousands of internet-connected devices.',
            },
            {
              question: idioma === 'español' ? '¿Cuánto cuesta Netflix?' : 'How much does Netflix cost?',
              answer: idioma === 'español'
                ? 'Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual.'
                : 'Watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device, all for one fixed monthly fee.',
            },
            // Agrega más preguntas aquí...
          ].map((faq, index) => (
            <div key={index} className='faq-card'>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pie de página */}
      <div className='footer-section'>
        <h4 className='footer-title'>{idioma === 'español' ? '¿Preguntas? Llama al 0-800-52352' : 'Questions? Call 0-800-52352'}</h4>
        <div className='footer-grid'>
          {[
            'Preguntas frecuentes',
            'Prensa',
            'Canjear tarjetas de regalo',
            'Términos de uso',
            'Información corporativa',
            'Avisos legales',
            'Centro de ayuda',
            'Relaciones con inversionistas',
            'Comprar tarjetas de regalo',
            'Privacidad',
            'Contáctanos',
            'Solo en Netflix',
            'Cuenta',
            'Empleo',
            'Formas de ver',
            'Preferencias de cookies',
            'Prueba de velocidad',
          ].map((item, index) => (
            <a key={index} href='/' className='footer-link'>
              {item}
            </a>
          ))}
        </div>
        <select value={idioma} onChange={cambiarIdioma} className='language-select'>
          <option value="español">Español</option>
          <option value="inglés">Inglés</option>
        </select>
        <footer className='footer-text'>Netflix Perú</footer>
      </div>
    </div>
  );
}

export default App;