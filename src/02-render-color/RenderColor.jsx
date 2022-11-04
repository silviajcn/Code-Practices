import { colors } from './colors';
import { Color } from './';
import './style.css';

export const RenderColor = () => {
    return (
        <div className='container-render-color'>

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