import React from "react";
import NavLinks from "./NavLinks";



const NavigationWrapper = (props) => {
    const {logo} = props
    return (
        <div className='nav-wrapper'>
        <div className='nav-div'>
          <h1>
            <img id='logo-image' src={logo} />
            <span className='logo-span'>Legilimens</span>
            <span className='logo-span2'>- Online -</span>
            <span className='logo-span'>Library</span>
          </h1>
          <h2 className='nav-catchphrase'>Check Out an Adventure!</h2>
          <div className='nav-link-text'>
            <NavLinks />
          </div>
        </div>
      </div> 
    );
}

export default NavigationWrapper