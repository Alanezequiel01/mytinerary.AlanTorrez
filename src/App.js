import React, {useEffect}from 'react'
import './App.css';
import NavBar from './components/nav.js'
import Footer from './components/footer'
import Cities from './pages/cities'
import Home from './pages/home'
import Details from './pages/details';
import SignUp from './components/login/signUp'
import SignIn from './components/login/signIn'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import {connect} from 'react-redux';
import userAction from './redux/actions/userAction'

const App = (props) => {

  useEffect(() => {

    if(localStorage.getItem('token')!== null) {
      const token = localStorage.getItem('token')
      props.verifyToken(token)
    }
  },[])
  
  return (
      <BrowserRouter>
    <div className="App">
      <NavBar/>

      <Routes>
      <Route path="/cities" element={<Cities/>}/> 
      <Route path="/home" element={<Home/>}/> 
      <Route path="/details/:id" element={<Details/>}/> 
      {!props.user &&<Route path="/signUp" element={<SignUp/>}/>} 
      {!props.user &&<Route path="/signIn" element={<SignIn/>}/>} 
      <Route path="*" element={<Home/>}/> 
      </Routes>

      <Footer/>
    </div>
      </BrowserRouter>
  );
}

const mapStateToProps = (state) =>{
  
  return{
    user: state.userReducer.user 
  }
}

const mapDispatchToProps = {
	verifyToken: userAction.verifyToken,

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
