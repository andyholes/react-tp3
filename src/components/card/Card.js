import "./Card.css";

export default function Card({game}){
    const { image, type, name, genre, platform, url, description } = game;
    return(
        <div className="card">
        <img src={"data:"+type+";base64,"+image} alt="" />
        <ul>
            <li><h2>{name}</h2></li>
            <li><p>{genre}</p></li>
            <li><p>{platform}</p></li>
            <li><a href={url} target="blank">Sitio web</a></li>
            <li><p>{description}</p></li>
        </ul>
        </div>
    );
}