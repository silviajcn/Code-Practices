import { CopyColor } from './';


export const Color = ({hex}) => {
    return (
        <div className='color-square' style={{ backgroundColor: hex }}>
            <CopyColor name={hex} />
        </div>
    )
};