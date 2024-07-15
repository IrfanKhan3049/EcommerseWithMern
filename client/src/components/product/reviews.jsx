import React from 'react';
import ProductStore from '../../store/ProductStore';
import StarRatings from 'react-star-ratings'

const Reviews = () => {
  const {ReviewList}=ProductStore();
  return (
    <div>
      <ul class="list-group list-group-flush">
        {
          ReviewList!==null?(ReviewList.map((item,i)=>{
           return <li key={i} className="list-group-item">
                     <h6 className="m-0 p-0"><i class="bi bi-person"></i>{item['profile']['cus_name']}</h6>  
                     <StarRatings rating={parseFloat(item['rating'])} starRatedColor="red" starDimension="15px" starSpacing="2px" /> 
                     <p>{item['des']}</p>
                  </li>   
          })):(<span></span>)
        }
         
      </ul>      
    </div>
  );
};

export default Reviews;