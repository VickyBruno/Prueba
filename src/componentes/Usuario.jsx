import '../style.css';


export default function Usuario(props) {
  return (
    <div>
      <div className="card" style={{width:"18rem"}}>
          <img src={props.picture} className="card-img-top" alt="NO LEVANTA"/>
          <div className="card-body">
              <h5 className="card-title">{props.nombre}</h5>
              <p className="card-text">{props.cargo}</p>
              <a href="#" className="btn btn-primary">{props.conoceme}</a>
          </div>
      </div>
    </div>
  )
}

