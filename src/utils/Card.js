import "../App.css";

const Card = (data) => {
    console.log(data);
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-header">
                Tarifa 1
            </div>
            <img src={require(`../assets/${String(data.data.imgsrc).split("/")[2]}`)} className="" alt="..."/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default Card