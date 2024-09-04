
const Card = ({cardDetail})=>{

  return (
  <div className="card">
      <div className="cardImageBox">
        <img src={cardDetail.image} alt="" />
      </div>

      <div className="cardDetails">
        <div className="cardPrice">
          <h3 className="name">{cardDetail.name}</h3>
          <p className="rate"> ${cardDetail.price}</p>
        </div>
        <br />
        <hr />
        <div className="cardDescription">
          <p>{cardDetail.des}</p>
        </div>
      </div>

  </div>
  )
  }
  
  
  export default Card;