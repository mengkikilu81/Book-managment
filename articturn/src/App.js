
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appfooter from './Components/Appfooter';
import AppMyNarBar from './Components/AppMyNavbar';
import Article from './Page/Article';
import Home from './Page/Home';

function App() {
  return (
    <div>
      <AppMyNarBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Article' element={<Article/>}/>
      <Route path='/Read/:id' element={<Read/>}/>
    </Routes>
    <Appfooter/>
    </div>
  );
}

export default App;
