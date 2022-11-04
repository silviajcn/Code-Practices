import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NavBar, Footer } from '../components';
import { DragDropApp } from '../01-drag-and-drop';
import { RenderColor } from '../02-render-color';
import { DarkMode } from '../03-dark-mode/DarkMode';

const AppRouter = () => {
    return (
        <>
            <NavBar />
            
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/drag-drop' element={<DragDropApp />} />

                <Route path='/render-color' element={<RenderColor />} />

                <Route path='/dark-mode' element={<DarkMode />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            <Footer />
        </>
    )
};

export default AppRouter;