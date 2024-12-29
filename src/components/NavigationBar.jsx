import { Link, NavLink } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="navigation-bar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="browse">Browse Characters</NavLink>
                <NavLink to="comics">Comics</NavLink>
        </nav>
    );
}

export default NavigationBar;