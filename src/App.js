import logo from './logo.svg';
import './App.css';
import Skills from './components/Skills';
import AcademicDetails from './components/AcademicDetails';
import Details from './components/Details';
import { useState } from 'react';
import './btnStyle.css';

function App() {
  const[show,setShow]=useState('details');
  return (
    <>
    <div className='navstyle'>
      <button 
      className={show === 'details' ? 'active': '' }
      onClick={()=>setShow('details')}>Details</button>
      <button 
       className={show === 'academicdetails' ? 'active': '' }
      onClick={()=>setShow('academicdetails')}>AcademicDetails</button>
      <button 
       className={show === 'skills' ? 'active': '' }
      onClick={()=>setShow('skills')}>Skills</button>
      {/* <button 
       className={show === 'projects' ? 'active': '' }
      onClick={()=>setShow('projects')}>Projects</button> */}
    </div>

    <div className='components'>
      {show === 'details' ? <Details />: '' }
      {show === 'academicdetails' ? <AcademicDetails />: '' }
      {show === 'skills' ? <Skills /> : ''} 
      {/* {show === 'projects' ? <Projects /> : ''}      */}
    </div>
    </>
  );
}

export default App;
