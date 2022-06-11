import './Form.css'




import { useState } from "react";


const Formulario = () => {
    
    
    // const [ Purchase, setPurchase ] = useState(false);
    
    
    
    const [Datos, setDatos] = useState({
        name: "",
        text: "",
        email: "",
      });
    
    
     const formEvent = (event) => {
       setDatos({
         ...Datos, 
         [event.target.name]: event.target.value
       })
     }
    
     const submit = (event) => {
      event.preventDefault();
      
     }
    
    
        return (
         <div className='form-div'>
            <h1 className='form-text-init'>Get in touch!</h1>
            <p className='form-text-init'>Wanna collab? Get one of my drawings? Or simply chat about anything?</p>
             
          <form className='form' onSubmit={submit}>  
            <input  className='form-campo' placeholder="Your name" type="text" name="name"  onChange={formEvent} maxLength="10"  value={Datos.nombre}   required></input>
            
            <input className='form-campo' placeholder="Your email" type="email" name="email" onChange={formEvent} maxLength="40" value={Datos.email} required></input>
            <p className='form-text'>Say hi </p>
            <input className='form-campo-text' type="text" name="text" onChange={formEvent}  maxLength="1000" value={Datos.telefono} required></input>
            
            
            
            <button  type="submit" className='form-button' >Send</button>
            
          </form>
    
         
        
        </div>
        )
      }
    
    export default Formulario