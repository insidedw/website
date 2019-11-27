import React from 'react';
import Hero from "./components/Hero";
import './css/bulma.min.css';
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
    return (
        <div>
            <Hero/>
            <Container/>
            <Footer/>
        </div>
    );
}

export default App;
