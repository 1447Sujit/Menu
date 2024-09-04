
const Filter = ({filterData,setCategory})=>{

  function handleFilter(title){
    setCategory(title)
  }
  
return (
<div className="filterContainer">
{
  filterData.map((data)=>{
    return <button key={data.id} className="filterButton" onClick={()=> handleFilter(data.title)}>{data.title}</button>
  })
}
</div>
)
}


export default Filter;