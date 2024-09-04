import "./App.css";
import { filterData, cardsDetails } from "./data";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { useEffect, useState } from "react";


function App() {
  const [category, setCategory] = useState(filterData[0].title);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      
      {/* NAV BAR */}
      <div className="navbar">
        <nav>
          <h1>Our Menu</h1>
          <br />
          <hr />
        </nav>
      </div>

      {/* Filter section */}
      <div>
        <Filter filterData={filterData} setCategory={setCategory}></Filter>
      </div>

      {/* Cards */}
      <div>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <Cards cardsDetails={cardsDetails} category={category}></Cards>
        )}
      </div>
    </div>
  );
}

export default App;
