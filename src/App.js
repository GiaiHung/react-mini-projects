import { Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import BirthdayReminder from './projects/birthday-project/BirthdayReminder'
import Menu from './projects/menu-project/Menu';
import Tours from './projects/tours-project/Tours';
import Tabs from './projects/tabs-project/Tabs';
import Slider from './projects/slider-project/Slider';
import Generator from './projects/color-generator-project/Generator';
import Nav from './projects/navbar-project/Nav';
import Stripe from './projects/stripe-project/Stripe';
import Cart from './projects/cart-project/Cart';
import { AppProvider } from './projects/cart-project/components/context';
import Error from './components/Error'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='birthday' element={<BirthdayReminder />} />
      <Route path='tours' element={<Tours />} />
      <Route path='menu' element={<Menu />} />
      <Route path='tabs' element={<Tabs />} />
      <Route path='slider' element={<Slider />} />
      <Route path='generator' element={<Generator />} />
      <Route path='nav' element={<Nav />} />
      <Route path='stripe' element={<Stripe />} />
      <Route path='cart' element={<AppProvider><Cart /></AppProvider>} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
