import {Route} from "react-router-dom";
import Navbar from "../components/Navbar";

function AuthLayout({children}) {
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
                render={(matchProps) =>
                    <AuthLayout>
                        <Component {...matchProps}/>
                    </AuthLayout>
                }
            />
        </>
    )
}

export default AppLayoutRoute