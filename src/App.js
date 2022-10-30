import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const link = "https://www.google.com";
  return (
    <Router> 
    <div className="App">
      <Navbar /> 
      {/* the navbar is going to be constant for all pages */}
      {/* the above is self-closing and name should be the
      same as the file */}
      <div className="content">
        <Switch>
          {/* all of our route goes inside this switch
          component */}
          {/* then a route for each page we have */}
          <Route exact path="/">  
          {/* the path is anything in the url after the name
          of the website. The home page has / only */}
          <Home />
          </Route>
          <Route path="/create">  
          <Create />
          </Route>
          <Route path="/blogs/:id">
              {/* that represents any id of the blog */}

          <BlogDetails />
          </Route>
          {/* a catch all routes that do not exist above */}
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        {/* <h1>{ title }</h1>
        <p> { 10 }</p>
        <p>{ "hello ninjas"}</p>
        <p>{ [1, 2, 3, 4, 5] }</p> 
        {/* the above outputs just a string of these numbers */}

        {/* use dynamic values as attributes */}
        {/* <a href={ link }> Google site</a> */}

      </div>
      {/* <header className="App-header">
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
      </header> */}
    </div>
    </Router>
  );
}

export default App;
