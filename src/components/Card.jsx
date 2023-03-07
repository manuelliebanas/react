function Card(props) {
    return (
        <div className="Card">
            <img src={props.image} width="100px" height="100px" alt=""/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default Card
