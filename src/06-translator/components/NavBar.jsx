import { useContext } from 'react';
import { languageContext } from '../context/LanguageContext';

export const NavBar = () => {

    const language = useContext(languageContext);
	//console.log(lenguage.establecerLenguaje());

    return (
        <div className="header">
			<div className="navbar">
				<div className="banderas">
					<button
						onClick={() => language.setLanguage('es-ES')}
						className="btn-translate"
					>
						<img src="https://res.cloudinary.com/silviajcn/image/upload/v1644180126/PRACTICAS/Traductor/spain_wgalpk.png" alt="Spain flag" className='img-banderas' />
						ES
					</button>

					<button
						onClick={() => language.setLanguage('en-US')}
						className="btn-translate"
					>
						<img src="https://res.cloudinary.com/silviajcn/image/upload/v1644180124/PRACTICAS/Traductor/united-kingdom_nur5m4.png" alt="United States flag" className='img-banderas' />
						EN
					</button>
				</div>
			</div>
		</div>
    )
};