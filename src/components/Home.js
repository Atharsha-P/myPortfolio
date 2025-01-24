// src/components/Home.js
import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="home" id="home">
      {/* Header Section */}
      <header className="home-header">
        <h1>Hello! I'm Atharsha P</h1>
        <p>Aspiring AI & Data Science Engineer | Frontend Developer | Problem Solver</p>
      </header>

      {/* Content Section */}
      <section id="home" className="home">
  <div className="home-content">
    <h2 className="section-title">Welcome to My Portfolio</h2>
    <p>I'm Atharsha, a B.Tech student specializing in AI and Data Science.</p>
    <img 
      src="https://media.tenor.com/XeC4yf26vlQAAAAj/work-working-from-home.gif" 
      alt="Home GIF" 
      className="home-image" 
    />
  </div>
</section>

    </div>
  );
};

export default Home;
