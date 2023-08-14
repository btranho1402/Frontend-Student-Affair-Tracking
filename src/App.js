import logo from './logo.svg'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Student  from './Student'
import CreateStudent from './CreateStudent'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/'  element = {<Student/>}></Route>
          <Route path = '/createaccount'  element = {<CreateStudent/>}></Route>
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
