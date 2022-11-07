import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Mythology from './pages/Mythology/Mythology';
import Temples from './pages/Temples/Temples';
import Festivals from './pages/Festivals/Festivals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mythology' element={<Mythology />} />
        <Route path='/temples' element={<Temples />} />
        <Route path='/festivals' element={<Festivals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
