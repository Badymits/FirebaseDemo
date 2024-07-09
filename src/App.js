import './App.css';
//import Modal from './components/Modal';
//import ReminderList from './components/ReminderList';
import { BrowserRouter, Route, NavLink, Routes,Navigate , Link, useNavigate} from 'react-router-dom'

import React, {useState} from 'react';

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Article from './pages/Article'
import FormArticle from './pages/FormArticle'
import Login from './pages/Login';


function App() {

  const [ user, setUser ] = useState(false)

  const logoutUser = () => {
    setUser(false)
  }

  return (
    <div className={user ? 'App' : 'max-w-full'}>
        <nav className={ user ? ' pt-4' : 'hidden'}>
          <h1 className='text-3xl'>My Articles</h1>
          
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/new">New Article</NavLink>
          <NavLink to="/login" onClick={() => logoutUser()}>Logout</NavLink>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home  user={user}/>}/>
          <Route path="/about" element={<About  user={user}/> }/>
          <Route path="/contact" element={<Contact  user={user}/> }/>
          <Route path="/articles/:urlId" element={<Article user={user}/> }/>
          <Route path="/new" element={<FormArticle user={user}/> }/>
          <Route path="/login" element={<Login user={user}/> }/>
          <Route path="/*" element={<Navigate to="/"/> }/>
        </Routes>

    </div>
  );
}

export default App;
