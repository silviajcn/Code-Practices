import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';
import './style.css';

const notify = () => toast('Color copied to clipboard!', {position: 'top-center'});

export const CopyColor = ({name}) => {
    return (
        <>
            <CopyToClipboard text={name}>
                <div
                    type="button"
                    onClick={notify} 
                    className="btn-copy-color"
                    aria-label="copy color button"
                >
                    {name}
                </div>
            </CopyToClipboard>

            <Toaster toastOptions={{className: 'toaster'}} />
        </>
    )
};