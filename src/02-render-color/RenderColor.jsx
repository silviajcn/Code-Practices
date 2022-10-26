import { colors } from './colors';
import { Color } from './';
import { GoBack } from '../components/GoBack';
import './style.css';

export const RenderColor = () => {
    return (
        <div>
            <GoBack />

            <h1>Colors</h1>

            <div className='grid-container'>
                {
                    colors.map(color =>
                        <Color
                            hex={color.hex}
                            key={color.hex}
                        />
                    )
                }
            </div>

        </div>
    )
};