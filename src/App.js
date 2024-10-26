import './App.css';
import Home from './pages/Home';
import Carrer from './pages/Carrer';
import Student from './pages/Student';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import NoPage from './pages/NoPage';
import Signup from "./components/Home/Signup";
import Signin from "./components/Home/Login";
import ProctedRoutes from './ProctedRoutes';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="signin" element={<Signin />} />
        <Route path='/' element={<Home />} />
        <Route path="signup" element={<Signup />} /> 
        <Route path="/home" element={<Home />} />
        {/* <Route element={<ProctedRoutes/>}> */}
        <Route path="career" element={<Carrer />} />
        {/* </Route> */}
        <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
