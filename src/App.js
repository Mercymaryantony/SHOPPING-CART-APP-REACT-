
import './App.css';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
import Viewsh from './components/Viewsh';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/s' element={<Search/>}/>
        <Route path='/d' element={<Delete/>}/>
        <Route path='/v' element={<View/>}/>
        <Route path='/vs' element={<Viewsh/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
