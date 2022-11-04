import { Link } from 'react-router-dom';
import { SwitchBtn } from '../03-dark-mode/components';

export const NavBar = () => {
    return (
        <div className="container-navbar">
            <Link to='./'>
                Home
            </Link>

            <SwitchBtn />

        </div>
    )
};