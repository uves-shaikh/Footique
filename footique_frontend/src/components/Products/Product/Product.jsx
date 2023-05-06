import { useNavigate } from 'react-router-dom'

import "./Product.scss";

const Product = ({ id, data }) => {

    const navigate = useNavigate()

    return (
        <div className="product-card" onClick={() => navigate("/product/" + id)}>
            <div className="thumbnail">
                {/* <img src={process.env.REACT_APP_STORE_URL + data.img.data[0].attributes.url} alt="" /> */}
                 <img src={data.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-details">
                <span className="name"> {data.title} </span>
                <span className="price">&#8377;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;

// process.env.REACT_APP_STORE_URL + data.img.data[0].attributes.url


// import "./Products.scss";
// import Product from '../Products/Product/Product'
// const Products = ({ products, innerPage, headingText }) => {
//   return (
//     <div className="products-container">
//       {!innerPage && <div className="sec-heading">{headingText}</div>}
//       <div className="product">
//         {products.data.map(item => (
//           <Product key={item.id} id={item.id} data={item.attributes} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;