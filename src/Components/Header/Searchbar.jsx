// import React from 'react';
// import InputBase from '@mui/material/InputBase';
// import styled from '@emotion/styled';
// import SearchIcon from '@mui/icons-material/Search'; // Importing the search icon from Material-UI
// import { alpha } from '@mui/material';

// export default function Searchbar() {
//   const SearchContainer = styled('div')(({ theme }) => ({
//     position: 'relative',
//     width: 300,
   
//     display: 'flex',
//     alignItems: 'center',
//   }));


// const StyledInputBase = styled(InputBase)(({ theme }) => ({

//     width: '100%',
//     padding: '2px',
//     border: '0.1rem solid lightgray',
//     borderTopLeftRadius: '5px',
//     borderBottomLeftRadius: '5px',
//     borderTopRightRadius: '5px',
//     borderBottomRightRadius: '5px',
//     boxSizing: 'border-box',

//     textAlign: 'center', 
//     boxSizing: 'border-box',
//     transition: 'border-color 0.3s ease', // Adding transition for smooth hover effect
//     "&:hover": {
//             backgroundColor: "lightgray"
//           },
//   }));
  



//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     position: 'absolute',
//     // left: "100%",
//     right:1,
//     color: 'white',
//     top: '50%',
//     // padding:'3px',
//     cursor:'pointer',
//     display:'flex',
//     width:'4rem',
//     alignItems:'center',
//     justifyContent:'center',
//     display:'flex',
//     height:'37px',
//     borderTopRightRadius: '5px',
//     borderBottomRightRadius: '5px',
    
//     // border:'1px solid gray',
//     transform: 'translateY(-50%)',
//     background:"#FF6B6B",
//     // padding: theme.spacing(0, 2),
  
//   }));

//   return (
//     <SearchContainer>
//       <StyledInputBase
//         placeholder="Search…"
//         inputProps={{ 'aria-label': 'search' }}
//       />
//       <SearchIconWrapper>
//         <SearchIcon />
//       </SearchIconWrapper>
//     </SearchContainer>
//   );
// }


import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="App">
      <div className={`search-bar ${isFocused ? 'active' : ''}`}>
        <input
          type="text"
          placeholder="Search..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default App;
