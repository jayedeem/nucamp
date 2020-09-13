import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
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
