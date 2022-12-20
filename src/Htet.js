import React from "react";
import htet from './htet.png';
import './style.css';
import Navicon from "./Navicon";
import "@fontsource/poppins";
import mail from './mail.png';
import linked from './linked.png';
import phone from './phone.png';
import home from './home.png';
import comma from './comma.png';
import kohtet from './kohtet.png';
import icon from './icon.png';
import linkedin from './linkedin.png';
import telegram from './telegram.png';
import website from './website.png';


const Htet = () => {
    return ( 
        <div>
            <div className="pc">
                <div className="background-main">
                <div className="shadow-block">
                <img className="png" src={icon} alt="icon"/>
                 <img id="face" src={kohtet} className="App-logo" alt="logo" />
                 <div className="infos1">
                  <h2>Mr. Htet Arkar Kyaw</h2>
                  <p id="pos1">FOUNDER & CEO</p>
                  <img id="logo3" src={mail} alt="mail" />
                  <p><br />hak@dinger.asia</p>
                  <img id="logo1" src={linked} alt="linked" />
                  <p id="linkedin">Linkedin | <a href="https://www.linkedin.com/in/htet-arkar-kyaw/" target="_blank"> Htet Arkar Kyaw &nbsp;&nbsp;<i class="fa-solid fa-link"></i></a></p>
                  <img id="logo1" src={phone} alt="phone" />
                  <p>(+95) 95067051</p>
                  <img id="logo1" src={home} alt="home" />
                  <p>No [647], Corner of 21st Street, 6th <br /> floor, China Town Hotel, Latha <br /> Township, Yangon.</p>
                  </div>
                  <div className="quote">
                  <img src={comma} alt="comma" />
                  <p>In the startup world, 'not working is normal' <br /> - Paul Graham</p>   <br /> 
                  </div>
                 </div>
                 <div className="row">
                 <div className="column">
                 <a href="https://www.linkedin.com/company/dinger/mycompany/" target="_blank"><img id="social" src={linkedin} alt="linked" /></a>
                 <a href="https://t.me/dingerasia" target="_blank"><img id="social" src={telegram} alt="linked" /></a>
                 <a href="https://dinger.asia/" target="_blank"><img id="social" src={website} alt="linked" /></a>
                 </div>
                </div>
                </div>
            </div>
            <div className="hider">
            <div className="background">
            <Navicon />
            <div className="infos">
                 <h2>Mr. Htet Arkar Kyaw</h2>
                 <p id="pos">FOUNDER & CEO</p>
                 <img id="logo" src={mail} alt="mail" />
                 <p>hak@dinger.asia</p>
                 <img id="logo" src={linked} alt="linked" />
                 <p id="linkedin">Linkedin | <a href="https://www.linkedin.com/in/htet-arkar-kyaw/" target="_blank"> Htet Arkar Kyaw &nbsp;&nbsp;<i class="fa-solid fa-link"></i></a></p>
                 <img id="logo" src={phone} alt="phone" />
                 <p>(+95) 95067051</p>
                 <img id="logo" src={home} alt="home" />
                 <p>No [647], Corner of 21st Street, 6th <br /> floor, China Town Hotel, Latha <br /> Township, Yangon.</p>
                 <img id="logo" src={comma} alt="comma" />
                 <p id="quote1"><br /> In the startup world, 'not working is <br /> normal' <br /> - Paul Graham</p>      
                 </div>
                <div className="inner-block">
                 <img id="pf" src={htet} className="App-logo" alt="logo" />
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Htet;