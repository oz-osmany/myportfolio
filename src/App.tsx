import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Skillss = lazy(() => import('./components/Skillss'));

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export default function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="page-loader">Loading…</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <motion.main
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="wrapper "
                  >
                    <Home />
                  </motion.main>
                }
              />
              <Route
                path="/projects"
                element={
                  <motion.main
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="container"
                  >
                    <Projects />
                  </motion.main>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.main
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="container"
                  >
                    <About />
                  </motion.main>
                }
              />
              <Route
                path="/skills"
                element={
                  <motion.main
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="container"
                  >
                    <Skillss />
                  </motion.main>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.main
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="container"
                  >
                    <Contact />
                  </motion.main>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </>
  );
}
