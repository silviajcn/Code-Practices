import { FormattedDate, FormattedMessage } from 'react-intl';
import { NavBar, Grid } from './components';
import './styles.css';

export const Translator = () => {
    return (
        <>
            <NavBar />

			<div className="main-translate">
				<h1 className="titulo">
                    <FormattedMessage
                        id="translator.title"
						defaultMessage="Home" 
						values={
							{
								name: 'Welcome, users!'
							}
						}
					/> 
				</h1>
					<p className="subtitulo">
						<FormattedDate
							value={Date.now()}
							year="numeric"
							month="long"
							weekday="long"
							day="numeric"
						/>
				</p>
				
				<Grid />
			</div>
        </>
    )
};