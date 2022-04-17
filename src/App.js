import {BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css'
import AppLayoutRoute from "./layouts/AppLayout";
import Main from "./views/Main";

function App() {
    return (
        <Router>
            <Switch>
                <AppLayoutRoute path={'/'} component={Main}/>
            </Switch>
        </Router>
    );
}

export default App;