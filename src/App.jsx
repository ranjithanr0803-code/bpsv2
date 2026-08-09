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
import { Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import WelcomePage from './pages/Welcome';
import './index.css'
import Contact from './pages/Contact';
import Services from './pages/Services';
import AboutUS from './pages/AboutUS';
import SixthPage from './pages/landing_page/SixthPage';
import ProductsPage2 from './pages/ProductsPage2';
import ProductsPage3 from './pages/ProductsPage3';
import Gallery from './pages/Gallery';
import { FooterContactus } from '@common';

const theme = createTheme({
  palette: {
    primary: { main: '#0f766e', dark: '#115e59', light: '#5eead4' },
    secondary: { main: '#f59e0b', dark: '#b45309', light: '#fcd34d' },
    background: { default: '#f8fafc', paper: '#ffffff' },
    text: { primary: '#102a43', secondary: '#52606d' },
  },
  typography: {
    fontFamily: '"DM Sans", "Segoe UI", sans-serif',
    h1: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800 },
    h2: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800 },
    h3: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800 },
    button: { fontWeight: 700, textTransform: 'none' },
  },
  shape: { borderRadius: 14 },
});
// ------------------./component/AboutUS-----------------------------------------------------------
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="site-shell">
        <Navbar />
        <Routes>

        <Route path="/" element={<WelcomePage />} />
        <Route path="/productspage2" element={<ProductsPage2 />} />
        <Route path="/productspage3" element={<ProductsPage3 />} />

        <Route path="/home" element={<WelcomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/123" element={<SixthPage />} />
        </Routes>
        <FooterContactus />
      {/* <WelcomePage /> */}
      {/* <Contact/> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
