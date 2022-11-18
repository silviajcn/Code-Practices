

export const Tag = ({
    text,
    // color
}) => {
    return (
        <div
            className='tag'
            // style={{ '--color': color }}
        >
            <span>#</span>
            {text}
        </div>
    )
};