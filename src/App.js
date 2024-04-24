import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Recipelist from './pages/Recipelist';
import Singleview from './pages/Singleview';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>  
        <Route path='/' element={<Recipelist></Recipelist>}></Route>   
        <Route path='single-view/:id' element={<Singleview></Singleview>}></Route>   

      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
