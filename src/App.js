import {BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css'
import AppLayoutRoute from "./layouts/AppLayout";
import Main from "./views/Main";
import Leadership from "./views/Leadership";

function App() {
    return (
        <Router>
            <Switch>
                <AppLayoutRoute exact isAuth={false} path={'/'} component={Main}/>
                <AppLayoutRoute exact isAuth={false} path={'/leadership-board'} component={Leadership}/>
            </Switch>
        </Router>
    );
}

export default App;