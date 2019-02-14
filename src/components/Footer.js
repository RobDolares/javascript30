import React from 'react';

const Footer = () => {

const footerStyle = {
  position: 'fixed',
  bottom: '0px',
  backgroundColor: 'black',
  width: '100%',
  height : '40px'
}

const ulStyle = {
  margin: '0px'
}

    return (
      <footer style={footerStyle}>
        <nav className="navbar navbar-inverse">
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
