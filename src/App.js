import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch ,Route ,Link} from 'react-router-dom'
import Data from './Components/Data';
import datadetails from './Components/Datadetails'
function App() {
  return (
   <Router>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="/">View data</a></li>
      <li><a href="/datadetails">data deatils</a></li>
     
    </ul>
  </div>
</nav>
  
<div class="container">
  <Route path='/' exact component={Data} />
  <Route path='/details/:id' exact component={datadetails} />
 
</div>

     </Router>
   
  );
}

export default App;
