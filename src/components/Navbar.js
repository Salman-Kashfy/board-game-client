import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className={'nav'}>
            <div className={'container navbar'}>
                <div className={'nav-brand'}><span>Salman Kashfy</span></div>
                <div>
                    <NavLink to={'/'} className={'nav-link'} activeClassName={'nav-active'}>
                        Game
                    </NavLink>
                    <NavLink to={'/leadership-board'} className={'nav-link'} activeClassName={'nav-active'}>
                        Leadership Board
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Navbar