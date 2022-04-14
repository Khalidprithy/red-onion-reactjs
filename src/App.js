import logo from './logo.svg';
import './App.css';
import Header from './components/Pages/Header/Header';
import MainPage from './components/Pages/MainPage/MainPage';
import Footer from './components/Pages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Breakfast from './components/Pages/Breakfast/Breakfast';
import Lunch from './components/Pages/Lunch/Lunch';
import Dinner from './components/Pages/Dinner/Dinner';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainPage></MainPage>
      <Routes>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
