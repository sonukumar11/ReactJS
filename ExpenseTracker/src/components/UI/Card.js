import './Card.css'

const Card = (props) => {
    const all_classes = 'card ' + props.className;
    return <div className={all_classes}>{props.children}</div>;
}
        


export default Card;