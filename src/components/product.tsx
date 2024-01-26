function Product() {
  return (
    <>
      <div className="container">
        <br />
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Product Name</label>
              <input
                type="text"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Product Name"
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Product Price</label>
              <input
                type="number"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Product Price"
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Product qty</label>
              <input
                type="number"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Product qty"
              />
            </div>
          </div>
          <br />
          <div className="col-12 mt-3">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Product Image</label>
              <input
                type="file"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Salary"
              />
            </div>
          </div>

          <br />
          
          <div className="col-12 mt-3">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Product Describetion</label>
              <textarea
                
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Salary"
              />
            </div>
          </div>
        </div>
        <br />
        <br />

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
                <th scope="col">Name</th>
                <th scope="col">price</th>
                <th scope="col">qty</th>

                <th scope="col">Delete option</th>
                <th scope="col">Update option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <button type="button" className="btn btn-outline-danger">
                    Danger
                  </button>
                </td>
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
                <td>
                  <button type="button" className="btn btn-outline-danger">
                    Danger
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-outline-success">
                    Success
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Product;
