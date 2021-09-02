import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
       <div>

           <BrowserRouter>
               <Switch>
                   <Route path="/" exact component={Home} />
                   <Route path="/a-propos" exact component={About} />
                   <Route component={NotFound}></Route>
               </Switch>
           </BrowserRouter>
       </div>
    );
};

export default App;
