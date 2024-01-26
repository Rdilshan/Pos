import { useEffect, useState } from "react";
import axios from "axios";
import Customerupdatemodel from "./model/customerupdate";
import { Modal } from "react-bootstrap";

interface Customer {
  _id: string;
  name: string;
  address: string;
  salary: number;
}

const Customer: React.FC = () => {
  const [customers, setcustomers] = useState<Customer[]>([]);

  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [salary, setsalary] = useState("");

  const [updatename, setupdatename] = useState("");
  const [updateaddress, setupdateaddress] = useState("");
  const [updatesalary, setupdatesalary] = useState("");
  const [updateid, setupdateid] = useState("");

  const [showmodal, setshowmodal] = useState<boolean>(false);

  useEffect(() => {
    getallcustomer();
  }, []);

  const savedata = async () => {
    try {
      const savecustomer = await axios.post(
        "http://localhost:3000/api/v1/customer/create",
        { name, address, salary }
      );
      console.log(savecustomer);

      setname("");
      setaddress("");
      setsalary("");
      getallcustomer();
    } catch (error) {
      console.log(error);
    }
  };

  const getallcustomer = async () => {
    try {
      const customersResponse = await axios.get(
        "http://localhost:3000/api/v1/customer/find-all"
      );

      setcustomers(customersResponse.data);
      // console.log(customers);
    } catch (error) {
      console.log(error);
    }
  };

  const deletecustomer = async (id: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");
    if (isConfirmed) {
      const deleterep = await axios.delete(
        `http://localhost:3000/api/v1/customer/delecte-by-id?id=${id}`
      );
      // console.log(deleterep);
      getallcustomer();
    }
  };

  const updatecustomer = async (id: string) => {
    console.log(id);
    const findcustomer = await axios.get(
      `http://localhost:3000/api/v1/customer/find-by-id?id=${id}`
    );

    setupdatename(findcustomer.data.name);
    setupdateaddress(findcustomer.data.address);
    setupdatesalary(findcustomer.data.salary);
    setupdateid(findcustomer.data._id);

    setshowmodal(true);
  };

  const submitupdate = async (id: string) => {
    console.log(updatename);
    console.log(updateaddress);
    console.log(updatesalary);
    console.log(id);

    const updatecustomer = await axios.put(
      `http://localhost:3000/api/v1/customer/update?id=${id}`,
      { 'name':updatename, 'address':updateaddress,'salary':updatesalary }
    );

    console.log(updatecustomer);
    setshowmodal(false);
    getallcustomer();
  };

  return (
    <>
      <div className="container">
        <br />
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Customer Name</label>
              <input
                type="text"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Customer Name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Customer Address</label>
              <input
                type="text"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Address"
                value={address}
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Customer Salary</label>
              <input
                type="text"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Salary"
                value={salary}
                onChange={(e) => {
                  setsalary(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="row">
          <div className="btn btn-primary" onClick={savedata}>
            Save data
          </div>
        </div>
        <hr />

        <div className="row">
          <input type="search" name="" id="" placeholder="Search here" />
        </div>
        <br />

        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Salary</th>
                <th scope="col">Delete option</th>
                <th scope="col">Update option</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                // JSX content for each customer goes here
                <tr key={customer._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{customer.name}</td>
                  <td>{customer.address}</td>
                  <td>{customer.salary}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => {
                        deletecustomer(customer._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => {
                        updatecustomer(customer._id);
                      }}
                    >
                      update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={showmodal}>
        <h2 className="m-3">Update Customer </h2>
        <hr />
        <div className="m-3">
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Customer Name</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              id="exampleInputPassword1"
              placeholder="name"
              value={updatename}
              onChange={(e) => {
                setupdatename(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Customer Address</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              id="exampleInputPassword1"
              placeholder="Address"
              value={updateaddress}
              onChange={(e) => {
                setupdateaddress(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Customer salary</label>
            <input
              type="number"
              className="form-control mt-2 mb-2"
              id="exampleInputPassword1"
              placeholder="salary"
              value={updatesalary}
              onChange={(e) => {
                setupdatesalary(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <button
              className="col-4 m-4 btn btn-dark"
              onClick={() => {
                setshowmodal(false);
              }}
            >
              cancel
            </button>
            <button
              className="col-4 m-4 btn btn-primary"
              onClick={()=>{
                submitupdate(updateid);
              }}
            >
              submit
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Customer;
