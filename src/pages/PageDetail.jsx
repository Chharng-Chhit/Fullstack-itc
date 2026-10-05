import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function PageDetail() {
  // Key name matches ':userId' from the Route path
  const { pageId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState();

  async function viewData(id){
    const req = await fetch(import.meta.env.VITE_API_URL +'/products/'+id);
    const result = await req.json();
    setProduct(result);
  }

  useEffect(() => {
    // 1. Setup code (runs here)

    viewData(pageId)
    return () => {
      // 2. Cleanup code (optional, runs before unmount or next run)
    };
  }, [/* 3. Dependency array */]);
  console.log(product);
  return (
    <div>
      <h2>User Profile</h2>
      <p>Loaded ID: <strong>{pageId}</strong></p>

      <button onClick={()=>viewData(pageId)}>Click</button>
      {/* Navigate back */}
      <button onClick={() => navigate(-1)}>Go Back</button>
      <br />
      
      <p>Product Id: {product?.id}</p>
      <p>Product Name: {product?.name}</p>
      <p>Product Category: {product?.category?.name}</p>
      <p>Product stock_quantity: {product?.stock_quantity}</p>
    </div>
  );
}