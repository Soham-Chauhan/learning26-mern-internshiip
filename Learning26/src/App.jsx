import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponent } from './components/HeaderComponent';
import { ContentComponent } from './components/ContentComponent';
import { MapDemo1 } from './components/MapDemo1';
import {MapDemo2} from './components/MapDemo2';
import {MapDemo3} from './components/MapDemo3';
import {MapDemo4} from './components/MapDemo4';
import { MapDemo5 } from './components/MapDemo5';
import { MapDemo6 } from './components/MapDemo6';
import { Navbar } from './components/Navbar';
import { NetflixHome } from './components/NetflixHome';
import { Route, Routes } from 'react-router-dom';
import { NetflixShow } from './components/NetflixShow';
import { About } from './components/about';
import { HomeComponent } from './components/HomeComponent';
import { ErrorNotFound } from './components/ErrorNotFound';
import { Watch } from './components/Watch';
import { NetflixMovies } from './components/NetflixMovies';
import { FunctionDemo } from './components/FunctionDemo';
import { UseStateDemo1 } from './components/UseStateDemo1';
import { UseStateDemo2 } from './components/UseStateDemo2';
import { UseStateDemo3 } from './components/UseStateDemo3';
import { Employee } from './components/Employee';
import { FormDemo1 } from './components/Form/FormDemo1';
import { SubEmployeeList } from './components/SubEmployeeList';
import { InputDemo1 } from './components/Input/InputDemo1';
import { TableComponent } from './components/TableComponent';
// import './App.css'




function App() {

  
  return (
    <div>
     <Navbar></Navbar>
   
    <Routes>
      <Route path='/netflixhome' element={<NetflixHome/>}></Route>
      <Route path='/netflixshow' element={<NetflixShow/>}></Route>
      <Route path='/netflixmovies' element={<NetflixMovies/>}></Route>
      <Route path='/' element={<HomeComponent/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/watch/:name' element={<Watch/>}></Route>
      <Route path='/*' element={<ErrorNotFound/>}></Route>
      <Route path='/functiondemo' element={<FunctionDemo/>}></Route>
      <Route path='usestatedemo1' element={<UseStateDemo1/>}></Route>
      <Route path='usestatedemo2' element={<UseStateDemo2/>}></Route>
      <Route path='usestatedemo3' element={<UseStateDemo3/>}></Route>
      <Route path='formdemo1' element={<FormDemo1/>}></Route>
      <Route path='employee' element={<Employee/>}></Route>
      <Route path='inputdemo1' element={<InputDemo1/>}></Route>
      <Route path='tablecomponent' element={<TableComponent/>}></Route>
    
      
    </Routes>
    
    </div>
  );
}

export default App;
