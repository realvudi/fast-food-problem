import Main from './pages/Main';
import Navbar from './pages/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Basket from './pages/Basket';
import Contacts from './pages/Contacts';
import Total from './pages/Total';
import { useState } from "react"


function App() {
  const [menu, setMenu] = useState({
    chickenBurger: 0,
    cheeseBurger: 0,
    fries: 0,
    chickenBasket: 0,
    cola: 0,
    pizza: 0,
})


  function handleAdd(name) {
    const value = menu[name] + 1;
    if (value > 5)
      return;
    setMenu(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  function handleRemove(name) {
    const value = menu[name] - 1;
    if (value < 0)
      return;
    setMenu(prevState => ({
        ...prevState,
        [name]: value
    }));
  };
  
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/menu' element={<Menu menu={menu} handleAdd={handleAdd} handleRemove={handleRemove} />} />
        <Route path='/basket' element={<Basket menu={menu} handleAdd={handleAdd} handleRemove={handleRemove} />} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/total' element={<Total menu={menu}/>} />
      </Routes>
    </Router>
    

  );
}

export default App;
