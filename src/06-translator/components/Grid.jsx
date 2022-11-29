import { FormattedMessage } from 'react-intl';

export const Grid = () => {
    return (
        <div className="grid">
			<div>
				<h2>React</h2>
				<FormattedMessage
                    id="items.text1"
					defaultMessage="Tool description" 
				/>
			</div>
			<div>
				<h2>HTML</h2>
				<FormattedMessage
                    id="items.text2"
					defaultMessage="Language description" 
				/>
			</div>
			<div>
				<h2>Figma</h2>
				<FormattedMessage
                    id="items.text3"
					defaultMessage="Tool description"
				/>
			</div>
			<div>
				<h2>JavaScript</h2>
				<FormattedMessage
                    id="items.text4"
					defaultMessage="Language description"  
				/>
			</div>
			<div>
				<h2>SQL</h2>
				<FormattedMessage
                    id="items.text5"
					defaultMessage="Language description"  
				/>
			</div>
			<div>
				<h2>TypeScript</h2>
				<FormattedMessage
                    id="items.text6"
					defaultMessage="Language description" 
				/>
			</div>
		</div>
    )
};