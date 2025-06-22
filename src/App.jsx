import { Routes, Route } from 'react-router';
import Home from './components/pages/Home/Home';
import NoPage from './components/pages/NoPage/NoPage';
import Table from './components/pages/Table/Table';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table/:id' element={<Table />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
