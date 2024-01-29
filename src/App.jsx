import { Route, Routes } from "react-router"
import { Home } from "./pages/index"
import NavBar from './components/navbar';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
    
    
}

export default App
