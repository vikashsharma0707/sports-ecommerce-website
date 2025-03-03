
import { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Logout = () => {
  const [mydata, setMyData] = useState([]);
  const [sortField, setSortField] = useState('category'); // Default sort field
  const [sortOrder, setSortOrder] = useState('asc'); // Default sort order
  const [loading, setLoading] = useState(true);           // Loading state for products
  const [error, setError] = useState(null);  

  const loadData = () => {
    setLoading(true)
    let api = `http://localhost:8000/adminuser/sorted?sortField=${sortField}&sortOrder=${sortOrder}`;
    axios
      .get(api)
      .then((res) => {
        setMyData(res.data);
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        setError('Error fetching products.');
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    loadData();
  }, [sortField, sortOrder]); // Re-fetch when sorting criteria change


  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Display error message if there is an issue with the fetch
  }


  let sno = 0;
  const ans = mydata.map((key) => {
    sno++;
    return (
      <tr >
        <td>{sno}</td>
        <td>
          <img src={key.image} style={{ width: "50px", height: "50px" }} alt={key.name} />
        </td>
        <td>{key.name}</td>
        <td>{key.description}</td>
        <td>{key.category}</td>
        <td>${key.price}</td>
        <td>{key.sportscategory}</td>
        <td>{key.brandname}</td>
      </tr>
    );
  });

  return (
    <>
      <h1>This is the display page</h1>
      
      {/* Sorting Controls */}
      <div>
        <label>Sort by:</label>
        <select onChange={(e) => setSortField(e.target.value)} value={sortField}>
          <option value="category">Category</option>
          <option value="sportscategory">Sports Category</option>
          <option value="brandname">Brand Name</option>
          <option value="name">Name</option>
        </select>

        <label>Order:</label>
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Display Sorted Products */}
      {mydata.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Sports Name</th>
              <th>Brand Name</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </Table>
      )}
    </>
  );
};

export default Logout;
