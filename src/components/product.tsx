import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../config/firebase";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  description: string;
  unitPrice: string;
  qtyonhand: string;
  image: string;
}

const Product: React.FC = () => {
  useEffect(() => {
    allproductget();
  }, []);

  const [getproducts, setproduct] = useState<Product[]>([]);

  const [pname, setpname] = useState("");
  const [pPrice, setpPrice] = useState<number>();
  const [pqty, setpqty] = useState<number>();
  const [pdesc, setpdesc] = useState("");

  const [pimg, setpimg] = useState<File | null>();

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setpimg(file);
      };
      reader.readAsDataURL(file);
    } else {
      setpimg(null);
    }
  };

  const handleUpload = async () => {
    if (pimg) {
      const storageRef = ref(getStorage(app), "images");
      const imageRef = ref(storageRef, pimg.name);

      await uploadBytes(imageRef, pimg);
      const imageUrl = await getDownloadURL(imageRef);

      console.log("Image URL:", imageUrl);
      return imageUrl;
    } else {
      console.error("No image selected");
    }
  };

  const producatsave = async () => {
    const imgurl = await handleUpload();
    console.log(imgurl);
    try {
      const saveproduct = await axios.post(
        "http://localhost:3000/api/v1/product/create",
        {
          name: pname,
          unitPrice: pPrice,
          qtyonhand: pqty,
          description: pdesc,
          image: imgurl,
        }
      );
      setpname("");
      setpPrice(0);
      setpqty(0);
      setpdesc("");
      setpimg(null);
      console.log(saveproduct);

      const fileInput = document.getElementById(
        "exampleInputPassword123"
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }
      allproductget();

    } catch (error) {
      console.log(error);
    }
  };

  const allproductget = async () => {
    try {
      const allproduct = await axios.get(
        "http://localhost:3000/api/v1/product/find-all"
      );
      console.log(allproduct);
      setproduct(allproduct.data);
    } catch (error) {
      console.log(error);
    }
  };


  const deleteproduct =async(id:string)=>{
    const isConfirmed = window.confirm("Are you sure you want to delete this?");
    if (isConfirmed) {
      const deleterep = await axios.delete(
        `http://localhost:3000/api/v1/product/delecte-by-id?id=${id}`
      );
      console.log(deleterep);
      allproductget();
    }
  }
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
                value={String(pname)}
                onChange={(e) => {
                  setpname(e.target.value);
                }}
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
                value={pPrice}
                onChange={(e) => {
                  setpPrice(parseInt(e.target.value));
                }}
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
                value={pqty}
                onChange={(e) => {
                  setpqty(parseInt(e.target.value));
                }}
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
                id="exampleInputPassword123"
                placeholder="image"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <br />

          <div className="col-12 mt-3">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Product Describetion
              </label>
              <textarea
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Salary"
                value={String(pdesc)}
                onChange={(e) => {
                  setpdesc(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="row">
          <div className="btn btn-primary" onClick={producatsave}>
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
                <th scope="col">price</th>
                <th scope="col">qty</th>

                <th scope="col">Delete option</th>
                <th scope="col">Update option</th>
              </tr>
            </thead>
            <tbody>

              {getproducts.map((_product, index) => (
                <tr key={_product._id}>
                  <th scope="row">{index+1}</th>
                  <td>{_product.name}</td>
                  <td>{_product.unitPrice}</td>
                  <td>{_product.qtyonhand}</td>
                  <td>
                    <button type="button" className="btn btn-outline-danger" onClick={()=>{
                      deleteproduct(_product._id);
                    }}>
                      delete
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-outline-success">
                      update
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Product;
