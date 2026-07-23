
//!example 1:
import axios from "axios";
import { useEffect, useState } from "react";

const Axios = () => {
  let [items, setItems] = useState(null);
  useEffect(() => {
    let api = async () => {
      let {
        data: { products },
      } = await axios.get("https://dummyjson.com/products");
      setItems(products);
    };
    api();
  }, []);

  return (
    <>
      <table border={1} rules="all" cellPadding={10} width="100%">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
       <tbody>
        {
          items && items.map((product) => {
            return <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td><img src={product.images[0]} alt={product.title} height="200" width="120"/></td>
              <td>${product.price}</td>
            </tr>
          })
        }
      </tbody>
      </table>
    </>
  );
};

export default Axios;
//!example 2: