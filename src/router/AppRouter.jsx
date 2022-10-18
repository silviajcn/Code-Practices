import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { DragDrogApp } from '../01-drag-and-grog';
import { Footer } from '../components';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/drag-drog' element={<DragDrogApp />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            <Footer />
        </div>
    )
};

export default AppRouter;