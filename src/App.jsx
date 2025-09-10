import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import MyWorks from "./components/MyWorks/MyWorks";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="app-root"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.15 }}
      >
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Intro />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <AboutMe />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <MyWorks />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <ContactMe />
        </motion.div>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
