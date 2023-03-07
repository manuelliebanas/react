function Card({image, title, description, price}) {
    return (
        <div className="Card">
            <img src={image} width="100px" height="100px" alt=""/>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}

export default Card
