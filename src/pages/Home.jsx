import { practices } from '../data/practices';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { FaHandPointer } from 'react-icons/fa';

export const Home = () => {

    return (
        <div className='container-home'>
            <header>
                <h1>
                    <FormattedMessage
                        id="app.title"
                        defaultMessage="Home" 
                    />
                </h1>
            </header>

            <main className='main'>
                {practices.map(practice => (
                    <div key={practice.id} className="container-practices">
                        <Link to={practice.url}>
                            <div className='div-container-practice'>
                                <FaHandPointer className='icon-practice'/>
                                <p>{practice.title}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </main>
        </div>
    )
};