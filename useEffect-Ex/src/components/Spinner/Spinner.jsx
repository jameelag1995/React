import { useEffect, useState } from 'react';
import './Spinner.css';

export default function Spinner() {
    const [showSpinner,setShowSpinner]= useState('');
    useEffect(()=>{
        setTimeout(()=>{
            setShowSpinner('hide');
        },3000)
    },[])
  return (
    <div className='Spinner'>
        <div className={`spinner1 ${showSpinner}`}></div>
        
    </div>
  )
}
