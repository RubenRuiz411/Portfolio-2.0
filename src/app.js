import './App.scss';
import Layout from './compontents/Layout';
import Header from './compontents/Header';
import Footer from './compontents/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './compontents/Home'

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout />} />

        </Routes>
      </>
      <Home/>
    </div>
  );
}

export default App;
