import { snacks } from "./data";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
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
    const newData = snacksData.filter(
      (snack) =>
        snack.product_name.toLowerCase().includes(search) ||
        snack.ingredients.join(" ").toLowerCase().includes(search)
    );

    const searchedSnacksData = search?.length !== 0 ? newData : snacks;
    setSnacksData(() => searchedSnacksData);
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
        if (toggleState.product_name) {
          const sortByName = [...snacksData];
          sortByName.sort((a, b) =>
            a.product_name.localeCompare(b.product_name)
          );
          setSnacksData(() => sortByName);
          setToggleState(() => ({ ...toggleState, product_name: false }));
        } else {
          const sortByName = [...snacksData];
          sortByName.sort((a, b) =>
            b.product_name.localeCompare(a.product_name)
          );
          setSnacksData(() => sortByName);
          setToggleState(() => ({ ...toggleState, product_name: true }));
        }
        break;

      case "product_weight":
        if (toggleState.product_weight) {
          const sortByWeight = [...snacksData];
          sortByWeight.sort(
            (a, b) =>
              Number(a.product_weight.slice(0, -1)) -
              Number(b.product_weight.slice(0, -1))
          );
          setSnacksData(() => sortByWeight);
          setToggleState(() => ({ ...toggleState, product_weight: false }));
        } else {
          const sortByWeight = [...snacksData];
          sortByWeight.sort(
            (a, b) =>
              Number(b.product_weight.slice(0, -1)) -
              Number(a.product_weight.slice(0, -1))
          );
          setSnacksData(() => sortByWeight);
          setToggleState(() => ({ ...toggleState, product_weight: true }));
        }
        break;

      case "price":
        if (toggleState.price) {
          const sortByPrice = [...snacksData];
          sortByPrice.sort((a, b) => a.price - b.price);
          setSnacksData(() => sortByPrice);
          setToggleState(() => ({ ...toggleState, price: false }));
        } else {
          const sortByPrice = [...snacksData];
          sortByPrice.sort((a, b) => b.price - a.price);
          setSnacksData(() => sortByPrice);
          setToggleState(() => ({ ...toggleState, price: true }));
        }
        break;

      case "calories":
        if (toggleState.calories) {
          const sortByCalories = [...snacksData];
          sortByCalories.sort((a, b) => a.calories - b.calories);
          setSnacksData(() => sortByCalories);
          setToggleState(() => ({ ...toggleState, calories: false }));
        } else {
          const sortByCalories = [...snacksData];
          sortByCalories.sort((a, b) => b.calories - a.calories);
          setSnacksData(() => sortByCalories);
          setToggleState(() => ({ ...toggleState, calories: true }));
        }
        break;

      case "ingredients":
        if (toggleState.ingredients) {
          const sortByIngredients = [...snacksData];
          sortByIngredients.sort((a, b) =>
            b.ingredients[0].localeCompare(a.ingredients[0])
          );
          setSnacksData(() => sortByIngredients);
          setToggleState(() => ({ ...toggleState, ingredients: false }));
        } else {
          const sortByIngredients = [...snacksData];
          sortByIngredients.sort((a, b) =>
            a.ingredients[0].localeCompare(b.ingredients[0])
          );
          setSnacksData(() => sortByIngredients);
          setToggleState(() => ({ ...toggleState, ingredients: true }));
        }
        break;
      default:
      // code block
    }
  };

  return (
    <div className="app">
      <h1>Snack Table</h1>
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
              <th onClick={() => handleToggle("id")}>
                ID
                {/* {toggleState.id ? " 🔽" : ""} */}
              </th>
              <th onClick={() => handleToggle("product_name")}>
                Product Name
                {/* {toggleState.product_name ? " 🔽" : ""} */}
              </th>
              <th onClick={() => handleToggle("product_weight")}>
                Product Weight
                {/* {toggleState.product_weight ? " 🔽" : ""} */}
              </th>
              <th onClick={() => handleToggle("price")}>
                Price
                {/* {toggleState.price ? " 🔽" : ""} */}
              </th>
              <th onClick={() => handleToggle("calories")}>
                Calories
                {/* {toggleState.calories ? " 🔽" : ""} */}
              </th>
              <th onClick={() => handleToggle("ingredients")}>
                Ingredients
                {/* {toggleState.ingredients ? " 🔽" : ""} */}
              </th>
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
