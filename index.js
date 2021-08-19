import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';



const App = ()=> {



  return (  
     <div className="wrapper">
        <div className="container">
    
     
        <header>
            <h2> Learn To Code By Watching Others</h2>
            <p>See how experienced developers solve 
              problems in real-time. Watching 
              scripted tutorials is great, 
               but understanding how developers
              think is invaluable.</p>
           
        </header>
        <main>
            <div className="blue">
                <p><strong>Try it for 7 days</strong> 
                then $20/mo. thereafter</p>
            </div>
               
            <div className="white">
                <p><input className="different" type="text" placeholder="Johnathan |"/></p>
                <p><input type="text" placeholder="Last Name"/></p>
                <p><input type="text" placeholder="Email-address"/></p>
                <p><input type="text" placeholder="Password"/></p>
                <button className="green"><h3>CLAIM YOUR FREE TRIAL</h3></button>
                <h6> By click this button you're agreeing to
                our <strong>Terms and Services </strong></h6> 
            </div>
        </main>
      
      
       </div>
     </div>
     
  )
};
export default App

ReactDOM.render(<App />, document.querySelector("#root"));