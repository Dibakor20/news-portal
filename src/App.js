import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import News from './Component/News/News';

function App() {
  return (
    <>
     <Router>
       <Switch>
         <Route path="/news">
           <News/>
         </Route>
         
         <Route path="/">
           <News/>
         </Route>
       </Switch>
     </Router>
    </>
  );
}

export default App;
