import './App.scss';
import Layout from './compontents/Layout';
import Header from './compontents/Header';
import Footer from './compontents/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout />} />

        </Routes>
      </>
    </div>
  );
}

export default App;
