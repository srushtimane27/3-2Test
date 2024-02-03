import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register-form' element={<RegisterForm/>}/>
        <Route path='/login-form' element={<LoginForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
