import './Card.css'

function Card({game}){
    const { imagen, tipoImagen, nombre, descripcion, url, idGenero, idPlataforma } = game;
    return(
        <div className="card">
        <img src={"data:"+tipoImagen+";base64,"+imagen} alt="" />
        <ul>
            <li><h2>{nombre}</h2></li>
            <li><p>{idGenero}</p></li>
            <li><p>{idPlataforma}</p></li>
            <li><a href={url} target="blank">Sitio web</a></li>
            <li><p>{descripcion}</p></li>
        </ul>
        </div>
    );
}

export default Card;