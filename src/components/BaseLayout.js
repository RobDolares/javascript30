import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';


const BaseLayout = (props) => {

    return(
      <div>
        <NavBar />
          {props.children}
        <Footer />
      </div>
    )
}

export default BaseLayout;
