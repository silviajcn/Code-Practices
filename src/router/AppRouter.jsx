import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Footer } from '../components';
import { DragDrogApp } from '../01-drag-and-grog';
import { RenderColor } from '../02-render-color';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/drag-drog' element={<DragDrogApp />} />

                <Route path='/render-color' element={<RenderColor />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            <Footer />
        </div>
    )
};

export default AppRouter;