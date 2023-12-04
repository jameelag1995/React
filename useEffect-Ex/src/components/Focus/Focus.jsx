import { useEffect, useRef } from "react"
import './Focus.css'
export default function Focus() {
    const inputfield = useRef();
    useEffect(()=>{
        inputfield.current.focus();
    },[]);

  return (
    <div className="Focus">
        <form >
            <input type="text" ref={inputfield} />
        </form>
    </div>
  )
}
