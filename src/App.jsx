import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Interests from './components/Interests';
import UpiPayment from './components/UpiPayment';
import Footer from './components/Footer';

function App() {
  const [showUpiModal, setShowUpiModal] = useState(false);

  return (
    <Router>
      <div className="relative bg-gradient-to-b from-[#040D12] to-[#06202B]">
        {/* Main content with modal overlay effect */}
        <div className={`transition-all duration-300 ${showUpiModal ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
          <Navbar onUpiClick={() => setShowUpiModal(true)} />
          
          {/* Smooth scrolling sections with consistent spacing */}
          <main className="space-y-0">
            <About />
            <Skills />
            <Projects />
            <Interests />
            <Footer/>
          </main>
        </div>

        {/* UPI Payment Modal */}
        {showUpiModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="absolute inset-0 bg-black/70" onClick={() => setShowUpiModal(false)}></div>
            <div className="relative z-10 w-full max-w-md">
              <UpiPayment onClose={() => setShowUpiModal(false)} />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;