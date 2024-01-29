import { Route, Routes } from "react-router"
import { Home } from "./pages/index"
import NavBar from './components/navbar';
import Footer from './components/footer';
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
    </>
  );
    
    
}

export default App
