import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from './components/Layout';
import PageNotFound from './pages/PageNotFound';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));
function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router>
          <Routes>
            <Route element={<Layout />} >
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </Router>
      </Suspense>
    </>
  )
}

export default App
