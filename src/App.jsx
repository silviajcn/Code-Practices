import { useThemeContext } from './03-dark-mode/hooks/useThemeContext';
import AppRouter from './router/AppRouter';

const App = () => {

    const { contextTheme } = useThemeContext();

    return (
        <div id={contextTheme}>
            <AppRouter />
        </div>
    )
}

export default App;