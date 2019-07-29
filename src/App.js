import React from 'react';
import Hero from './components/Hero';
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Hero />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
