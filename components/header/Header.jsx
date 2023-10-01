import React from 'react';
import './Header.css';

class Header extends React.Component {


render (){
    return(
<header className="header">
        <div className="header-content">
          <h1 className="header-title">UNC Charlotte</h1>
          <p className="header-subtitle">SSDI Project 4</p>
          {/* Add any additional content, images, or graphics as needed */}
        </div>
</header>
    );
}
}
export default Header;