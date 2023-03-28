import { useNavigate } from 'react-router-dom'

import "./Category.scss";

const Category = ({ categories }) => {

  const navigate = useNavigate()

  return (
    <div className="shop-by-category">
      <div className="categories">
        {
          categories && categories.data ?
            categories.data.map((item) => {
              return (
                <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
                  {item.id}
                  <img src={process.env.REACT_APP_STORE_URL + item.attributes.img.data.attributes.url} alt="" />
                </div>
              )
            }) : (
              <div>No categories</div>
            )
        }
      </div>
    </div>
  )
};

export default Category;