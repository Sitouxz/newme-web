import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import News from './pages/News';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// ATTENTION!!!
// Uncomment this function and comment class below to disable loading delay animation
// function App() {
//   return (
//     <div className="container mx-auto px-4 bg-[#BCFFCE] ">
//       <Header />
//       <Content />
//       <Date />
//     </div>
//   );
// }

// Loading
const App = () => {
  // const [loading, setLoading] = useState(true);
  // const location = useLocation();

  // useEffect(() => {
  //   fakeRequest().then(() => {
  //     const el = document.querySelector('.loader-container');
  //     if (el) {
  //       el.remove();
  //       setLoading(false);
  //     }
  //   });
  // }, []);

  // const fakeRequest = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 0);
  //   });
  // };

  // if (loading) {
  //   return null;
  // }

  // return (
  //   <AnimatePresence
  //     location={location}
  //     key={location.key}
  //     initial={false}
  //     exitBeforeEnter>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/news" element={<News />} />
  //     </Routes>
  //   </AnimatePresence>
  // );

  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  // console.log('loading true');

  const handleLoading = () => {
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
    // console.log('loading false');
  };

  useEffect(() => {
    window.addEventListener('load', handleLoading);
    return () => window.removeEventListener('load', handleLoading);
  }, []);

  return !isLoading ? (
    <AnimatePresence
      location={location}
      key={location.key}
      initial={false}
      exitBeforeEnter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </AnimatePresence>
  ) : (
    <div className="loader-container">
      <img
        src="./loader.png"
        alt="loading"
        width="100"
        className="animate-bounce"
      />
      <p>Loading...</p>
    </div>
  );

  // return (
  //   <AnimatePresence
  //     location={location}
  //     key={location.key}
  //     initial={false}
  //     exitBeforeEnter>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/news" element={<News />} />
  //     </Routes>
  //   </AnimatePresence>
  // );
};
// End of loading

// Do not comment this
export default App;
// Do not comment this
