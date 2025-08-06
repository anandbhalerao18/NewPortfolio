import { useState, useEffect, useCallback } from 'react';
import { CheckIcon, ClipboardIcon, QrCodeIcon, ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

const UpiPayment = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const [amount, setAmount] = useState('');
  const upiId = 'bhalerao1895@oksbi';

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Copy UPI ID with basic functionality
  const copyUpiId = useCallback(() => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  // Open UPI app with amount
  const openUpiApp = useCallback(() => {
    if (!amount) {
      if (window.confirm('Proceed without specifying amount? You can enter it in your UPI app.')) {
        window.open(
          `upi://pay?pa=${upiId}&pn=Anand%20Bhalerao&cu=INR`,
          '_blank',
          'noopener,noreferrer'
        );
      }
    } else {
      window.open(
        `upi://pay?pa=${upiId}&pn=Anand%20Bhalerao&am=${amount}&cu=INR`,
        '_blank',
        'noopener,noreferrer'
      );
    }
  }, [amount]);

  // Handle amount input
  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setAmount(value);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#06202B]">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal container */}
      <div className="flex items-center justify-center min-h-screen p-4">
        {/* Modal content */}
        <div className="relative w-full max-w-6xl bg-gradient-to-br from-[#06202B] via-[#0a3a4a] to-[#077A7D] rounded-2xl shadow-2xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[#077A7D]/30 hover:bg-[#077A7D]/50 transition-colors duration-200"
            aria-label="Close payment"
          >
            <XMarkIcon className="h-6 w-6 text-[#7AE2CF]" />
          </button>

          {/* Scrollable content */}
          <div className="overflow-y-auto max-h-[90vh] p-6 sm:p-8">
            {/* Back button */}
            <button
              onClick={onClose}
              className="flex items-center group text-[#7AE2CF] hover:text-[#F5EEDD] mb-8 transition-all duration-300"
              aria-label="Back to portfolio"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Portfolio</span>
            </button>

            {/* Main content */}
            <div>
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-[#077A7D]/20 backdrop-blur-sm border border-[#7AE2CF]/20 mb-6">
                  <QrCodeIcon className="h-10 w-10 text-[#7AE2CF]" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#7AE2CF] to-[#F5EEDD]">
                  Support My Creative Work
                </h1>
                <p className="text-lg sm:text-xl text-[#7AE2CF] max-w-3xl mx-auto leading-relaxed">
                  Your generous support helps me continue developing open-source projects, 
                  Learning new technology and language, and pushing creative boundaries.
                </p>
              </div>

              {/* Payment options grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* QR Code Section */}
                <div className="bg-[#06202B]/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#077A7D]/30 shadow-lg">
                  <div className="flex items-center mb-6">
                    <QrCodeIcon className="h-8 w-8 mr-3 text-[#7AE2CF]" />
                    <h2 className="text-2xl font-bold text-[#F5EEDD]">Quick Scan Payment</h2>
                  </div>
                  <p className="text-[#7AE2CF] mb-6 leading-relaxed">
                    Open any UPI payment app on your smartphone and scan this QR code to instantly support my work.
                  </p>
                  <div className="flex justify-center p-4 bg-white/5 rounded-xl border border-[#077A7D]/20">
                    <img 
                      src="/anandupiqr.png" 
                      alt="UPI QR Code"
                      className="w-full max-w-xs sm:max-w-sm aspect-square object-contain"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <p className="text-sm text-[#7AE2CF]/80 text-center mt-4">
                    Works with Google Pay, PhonePe, PayTM, BHIM, and all UPI apps
                  </p>
                </div>

                {/* UPI ID Section */}
                <div className="bg-[#06202B]/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#077A7D]/30 shadow-lg">
                  <h2 className="text-2xl font-bold text-[#F5EEDD] mb-6">Manual Payment Option</h2>
                  
                  <div className="space-y-6">
                    {/* UPI ID Field */}
                    <div>
                      <label className="block text-sm font-semibold text-[#7AE2CF] mb-3">
                        My UPI ID
                      </label>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1 bg-[#06202B] px-5 py-3 rounded-xl border border-[#077A7D]/30 font-mono text-lg text-[#F5EEDD] truncate">
                          {upiId}
                        </div>
                        <button
                          onClick={copyUpiId}
                          className={`flex-shrink-0 flex items-center justify-center px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                            copied
                              ? 'bg-[#077A7D] text-[#F5EEDD] ring-2 ring-[#7AE2CF]'
                              : 'bg-[#077A7D]/90 text-[#F5EEDD] hover:bg-[#077A7D] hover:shadow-lg'
                          }`}
                          aria-label={copied ? "Copied!" : "Copy UPI ID"}
                        >
                          {copied ? (
                            <>
                              <CheckIcon className="h-5 w-5 mr-2" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <ClipboardIcon className="h-5 w-5 mr-2" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Amount Field */}
                    <div>
                      <label className="block text-sm font-semibold text-[#7AE2CF] mb-3">
                        Enter Amount (INR)
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          inputMode="numeric"
                          value={amount}
                          onChange={handleAmountChange}
                          placeholder="100"
                          className="w-full bg-[#06202B] px-5 py-3 rounded-xl border border-[#077A7D]/30 text-[#F5EEDD] text-lg focus:outline-none focus:ring-2 focus:ring-[#7AE2CF] focus:border-transparent"
                        />
                        <span className="absolute right-4 top-3.5 text-[#7AE2CF] font-medium">₹</span>
                      </div>
                      {amount && (
                        <p className="text-sm text-[#7AE2CF]/80 mt-2">
                          You'll be paying: ₹{parseInt(amount).toLocaleString('en-IN')}
                        </p>
                      )}
                    </div>

                    {/* Payment Button */}
                    <div className="space-y-3">
                      <button
                        onClick={openUpiApp}
                        className="w-full flex items-center justify-center py-4 px-6 bg-gradient-to-r from-[#077A7D] to-[#7AE2CF] text-[#06202B] text-lg font-bold rounded-xl hover:from-[#7AE2CF] hover:to-[#077A7D] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <span>Proceed to Payment</span>
                        <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </button>
                      <p className="text-sm text-[#7AE2CF]/80 text-center">
                        You'll be redirected to your default UPI app to complete the payment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div className="bg-[#06202B]/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#077A7D]/30 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-[#F5EEDD] mb-6">About Your Support</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#7AE2CF] mb-4 flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      How It Works
                    </h3>
                    <ul className="space-y-4 text-[#F5EEDD]">
                      {[
                        "Select any payment method above",
                        "Enter an amount that feels right for you",
                        "Complete the secure UPI payment",
                        "Receive my heartfelt thanks!"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#077A7D] text-[#F5EEDD] mr-3 mt-0.5">
                            {index + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#7AE2CF] mb-4 flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Where Your Support Goes
                    </h3>
                    <p className="text-[#F5EEDD] mb-4">
                      Your contributions directly support:
                    </p>
                    <ul className="space-y-2 text-[#F5EEDD]">
                      {[
                        "Open-source project development",
                        "Educational and learning new tech",
                        "Creative experimentations",
                        "Platform and hosting costs"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="inline-block h-2 w-2 rounded-full bg-[#7AE2CF] mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center border-t border-[#077A7D]/30 pt-8">
                <p className="text-[#7AE2CF]/80 mb-2">
                  Thank you for considering supporting my creative journey
                </p>
                <p className="text-sm text-[#7AE2CF]/60">
                  All payments are processed securely via UPI. No payment information is stored on this website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpiPayment;