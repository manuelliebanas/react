import Card from '../components/Card.jsx';

function CardContainer() {
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
                <Card
                    image="https://www.regalopublicidad.com/images/hue9r/f49033ec0c073385eb90d2fc411d/610-460/camiseta-manga-corta-de-160-gr-100-algodon-valento-azul-royal-personalizado.jpg"
                    title="Camiseta" description="Camiseta azul manga corta" price="19,99€"/>
                <Card
                    image="https://www.regalopublicidad.com/images/hue9r/45246ee406b8601a8ff08d9e222e/610-460/camiseta-manga-larga-unisex-ajustada-190-gr-valento-blanca.jpg"
                    title="Camiseta manga larga" description="Camiseta blanca manga larga" price="25,99€"/>
                <Card image="https://www.ceatexonline.com/1739-large_default/pantalon-vaquero-negro-jack-jones.jpg"
                      title="Pantalon" description="Pantalon vaquero negro" price="39,99€"/>
                <Card
                    image="https://www.jeanstrack.com/1291-big_default_2x/pantalon-corto-ciclismo-urbano-soho-jeans-destroy-hombre.jpg"
                    title="Pantalon corto" description="Pantalon vaquero corto" price="19,99€"/>
                <Card
                    image="https://contents.mediadecathlon.com/p2170706/k$7f8938458a3977cd0475b3a48e63d659/sq/8743199.jpg?format=auto&f=800x0"
                    title="Pantalon deportivo" description="Pantalon de chandal adidas" price="49,99€"/>
        </div>
    )
}

export default CardContainer