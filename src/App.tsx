import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Form from './pages/Form';
import Layout from './components/layouts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
