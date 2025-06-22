import { Routes, Route } from 'react-router';
import Home from './components/pages/Home/Home';
import NoPage from './components/pages/NoPage/NoPage';
import Table from './components/pages/Table/Table';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/table/:id' element={<Table />} />
      <Route path='*' element={<NoPage />} />
    </Routes>
  );
}

export default App;
