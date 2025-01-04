import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar'
import PagesContainer from './pages/PagesContainer';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import SearchPage from './pages/Search';

function App() {
  return (
    <div>
      <PagesContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id/" element={<Detail />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/Search/" element={<SearchPage />} />
          </Routes>
        </Router>
      </PagesContainer>
    </div>
  );
}

export default App;
