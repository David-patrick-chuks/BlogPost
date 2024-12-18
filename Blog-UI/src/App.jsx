import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Component/Home';
import Footer from './Component/Footer';
import NewsDetails from './Component/NewsDetails';



function App() {
  const location = useLocation();
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<NewsDetails />} />
        <Route path="footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App
