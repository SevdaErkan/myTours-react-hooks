import { useState } from "react";

const Tour = ({ id, image, price, name, info, removeTour }) => {
   const [readMore, setReadMore] = useState(false);

   return (
      <article id={id}>
         <img src={image} alt="name" />
         <div className="info">
            <h2>{name}</h2>
            <h2 className="price">${price}</h2>
         </div>
         <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
               className="read-more"
               onClick={() => setReadMore(!readMore)}
            >
               {!readMore ? "Read More" : "Show Less"}
            </button>
         </p>
         <button className="dlt-btn" onClick={() => removeTour(id)}>
            Not Interested
         </button>
      </article>
   );
};
export default Tour;
