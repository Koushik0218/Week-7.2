import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import DestinationsSection from './DestinationsSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <DestinationsSection />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default App;
