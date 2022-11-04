import { useThemeContext } from './hooks/useThemeContext';
import './style.css';

export const DarkMode = () => {

    const { contextTheme } = useThemeContext();

    return (
        <div className='container-title-dark-mode'>

        <h1>{`${contextTheme} Mode`}</h1>
          
        </div>
    )
};