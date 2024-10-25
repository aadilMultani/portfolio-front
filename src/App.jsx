import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useState, useEffect } from 'react';

import './App.css';
import Header from './component/Header';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import LoadingScreen from './component/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2600);
  // }, []);

  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        <Header class="header-top" />
        <Routes>
          <Route path='/about' element={<About class="section-show" />}></Route>
          <Route path='/resume' element={<Resume class="section-show" />}></Route>
          <Route path='/contact' element={<Contact class="section-show" />}></Route>
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  )
}

export default App;
