function Order() {
  return (
    <>
      <div className="container">
        <br />
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Customer Name</label>
              <select
                className="form-select mt-2"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Customer Name</label>
              <input
                type="text"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Name"
                disabled
              />
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Customer Address</label>
              <input
                type="text"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Address"
                disabled
              />
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Customer Salary</label>
              <input
                type="text"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Salary"
                disabled
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Product Name</label>
              <select
                className="form-select mt-2"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Product Description</label>
              <input
                type="text"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Name"
                disabled
              />
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Product Price</label>
              <input
                type="number"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Price"
                disabled
              />
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Qty on hold</label>
              <input
                type="Number"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="qty"
                disabled
              />
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">qty</label>
              <input
                type="number"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="qty"
              />
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="btn btn-primary">Save data</div>
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
                <th scope="col">Product Name</th>
                <th scope="col">price</th>
                <th scope="col">Qty</th>
                <th scope="col">Total</th>
                <th scope="col">Delete option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1200</td>
                <td>
                  <button type="button" className="btn btn-outline-success">
                    Success
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1200</td>
                <td>
                  <button type="button" className="btn btn-outline-success">
                    Success
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 style={{ color: "red" }} >Rs 1200</h1>
          </div>

          <div className="col-12 col-md-6">
            <button
              type="button"
              style={{ display: "flex" }}
              className="btn btn-outline-success"
            >
              Place hold
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
