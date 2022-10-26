import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';

const notify = () => toast('Color copied to clipboard!', {position: 'top-center'});

export const CopyColor = ({name}) => {
    return (
        <>
            <CopyToClipboard text={name}>
                <div
                    type="button"
                    onClick={notify} 
                    className="btn-copy-color"
                    aria-label="button copy color"
                >
                    {name}
                </div>
            </CopyToClipboard>

            <Toaster toastOptions={{className: 'toaster'}} />
        </>
    )
};