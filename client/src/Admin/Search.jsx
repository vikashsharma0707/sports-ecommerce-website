// import axios from "axios";
// import { useState } from "react";
// import Table from 'react-bootstrap/Table';



// const Search=()=>{
//     const [input,setinput] = useState("")
//     const [mydata,setmydata] =useState([])
//     console.log(input)

//     const handleChange=(e)=>{
//         setinput(e.target.value)
//         let api =`http://localhost:8000/adminuser/adminDataSearch/?adminuser=${input}`;
//         axios.post(api).then((res)=>{
//           setmydata(res.data)




import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import "../css/adminSearch.css"; // Custom CSS file for styling

const Search = () => {
  const [input, setinput] = useState("");
  const [mydata, setmydata] = useState([]);
  console.log(input);

  const handleChange = (e) => {
    setinput(e.target.value);
    let api = `http://localhost:8000/adminuser/adminDataSearch/?adminuser=${input}`;
    axios.post(api).then((res) => {
      setmydata(res.data);
      console.log(res.data);
    });
  };

  let sno = 0;
  const ans = mydata.map((key) => {
    sno++;
    return (
      <tr key={key._id}>
        <td>{sno}</td>
        <td>
          <img src={key.image} style={{ width: "50px", height: "50px" }} alt="Product" />
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
    <div className="search-page">
      <h1 className="search-title">Search Products</h1>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={handleChange}
          placeholder="Search by product name..."
        />
      </div>

      <h2 className="display-title">Search Results</h2>

      <Table striped bordered hover responsive className="search-table">
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
    </div>
  );
};

export default Search;
