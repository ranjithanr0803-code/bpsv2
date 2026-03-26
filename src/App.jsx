// // import Navbar from "./component/navbar";


// // function App() {
// //   return (
// //     <div >
// //       <Navbar />
// //     </div>
// //   );
// // }

// // export default App;
// import React from 'react';
// // import Navbar from './components/Navbar';
// import { Container } from '@mui/material';
// import Navbar from './component/navbar';
// import WelcomePage from './component/welcome';


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Container maxWidth="md">
//         <WelcomePage />
//       </Container>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/common/Navbar';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import WelcomePage from './pages/Welcome';
import './index.css'
import Contact from './pages/Contact';
import Services from './pages/Services';
import AboutUS from './pages/AboutUS';
import SixthPage from './pages/landing_page/SixthPage';
import ProductsPage1 from './pages/ProductsPage1';
import ProductsPage2 from './pages/ProductsPage2';
import ProductsPage3 from './pages/ProductsPage3';
import Gallery from './pages/Gallery';
import { FooterContactus } from '@common';
// ------------------./component/AboutUS-----------------------------------------------------------
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<WelcomePage />} />
        {/* <Route path="/productspage1" element={<ProductsPage1 />} /> */}
        <Route path="/productspage2" element={<ProductsPage2 />} />
        <Route path="/productspage3" element={<ProductsPage3 />} />

        <Route path="/home" element={<WelcomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={< Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/123" element={<SixthPage />} />
      </Routes>
      <FooterContactus />
      {/* <WelcomePage /> */}
      {/* <Contact/> */}
    </div>
  );
};

export default App;
