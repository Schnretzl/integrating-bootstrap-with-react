// 2. Enhancing Comic Book Library with Advanced Routing

// Task 1: Implement Navigation Links
//     Add Link and NavLink components from React Router to navigate between the Home, Browse Characters, and Comics pages.
//     Highlight the active link using NavLink.

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