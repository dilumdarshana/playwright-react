import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Form from './pages/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
