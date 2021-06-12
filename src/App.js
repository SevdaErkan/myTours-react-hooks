import "./styles.css";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";

export default function App() {
   const [loading, setLoading] = useState(true);
   const [tours, setTours] = useState([]);

   const fetchData = async () => {
      // const resp = await fetch(url);
      // const data = await resp.json();
      // setTours([data]);
      try {
         setLoading(false);
         const resp = await fetch(url);
         const data = await resp.json();
         setTours(data);
      } catch (error) {
         setLoading(false);
         console.log("error");
      }
   };
   useEffect(() => {
      fetchData();
   }, []);
   console.log(tours);

   const removeTour = (id) => {
      const newTours = tours.filter((tour) => tour.id !== id);
      setTours(newTours);
   };

   if (loading) {
      return (
         <main>
            <Loading />
         </main>
      );
   }
   if (tours.length === 0) {
      return (
         <main>
            <div className="title">
               <h2>no tours left</h2>
               <button className="refresh" onClick={() => fetchData()}>
                  refresh
               </button>
            </div>
         </main>
      );
   } else {
      return (
         <main>
            <Tours tours={tours} removeTour={removeTour} />
         </main>
      );
   }
}
