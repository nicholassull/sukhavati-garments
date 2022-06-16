import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/Home.route';
import Navigation from './components/navigation/Navigation';


const Shop = () => {
  return <h1>I am the shop page</h1>;
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        {/* The index attribute indicates that this component is considered the base outlet component & will be rendered automatically */}
        <Route index element={<Home />} />
        <Route path='shop' element= {<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
