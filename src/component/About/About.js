import './About.css'
import Form from './Form';

const About = () => {
    
   
  
      return (
          <div className="about">
            <div  className="about-text">
              <h1>Meet the artist</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec vulputate hendrerit aliquam. Sed faucibus vitae nisl non hendrerit.
                   Nam mollis feugiat felis, et rutrum lorem aliquet eget. Duis justo felis, 
                   pulvinar sit amet pulvinar ac, hendrerit eu orci. Suspendisse dapibus lectus
                   id hendrerit convallis. Cras sed interdum nunc, suscipit egestas ante. Integer
                    pharetra dignissim nulla, a molestie ligula faucibus interdum.</p>
            </div>
            <div>
                <img className="about-img" src="https://i.postimg.cc/PfDyXJfG/Ellipse-4.png" alt="carro pixel"/>
            </div>
            <div>
               <Form/>
            </div>
          </div>
        
      )
  }
  
  export default About