import { snacks } from "./data";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  console.log(snacks);
  const [snacksData, setSnacksData] = useState(snacks);
  const [search, setSearch] = useState("");

  const [toggleState, setToggleState] = useState({
    id: false,
    product_name: false,
    product_weight: false,
    price: false,
    calories: false,
    ingredients: false,
  });

  useEffect(() => {
    if (search) {
      const abc = snacksData.filter();
      setSnacksData(
        snacksData.filter((data) => {
          if (data.product_name.includes(search)) {
            return data;
          } else {
            setSnacksData(snacks);
          }
        })
      );
    }
  }, [search]);

  const handleToggle = (type) => {
    switch (type) {
      case "id":
        if (toggleState.id) {
          const sortById = [...snacksData];
          sortById.sort((a, b) => a.id - b.id);
          setSnacksData(() => sortById);
          setToggleState(() => ({ ...toggleState, id: false }));
        } else {
          const sortById = [...snacksData];
          sortById.sort((a, b) => b.id - a.id);
          setSnacksData(() => sortById);
          setToggleState(() => ({ ...toggleState, id: true }));
        }
        break;

      case "product_name":
        const sortByName = [...snacksData];
        sortByName.sort((a, b) => b.product_name - a.product_name);
        console.log(sortByName);
        setSnacksData(() => sortByName);
        break;

      case "product_weight":
        const sortByWeight = [...snacksData];
        sortByWeight.sort((a, b) => b.product_weight - a.product_weight);
        console.log(sortByWeight);
        setSnacksData(() => sortByWeight);
        break;

      case "price":
        const sortByPrice = [...snacksData];
        sortByPrice.sort((a, b) => b.price - a.price);
        setSnacksData(() => sortByPrice);
        break;

      case "calories":
        const sortByCalories = [...snacksData];
        sortByCalories.sort((a, b) => b.calories - a.calories);
        setSnacksData(() => sortByCalories);
        break;

      case "ingredients":
        const sortByIngredients = [...snacksData];
        sortByIngredients.sort((a, b) => b.ingredients - a.ingredients);
        setSnacksData(() => sortByIngredients);
        break;
      default:
      // code block
    }
  };

  return (
    <div className="app">
      <input
        className="search-input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => handleToggle("id")}>ID</th>
              <th onClick={() => handleToggle("product_name")}>Product Name</th>
              <th onClick={() => handleToggle("product_weight")}>
                Product Weight
              </th>
              <th onClick={() => handleToggle("price")}>Price</th>
              <th onClick={() => handleToggle("calories")}>Calories</th>
              <th onClick={() => handleToggle("ingredients")}>Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {snacksData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.product_name}</td>
                <td>{data.product_weight}</td>
                <td>{data.price}</td>
                <td>{data.calories}</td>
                <td>
                  {data.ingredients.map((e, index) => (
                    <p key={index}>{e}, </p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
