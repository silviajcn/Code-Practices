import { InfiniteLoopSlider, Tag } from './';
import './styles.css';

//const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION = 30000;
const ROWS = 2;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

export const ScrollComponent = () => {
    return (
        <div className='app-infinite-scroll'>
            <header className='header'>
                <h1>Infinite Scroll Animation</h1>
            </header>
            <div className='tag-list'>
                {[...new Array(ROWS)].map((_, i) => (
                    <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
                    {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
                        <Tag text={tag} key={tag}/>
                    ))}
                    </InfiniteLoopSlider>
                ))}
                <div className='fade'/>
            </div>
        </div>
    )
};