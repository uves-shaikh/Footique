import "./Products.scss";
import Product from '../Products/Product/Product'
const Products = ({ products, innerPage, headingText }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="product">
        {
        products && products.data ?
        products.data.map(item => (
          // <Product />
          <Product key={item.id} id={item.id} data={item.attributes} />
        )):
        <div>All products are uploaded on strapi</div>
        }
      </div>
    </div>
  );
};

export default Products;


// import "./Products.scss";

// import Product from '../Products/Product/Product'

// const Products = ({ products, innerPage, headingText }) => {
//     return (
//         <div className="products-container">
//             {!innerPage && <div className="sec-heading">{headingText}</div>}
//             <div className="product">
//             {
//             products && products.data ? 
//             products.data.map((item) => { 
//               return (
//                 <div key={item.id} id={item.id} className="category">
//                   {item.id}
//                   <img src={process.env.REACT_APP_STORE_URL + item.attributes} alt="" />
//                 </div>
//               )
//             }) : (
//               <div>No products</div>
//             )
//           }
//             </div>
//         </div>
//     );
// };

// export default Products;