import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import './App.css';
import Header from './component/Header';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {

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
