import { Route, Routes } from "react-router"
import { AuthLayout, Home, Login, Signup } from "./pages/index"
import NavBar from './components/navbar';
import Footer from './components/footer';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />


        <Route element={<AuthLayout />} >
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );


}

export default App
