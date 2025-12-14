import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './page/HomePage.tsx';
import UserList from './page/UserList.tsx';
import UserDetail from './page/UserDetail.tsx';
 
function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
        <nav className="navbar">
          <div className="nav-container">
            <Link to='/' className="nav-logo">
              Mywebsite
            </Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to='/' className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/user' className="nav-link">
                  Userlist
                </Link>
              </li>
            </ul>
          </div>
        </nav>
 
 
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/user' element={<UserList/>}/>
          <Route path='/user/:id' element={<UserDetail/>}/>
        </Routes>
 
      </BrowserRouter>
 
    </div>
  )
}
 
export default App