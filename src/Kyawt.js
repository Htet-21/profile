import React from "react";
import './style.css';
import Navicon from "./Navicon";
import "@fontsource/poppins";
import mail from './mail.png';
import linked from './linked.png';
import phone from './phone.png';
import home from './home.png';
import comma from './comma.png';
import kyawt from './kyawt.png';
import icon from './icon.png';
import linkedin from './linkedin.png';
import telegram from './telegram.png';
import website from './website.png';


const Kyawt = () => {
    return ( 
        <div>
            <div className="pc">
                <div className="background-main">
                <div className="shadow-block">
                <img className="png" src={icon} alt="icon"/>
                 <img id="face" src={kyawt} className="App-logo" alt="logo" />
                 <div className="infos1">
                 <h2>Kyawt Phoo San</h2>
                 <p id="pos1">Junior Accountant</p>
                 <img id="logo3" src={mail} alt="mail" />
                 <p><br /> kyawt.phoosan@dinger.asia</p>
                 <img id="logo1" src={linked} alt="linked" />
                 <p>Linkedin | <a href="https://www.linkedin.com/in/kyawt-phoo-san/" target="_blank">Kyawt Phoo San &nbsp;&nbsp;<i class="fa-solid fa-link"></i></a></p>
                 <img id="logo1" src={phone} alt="phone" />
                 <p>(+95) 9767222447</p>
                 <img id="logo1" src={home} alt="home" />
                 <p>No [647], Corner of 21st Street, 6th <br /> floor, China Town Hotel, Latha <br /> Township, Yangon.</p>
                 </div>
                 <div className="quote">
                  <img src={comma} alt="comma" />
                  <p>To achieve something you never had,<br /> you have to do something you never did.</p>   <br /> 
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
                 <h2>Kyawt Phoo San</h2>
                 <p id="pos">Junior Accountant</p>
                 <img id="logo" src={mail} alt="mail" />
                 <p>kyawt.phoosan@dinger.asia</p>
                 <img id="logo" src={linked} alt="linked" />
                 <p>Linkedin | <a href="https://www.linkedin.com/in/kyawt-phoo-san/" target="_blank"> Kyawt Phoo San &nbsp;&nbsp;<i class="fa-solid fa-link"></i></a></p>
                 <img id="logo" src={phone} alt="phone" />
                 <p>(+95) 9767222447</p>
                 <img id="logo" src={home} alt="home" />
                 <p>No [647], Corner of 21st Street, 6th <br /> floor, China Town Hotel, Latha <br /> Township, Yangon.</p>
                 <img id="logo" src={comma} alt="comma" />
                 <p id="quote1"><br /> To achieve something you never <br /> had, you have to do something   <br />   you never did.</p> 
                 </div>
                <div className="inner-block">
                 <img id="pf" src={kyawt} className="App-logo" alt="logo" />
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Kyawt;