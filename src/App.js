
import './App.css';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/s' element={<Search/>}/>
        <Route path='/d' element={<Delete/>}/>
        <Route path='/v' element={<View/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
