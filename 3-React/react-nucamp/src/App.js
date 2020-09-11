import React, { useState } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import DirectoryComponent from './components/DirectoryComponent';
import { CAMPSITES } from './shared/campsites';

function App() {
  const [campsite, setcampsite] = useState(CAMPSITES);
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">NuCamp</NavbarBrand>
        </div>
      </Navbar>
      <DirectoryComponent campsites={campsite} />
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       campsites: CAMPSITES,
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">NuCamp</NavbarBrand>
//           </div>
//         </Navbar>
//         <DirectoryComponent campsites={this.state.campsites} />
//       </div>
//     );
//   }
// }

export default App;
