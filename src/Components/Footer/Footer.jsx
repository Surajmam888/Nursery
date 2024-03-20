




// import React from 'react';
// import './Footer.css';


// function Footer() {
//   return (
//     <div className="Ap">
//       {/* Your main content goes here */}

//       <footer>
//         <div className="footer-container">
//           <div className="footer-content">
//             <img src={logo} alt="Logo" className="logo" />
//             <h2>Contact Us</h2>
//             <p>Email: info@example.com</p>
//             <p>Phone: +1 (123) 456-7890</p>
//           </div>

//           <div className="footer-content">
//             <h2>Quick Links</h2>
//             <ul>
//               <li><a href="#">Home</a></li>
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Services</a></li>
//               <li><a href="#">Contact</a></li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Footer;


import React from 'react';
import './Footer.css';
import logo from "../images/LOGO.jpg"
import logo2 from '../images/Imgf2ooter.png'
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

function App() {
  return (
    <div className="Ap">
      {/* Your main content goes here */}

      <footer>
        <Divider/>
        <div className="footer-container">
          <div className="footer-content">
            <Link   to='/'>
            <img src={logo} alt="Logo" className="logo" />
            </Link>
            <h2>Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>

          <div className="footer-content">
            <img src={logo2} alt="Image 2" className="image2" />
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

