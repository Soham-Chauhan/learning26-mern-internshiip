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
import { FormDemo2 } from './components/Form/FormDemo2';
import { FormDemo3 } from './components/Form/FormDemo3';
import Dropdown from './components/DropDown';
import { FormDemo4 } from './components/Form/FormDemo4';
import { FormDemo5 } from './components/Form/FormDemo5';
import { PassowordValidation } from './components/Form/PassowordValidation';
import { ApiDemo1 } from './components/Api/ApiDemo1';
import { ApiDemo2 } from './components/Api/ApiDemo2';
import { ApiDemo3 } from './components/Api/ApiDemo3';
import { Omdbapi } from './components/Api/Omdbapi';
import { MoviesDetails } from './components/Api/MoviesDetails';
import { ApiDemo4 } from './components/Api/ApiDemo4';
import { ApiDemo5 } from './components/Api/ApiDemo5';

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
      <Route path='/dropdown' element={<Dropdown/>}></Route>
      <Route path='/functiondemo' element={<FunctionDemo/>}></Route>
      <Route path='usestatedemo1' element={<UseStateDemo1/>}></Route>
      <Route path='usestatedemo2' element={<UseStateDemo2/>}></Route>
      <Route path='usestatedemo3' element={<UseStateDemo3/>}></Route>
      <Route path='formdemo1' element={<FormDemo1/>}></Route>
      <Route path='employee' element={<Employee/>}></Route>
      <Route path='inputdemo1' element={<InputDemo1/>}></Route>
      <Route path='tablecomponent' element={<TableComponent/>}></Route>
      <Route path='formdemo2' element={<FormDemo2/>}></Route>
      <Route path='formdemo3' element={<FormDemo3/>}></Route>
      <Route path='formdemo4' element={<FormDemo4/>}></Route>
      <Route path='formdemo5' element={<FormDemo5/>}></Route>
      <Route path='passwordvalidation' element={<PassowordValidation/>}></Route>
      <Route path='apidemo1' element={<ApiDemo1/>}></Route>
      <Route path='apidemo2' element={<ApiDemo2/>}></Route>
      <Route path='apidemo3' element={<ApiDemo3/>}></Route>
      <Route path='omdbapi' element={<Omdbapi/>}></Route>
      <Route path='/moviesdetails/:id' element={<MoviesDetails/>}></Route>
      <Route path='/apidemo4' element={<ApiDemo4/>}></Route>
      <Route path='/apidemo5' element={<ApiDemo5/>}></Route>
      
     
      
    </Routes>
    
    </div>
  );
}

export default App;
