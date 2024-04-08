
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BlogForm from './components/BlogForm';
import ViewDetails from './components/ViewDetails';




function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
     <Route path='/b' element={<ViewDetails/>}/>
     <Route path='/add' element={<BlogForm/>}/>

     </Routes>
    </div>
  );
}

export default App;
