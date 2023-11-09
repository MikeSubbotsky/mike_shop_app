// App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './AppRoutes'; 

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <ToastContainer />
        <Header />
        <div className="mb-6">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

