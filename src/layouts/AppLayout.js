import {Route} from "react-router-dom";
import Navbar from "../components/Navbar";

function AppLayout({children}) {
    return (
        <div>
            <Navbar/>
            <div>{children}</div>
        </div>
    )
}

const AppLayoutRoute = ({component: Component, ...rest}) => {
    return(
        <>
            <Route
                {...rest}
                render={(matchProps) => (
                    <AppLayout>
                        <Component {...matchProps}/>
                    </AppLayout>
                )}
            />
        </>
    )
}

export default AppLayoutRoute