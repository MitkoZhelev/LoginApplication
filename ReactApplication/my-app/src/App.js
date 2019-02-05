import React, {Component} from 'react';
//import {BrowserRouter} from 'react-router-dom';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import {Route} from 'react-router-dom';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';




//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

//export default App;


// const App = (<div>
  
//   <Route path="/demo/all" component={All}/>
// </div>);
 
//  ReactDOM.render((
//   <BrowserRouter>
//   <App />
//   </BrowserRouter>
//   ), document.getElementById('root'))
//   ReactDOM.render(<App/>, document.getElementById('app'))

// export default App;

// function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="localhost:8080/demo/all">All</Link>
//           </li>
//         </ul>
//         <hr />

//         <Route exact path="/demo/all" component={All} />
//       </div>
//     </Router>
//   );
// }

// function All() {
//   return (
//     <div>
//       <h2>{All}</h2>
//     </div>
//   );
// }

// export default BasicExample;

// class App extends Component {
//   constructor (props)
//   {
//     super(props);
//     this.state = {
//       persons : []
//     };
//   }
//   ComponentDidMount() {
//     let url = "localhost:8080/demo/all"
//     fetch(url)
//     .then(resp => resp.json())
//     .then(data =>{
//       let persons = data.map((persons,id) =>
//       {
//         return (
//           <div key = {id}>
//           <h3>{persons.name}</h3>
//           <h3>{persons.email}</h3>
//           </div>
//         )
//       })
//       this.setState({persons: persons});
//     })
    
//   }
//   render () {
//     return (
//       <div className="App">
//       {this.state.persons}
//       </div>
//     );
//   }
// }
// export default App;


// class App extends Component {
    
//   constructor() {
//       super()
//       this.state = {}
//   }
  
//   componentDidMount() {
//       posts :[];
//       fetch("http://localhost:8080/demo/all")
//           .then(response => response.json())
//           .then(data => console.log(data)
//           .then(data => ))
//   }
  
//   render() {
//       return (
//           <div>
//               Code goes here
              
//           </div>
//       )
//   }
// }
//export default App

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        characters: []
        };
    }
    
    componentDidMount() {
        let url = "http://localhost:8080/demo/all"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let characters = data.map((character,index)=>{
                    return (
                        <div>
                        <div class = "id">
                            <h3>Id number: {character.id}</h3>
                            </div>
                            <div>
                            <h3>Name of People: {character.name}</h3>
                            </div>
                            <div>
                            <h3>Emails: {character.email}</h3>
                            </div>
                            </div>
                    )
                })
                this.setState({
                    characters: characters
                })
            })
    }
    
    render() {
        return(
            <div className = "App">
            {this.state.characters}
            </div>
        );
    }

}



export default App;


