import { useNavigate } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';

export const GoBack = () => {

    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1);
    }

    return (
        <a
            className="btn-go-back"
            onClick={onNavigateBack}
        >
            <FaLongArrowAltLeft className='arrow-go-back' />
        </a>
    )
};