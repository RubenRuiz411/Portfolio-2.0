// import './App.scss';
// import Layout from './compontents/Layout';
// import Header from './compontents/Header';
// import Footer from './compontents/Footer';
// import { Route, Routes } from 'react-router-dom';
// import Home from './compontents/Home'

// function App() {
//   return (
//     <div className="App">
//       <>
//         <Routes>
//           <Route path="/" element={<Layout />} />

//         </Routes>
//       </>
//       <Home/>
//     </div>
//   );
// }

// export default App;


import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
// import Dashboard from './components/'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
