import {Route} from "react-router-dom";

function AuthLayout({children}) {
    return (
        <div>{children}</div>
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