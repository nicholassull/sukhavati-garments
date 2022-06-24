import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/Home.route';
import Navigation from './components/navigation/Navigation';
import SignIn from './components/routes/sign-in/SignIn';

const Shop = () => {
  return <h1>I am the shop page</h1>;
}

const App = () => {
  return (
    <Routes>
      {/* Navigation contains all other routes so that it can always be displayed regardless of what the user is viewing. */}
      <Route path='/' element={<Navigation />}>
        {/* The index attribute indicates that this component is considered the base outlet component & will be rendered automatically */}
        <Route index element={<Home />} />
        <Route path='shop' element= {<Shop />} />
        <Route path='sign-in' element= {<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
