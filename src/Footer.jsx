import React from 'react';

function Footer() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return ( 
        <div className='footer--btns'>
            <button onClick={() => openInNewTab("https://github.com/dyarmsh")}><i className="fa fa-github"></i></button>
            <button onClick={() => openInNewTab("https://www.instagram.com/dyar.code/")}><i className="fa fa-instagram"></i></button>
            <button onClick={() => openInNewTab("https://open.spotify.com/user/diyaracreek?si=938034b659674c67")}><i className="fa fa-spotify"></i></button>
        </div>
        
     );
}

export default Footer;