import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="navbar">
          <div className="logo">My Demo</div>
          <nav className="nav-links">
            <Link to="/">Trang chủ</Link>
            <Link to="/about">Giới thiệu</Link>
            <Link to="/contact">Liên hệ</Link>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
