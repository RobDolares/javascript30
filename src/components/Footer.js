import React from 'react';

const Footer = () => {

const footerStyle = {
  footer :{
    position: 'fixed',
    bottom: '0px',
    backgroundColor: 'black',
    width: '100%',
    height : '40px'
  },
  nav:{
    marginTop: '0.8em'
  }
}

const ulStyle = {
  margin: '0px'
}

    return (
      <footer style={footerStyle.footer}>
        <nav style={footerStyle.nav} className="navbar">
          <ul style= {ulStyle} className="nav navbar-nav">
            <li>
              <a  href="https://github.com/RobDolares" rel="noopener noreferrer" target="_blank" ><span>&copy; 2019 Robert Howington</span></a>
            </li>
          </ul>
        </nav>
      </footer>
    )
  }

export default Footer;
