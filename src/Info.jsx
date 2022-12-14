import React from 'react';
import myPhoto from './assets/me.jpg'

function Info() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return ( 
        <div className='info--container'>
            
            <img className="info--photo" src={myPhoto}></img>
            <h1 className='info--name'>Diya Ramesh</h1>
            <p className='info--subheading'>Product Designer + Software Engineer</p>
            <div className='info--btns'>
                <button class="email-btn" onClick={() => openInNewTab("https://diyadzns.framer.website/")}><i class="fa fa-heart"></i>My Site</button>
                <button class="linkedin-btn" onClick={() => openInNewTab("https://www.linkedin.com/in/diya-ramesh-b219821b4/")}><i class="fa fa-linkedin"></i>Linkedin</button>      
            </div>
            
        </div>
     );
}

export default Info;