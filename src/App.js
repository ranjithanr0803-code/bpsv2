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
import Navbar from './component/navbar';
import { BrowserRouter, Route, Routes , } from 'react-router-dom';
import Home from './component/Home';
import WelcomePage from './component/welcome';
import './index.css'
import Contact from './component/contact';
import Services from './component/services';
import AboutUS from './component/aboutUS';
import SixthPage from './component/landing_page/SixthPage';
import ProductsPage1 from './component/ProductsPage1';
import ProductsPage2 from './component/ProductsPage2';
import ProductsPage3 from './component/ProductsPage3';
import Gallery from './component/gallery';
import FooterContactus from './component/FooterContactus';
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
      <Route path ="/service" element={< Services/>} />
      <Route path ="/Gallery" element={<Gallery/>}/>
      <Route path ="/AboutUS" element={<AboutUS/>}/>
      <Route path ="/123" element={<SixthPage/>}/>
      </Routes>
      <FooterContactus />
      {/* <WelcomePage /> */}
      {/* <Contact/> */}
    </div>
  );
};

export default App;
