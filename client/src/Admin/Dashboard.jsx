
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/admin.css";
import { FaProductHunt, FaSearch } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { MdSportsCricket } from "react-icons/md";
import { SiBrandfolder } from "react-icons/si";
import Table from 'react-bootstrap/Table';
import { debounce } from 'lodash';

const App = () => {

  const [mypro, setmypro] = useState("");
  const [mydata, setmydata] = useState([]);
  const [counts, setCounts] = useState({
    categoryCount: [],
    sportsCategoryCount: [],
    brandNameCount: [],
    totalProducts: 0, 
  });
  const [loading, setLoading] = useState(true);

  // Fetch counts data from API
  const fetchCounts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/adminuser/usercount");
      setCounts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch counts. Please check your API or network.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  // Calculate total users across all categories
  const totalUsers = [
    ...counts.categoryCount,
    ...counts.sportsCategoryCount,
    ...counts.brandNameCount,
  ].reduce((acc, item) => acc + item.totalUsers, 0);

  // Calculate total number of brands, sports categories, and categories
  const totalBrands = counts.brandNameCount.length;
  const totalSportsCategory = counts.sportsCategoryCount.length;
  const category = counts.categoryCount.length;

  // Debounced search function
  const debouncedSearch = debounce(() => {
    if (!mypro.trim()) {
      alert('Please enter a search term.');
      return;
    }
    const api = `http://localhost:8000/adminuser/datasearch/?adminuser=${mypro}`;
    axios.get(api)
      .then((res) => {
        setmydata(res.data);  
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        alert('Error fetching data. Please try again.');
      });
  }, 500); // 500ms debounce time

  // Update search term and trigger debounced search
  const handleSearch = (e) => {
    setmypro(e.target.value);
    debouncedSearch();
  };

  let sno = 0;
  const ans = mydata.map((key) => {
    sno++;
    return (
      <tr key={key._id}>
        <td>{sno}</td>
        <td>
          <img src={key.image} style={{ width: "50px", height: "50px" }} />
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
      <div id="nav">
        <div id="nav1">
          <h1>Dashboard</h1>
        </div>

        <div id="nav2">
          <input
            type="text"
            placeholder="Search..."
            value={mypro}
            onChange={handleSearch}
          />
          <FaSearch />
        </div>

        <div id="nav3">
          <h1>Admin</h1>
        </div>
      </div>

      

      {mydata.length === 0 && (
        <div id="row">
          <div id="row1" className="row2">
            <h5>Total Products: {counts.totalProducts}</h5>
            <FaProductHunt />
          </div>

          <div id="row1" className="row3">
            <h5>Total Categories: {category}</h5>
            <MdCategory />
          </div>

          <div id="row1" className="row4">
            <h5>Total Sports Categories: {totalSportsCategory}</h5>
            <MdSportsCricket />
          </div>

          <div id="row1" className="row5">
            <h5>Total Brands: {totalBrands}</h5>
            <SiBrandfolder />
          </div>
        </div>
      )}

      <h5 style={{ marginTop: "40px", alignItems: "center", textAlign: "center" }}>
        User Counts by Multiple Criteria
      </h5>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div id="quantity">
          <div id="quantity1">
            <h4>Total Users: {totalUsers}</h4>
          </div>

          <div id="quantity1">
            <h5>Category</h5>
            <ul>
              {counts.categoryCount.map((item) => (
                <span key={item._id}>
                  {item._id}: {item.totalUsers}
                </span>
              ))}
            </ul>
          </div>

          <div id="quantity2">
            <h5>Sports Category</h5>
            <ul>
              {counts.sportsCategoryCount.map((item) => (
                <span key={item._id}>
                  {item._id}: {item.totalUsers}
                </span>
              ))}
            </ul>
          </div>

          <div id="quantity3">
            <h5>Brand Name</h5>
            <ul>
              {counts.brandNameCount.map((item) => (
                <span key={item._id}>
                  {item._id}: {item.totalUsers}
                </span>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* <h1>This is the display page</h1>
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
        <tbody>
          {ans}
        </tbody>
      </Table> */}
    </>
  );
};

export default App;


