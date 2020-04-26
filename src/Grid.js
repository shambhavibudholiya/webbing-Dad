import React from 'react';
import './Grid.css';
import {Animated} from "react-animated-css";


const Grid = () =>{
    return(
<div className="body">
<Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" animationInDuration={3000} animationOutDuration={3000} isVisible={true}>
    <h1 className="center ">Youtube Videos</h1>
    </Animated>  

	<div class="container">	

  <iframe src="https://www.youtube.com/embed/9D8c1BbhsW0"></iframe>


             <iframe src="https://www.youtube.com/embed/s_1PSGDFcrs"></iframe>
  

      <iframe src="https://www.youtube.com/embed/EyaEgtJ2Wzg">
            </iframe>	 

            <iframe src="https://www.youtube.com/embed/cfgtQ4OAfmQ">
            </iframe>	 


       <iframe src="https://www.youtube.com/embed/VLoNgULEWbA">
            </iframe>	
           
        <iframe src="https://www.youtube.com/embed/gMI-Ky9qLRQ">
      </iframe>	
        
        <iframe src="https://www.youtube.com/embed/JU3wbSOKUHQ">
            </iframe>	

       <iframe src="https://www.youtube.com/embed/3njaPoOkAoQ">
        </iframe>	    
        
        <iframe src="https://www.youtube.com/embed/i4IgICx3W1U">
        </iframe>	    
            
        <iframe src="https://www.youtube.com/embed/6HJIqHc0_kk">
        </iframe>	    
            
        <iframe src="https://www.youtube.com/embed/DnVkxKj3sJE">
        </iframe>	 

        <iframe src="https://www.youtube.com/embed/Z0CF6msnJpI">
        </iframe>	

          <iframe src="https://www.youtube.com/embed/MOGas3DU0_k">
        </iframe>	        

        <iframe src="https://www.youtube.com/embed/cGQxeCffmgk">
        </iframe>	
	
    </div>
    
    </div>
    );
}

export default Grid;