import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { MenuPage } from './components/MenuPage';
import { LocationsPage } from './components/LocationsPage';
import { OrderPage } from './components/OrderPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'menu':
        return <MenuPage onNavigate={setCurrentPage} />;
      case 'locations':
        return <LocationsPage onNavigate={setCurrentPage} />;
      case 'order':
        return <OrderPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
