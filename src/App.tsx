import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Header } from './pages/Main/Header';
import { Main } from './pages/Main';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<PrivateRoute />}>
          <Route path="main" element={<Header />}>
            <Route path="" element={<Main />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
