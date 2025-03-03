


import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Update = () => {
    const [mydata, setMyData] = useState([]);
    const [input, setInput] = useState({});
    const [myimage, setMyimage]= useState();
    const [show, setShow] = useState(false);

    // Load data from the API when the component mounts
    const loadData = () => {
        let api = "https://sports-ecommerce-website.onrender.com/adminuser/adminUpdateDisplay";
        axios.get(api).then((res) => {
            setMyData(res.data);
        }).catch(err => console.error("Error fetching data:", err));
    };

    useEffect(() => {
        loadData();
    }, []);  // Empty dependency array ensures this runs once on mount

    // Handle deletion of a record
    const recDel = (id) => {
        let api = "https://sports-ecommerce-website.onrender.com/adminuser/adminDataDelete";
        axios.post(api, { id: id }).then((res) => {
            alert("Data deleted successfully");
            loadData();  // Refresh data after deletion
        }).catch(err => console.error("Error deleting data:", err));
    };

    // Handle fetching data for editing
    const recEdt = (id) => {
        let api2 = "https://sports-ecommerce-website.onrender.com/adminuser/adminEdit";
        axios.post(api2, { id: id }).then((res) => {
            setInput(res.data);
            setShow(true);
        }).catch(err => console.error("Error fetching record for edit:", err));
    };

    // Handle input changes in the modal form
    const handleData = (e) => {
        const { name, value } = e.target;
        setInput(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleImage=(e)=>{
        setMyimage(e.target.files[0]);
        console.log(myimage);
    }

    // Handle form submission to save edited data
    const handleSubmit = async(e) => {

        e.preventDefault();

        const formData= new FormData();
        formData.append("file",myimage);
        formData.append('upload_preset', 'First_Preset');
        formData.append('cloud_name', 'dilbe0lbx');
        const response = await axios.post('https://api3.cloudinary.com/v1_1/dilbe0lbx/image/upload', formData);
        console.log('Image uploaded:', response.data);
        console.log('Image uploaded:', response.data.url);


        let api4 = "https://sports-ecommerce-website.onrender.com/adminuser/adminEditSave";
        axios.post(api4 ,{...input, image:response.data.url}).then((res) => {
            alert("Data saved successfully");
            loadData();  // Refresh data after update
            setShow(false);  // Close modal after saving
        }).catch(err => console.error("Error saving data:", err));
    };

    return (
        <>
            <h1>Data Management Page</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Sports Category</th>
                        <th>Brand Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata.map((item, index) => (
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                                <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px" }} />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.category}</td>
                            <td>${item.price}</td>
                            <td>{item.sportscategory}</td>
                            <td>{item.brandname}</td>
                            <td>
                                <Button variant="danger" onClick={() => recDel(item._id)}>Delete</Button>
                                <Button variant="warning" className="ms-2" onClick={() => recEdt(item._id)}>Edit</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal for editing data */}
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" name="name" value={input.name || ''} onChange={handleData} placeholder="Name" className="form-control mb-2" />
                    <input type="text" name="description" value={input.description || ''} onChange={handleData} placeholder="Description" className="form-control mb-2" />
                    <input type="text" name="category" value={input.category || ''} onChange={handleData} placeholder="Category" className="form-control mb-2" />
                    <input type="text" name="price" value={input.price || ''} onChange={handleData} placeholder="Price" className="form-control mb-2" />
                    <input type="text" name="sportscategory" value={input.sportscategory || ''} onChange={handleData} placeholder="Sports Category" className="form-control mb-2" />
                    <input type="text" name="brandname" value={input.brandname || ''} onChange={handleData} placeholder="Brand Name" className="form-control mb-2" />
                    Upload images : <input type="file" name="file"  onChange={handleImage} /><br/><br/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                    <Button variant="primary" onClick={handleSubmit}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Update;
