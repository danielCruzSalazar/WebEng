import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PrincipalNavBarDropdown from './NavBarDropdown.js'
import ContactSection from "./pages/ContactSection.js";

function App() {
  return (
    <div className="App">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    <PrincipalNavBarDropdown/>
      <header className="App-header"> </header>
      <ContactSection className="hidden"/>
    </div>
  );
}

export default App;