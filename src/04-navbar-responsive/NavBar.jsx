import { useState } from 'react';
import {
    FaBars,
    FaTimes
} from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import { IconContext } from 'react-icons';
import './styles.css';
import { Link } from 'react-router-dom';
import { SwitchBtn } from '../03-dark-mode/components';
import { practices } from '../data/practices';

export const NavBar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <div className='container-navbar-responsive'>
            <div className='wrapper'>
                <IconContext.Provider value = {{style: {fontSize: "2em"}}}>

                <div className='link-home'>
                    <Link to="/">
                        <FormattedMessage
                            id="nav.item"
                            defaultMessage="Home" 
                        />
                    </Link>
                </div>
                
                <div className='link-home btn-switch-navbar'>
                    <SwitchBtn />
                </div>
                    
                <div className='mobile-icon' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <FaTimes /> : <FaBars />}
                </div>

                {   showMobileMenu
                    &&
                    <nav className='menu-navbar'>
                        <ul className='list-navbar'>
                            {practices.map(practice => (
                                <Link to={practice.url} key={practice.id} className="link-menu-navbar">
                                    <li className='menu-item' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                        {practice.title}
                                    </li>
                                </Link>
                            ))}


                            <div className='link-home btn-navbar-switch'>
                                <SwitchBtn />
                            </div>
                        </ul>
                    </nav>
                }
                
                </IconContext.Provider>
            </div>
        </div>
    )
};