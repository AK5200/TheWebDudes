import './App.css';
import Heading from './components/Heading';
import Navbar from './components/Navbar'
import Projects from './components/Projects.js'
import Footer from './components/Footer';
import Goal from './components/Goal.js'
import ServicesMenu from './components/ServicesMenu.js'
import ServicesMenuItem from './components/ServicesMenuItem';
import { Fragment } from 'react';
import data from './data/data.json'
import ScrollTop from './components/ScrollTop';
import Border from './components/Border.js'
import Content from './components/Content';
import Hire from './components/Hire'
import {  Routes , Route } from 'react-router-dom';


const App = () => {
  return (
  <Fragment>
  <Navbar />
  <Heading props='Services' id='services' />
  <Content content={data.services} />
  <ServicesMenu />
   <Routes>
    <Route path='/design' element={<ServicesMenuItem  design />} />
  </Routes>

  <Routes>
    <Route path='/development' element={<ServicesMenuItem development />} />
  </Routes>

  <Routes>
    <Route path='/maintainance' element={<ServicesMenuItem  maintainance/>} />
  </Routes> 


  <Border />
  <Heading props='Projects' id='projects'/>
  <Content content={data.project} />
  <Projects projects={data.projects} />
  
  <Border />
  <Heading props='About Us' id='about' />
  <Content content={data.about} />
  <Border />
  <Goal  content={data.goal}/>
  <ScrollTop />
  <Footer />
  
 </Fragment>
  );
}

export default App;
