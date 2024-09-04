import Card from "./Card";

const Cards = ({cardsDetails,category})=>{


  const filteredCardDetails = category === "All" ? cardsDetails : cardsDetails.filter(card => card.category === category)

return (
<div className="cardContainer">


{
  filteredCardDetails.map((cardDetail)=>{
    return <Card key={cardDetail.id} cardDetail={cardDetail}></Card>
  })
}
</div>
)
}


export default Cards;