import React from 'react';
import '../App.scss';
import Footer from '../components/Footer/Footer'; // Import Footer
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
    
  );
}

export default App;
