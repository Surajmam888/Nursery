




// import React, { useState } from 'react';
// import './Login.css';

// const LoginModal = ({ isOpen, onClose }) => {
//   const [isLoginMode, setLoginMode] = useState(true);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const handleToggleMode = () => {
//     setLoginMode(!isLoginMode);
//   };

//   const handleAuthentication = () => {
//     if (isLoginMode) {
//       // Login logic
//       console.log('Logging in with:', { username, password });
//     } else {
//       // Registration logic
//       console.log('Registering with:', { username, password, email });
//     }

//     // Close the modal after authentication
//     onClose();
//   };

//   return (
//     <div className={`login-modal ${isOpen ? 'open' : ''}`}>
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>{isLoginMode ? 'Login' : 'Register'}</h2>
//         <form>
//           <label>
//             Username:
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//           </label>
//           <label>
//             Password:
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </label>
//           {!isLoginMode && (
//             <label>
//               Email:
//               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </label>
//           )}
//           <button type="button" onClick={handleAuthentication}>
//             {isLoginMode ? 'Login' : 'Register'}
//           </button>
//         </form>
//         <p onClick={handleToggleMode}>
//           {isLoginMode ? 'Don\'t have an account? Register here.' : 'Already have an account? Login here.'}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;



import React, { useState, useEffect } from 'react';
import './Login.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [isLoginMode, setLoginMode] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [token, setToken] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Check if there is a token in local storage
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }

    // Check if there is a logged-in user in local storage
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleToggleMode = () => {
    setLoginMode(!isLoginMode);
    setNotification(null); // Clear any existing notifications when toggling modes
  };

  const handleAuthentication = async () => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed!');
      }

      const data = await response.json();

      // Set token and logged-in user in state
      setToken(data.token);
      setLoggedInUser(data.username);

      // Store token and logged-in user in local storage
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('loggedInUser', data.username);

      // Set success notification
      setNotification('Authentication successful!');
    } catch (error) {
      // Set error notification
      setNotification('Authentication failed!');
    } finally {
      // Close the modal after authentication (success or failure)
      onClose();
    }
  };

  const handleLogout = () => {
    // Clear the token, logged-in user, and any existing notifications
    localStorage.removeItem('authToken');
    localStorage.removeItem('loggedInUser');
    setToken(null);
    setLoggedInUser(null);
    setNotification(null);
  };

  return (
    <div className={`login-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {notification ? (
          <div>
            <p>{notification}</p>
            <button onClick={() => setNotification(null)}>Close</button>
          </div>
        ) : (
          <>
            {loggedInUser ? (
              <div>
                <p>Welcome, {loggedInUser}!</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div>
                <h2>{isLoginMode ? 'Login' : 'Register'}</h2>
                <form>
                  <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </label>
                  <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </label>
                  {!isLoginMode && (
                    <label>
                      Email:
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                  )}
                  <button type="button" onClick={handleAuthentication}>
                    {isLoginMode ? 'Login' : 'Register'}
                  </button>
                </form>
                <p onClick={handleToggleMode}>
                  {isLoginMode ? 'Don\'t have an account? Register here.' : 'Already have an account? Login here.'}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
