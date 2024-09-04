// import Listing from "../../components/pages/Listing";
// import destination from "../../constants/destination.json";
// import places from "../../constants/places.json"
// import { ChevronRightIcon } from "../../icons";
// import { useRef, useState } from "react";

// const Dashboard = () => {
//   const scrollRef = useRef(null);
//   const [data , setData] = useState([])
//   const scroll = (direction) => {
//     if (direction === "left") {
//       scrollRef.current.scrollLeft -= 200;
//     } else {
//       scrollRef.current.scrollLeft += 200;
//     }
//   };

//   const handleFind = (id) => {
  
//     const countryData = places.countries.find((country) => country.id === id);
//     if (countryData) {
//       setData(countryData.places); 
//       console.log(id, countryData.places, "this filtered items");
//     }
//   };

//   return (
//     <div
//       className="flex h-screen w-screen overflow-x-auto bg-cover"
//       style={{
//         backgroundImage: `url('https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg3.jpg')`,
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="flex justify-center h-[30%] mt-10 bg-fixed">
//         <ChevronRightIcon
//           className={
//             "w-7 h-7 cursor-pointer rotate-180 self-center mr-3 text-white"
//           }
//           onClick={() => scroll("left")}
//           containerStyle="self-center"
//         />
//         <div
//           ref={scrollRef}
//           className="flex flex-nowrap overflow-x-auto space-x-4 scrollbar-hide w-[60%]"
//         >
//           {destination.map((each, index) => {
//             const backgroundImage = require(`../../assets/images/places/${each.backgroundImage}`);
//             return (
//               <div
//                 key={index}
//                 style={{
//                   backgroundImage: `url(${backgroundImage})`,
//                   backgroundSize: "cover",
//                 }}
//                 onClick={()=>handleFind(each.id)}
//                 className="rounded-md h-[140px] w-[140px] flex-shrink-0 pt-20 bg-cover"
//               >
//                 <div className="flex justify-center items-end self-end text-center">
//                   <h1 className="flex self-end text-white text-[15px] font-roboto font-[800]">
//                     {each.country}
//                   </h1>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <ChevronRightIcon
//           className={"w-7 h-7 cursor-pointer ml-3 text-white"}
//           onClick={() => scroll("right")}
//           containerStyle="self-center"
//         />
//       </div>
//       <Listing data={data}/>
//     </div>
//   );
// };

// export default Dashboard;




import Listing from "../../components/pages/Listing";
import destination from "../../constants/destination.json";
import places from "../../constants/places.json"
import { ChevronRightIcon } from "../../icons";
import { useRef, useState } from "react";

const Dashboard = () => {
  const scrollRef = useRef(null);
  const [data , setData] = useState([])

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 200;
    } else {
      scrollRef.current.scrollLeft += 200;
    }
  };

  const handleFind = (id) => {
  
    const countryData = places.countries.find((country) => country.id === id);
    if (countryData) {
      setData(countryData.places); 
      console.log(id, countryData.places, "this filtered items");
    }
  };


  return (
    <div
      className="relative flex flex-col w-screen h-screen bg-cover"
      style={{
        backgroundImage: `url('https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg3.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-24 flex items-center h-[140px] w-[63%] bg-fixed ">
        <ChevronRightIcon
          className="w-7 h-7 cursor-pointer rotate-180 self-center mr-3 text-white"
          onClick={() => scroll("left")}
          containerStyle="self-center"
        />
        <div
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-auto space-x-4 scrollbar-hide w-full"
        >
          {destination.map((each, index) => {
            const backgroundImage = require(`../../assets/images/places/${each.backgroundImage}`);
            return (
              <div
                key={each.id}
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                }}
                className="rounded-md h-[140px] w-[140px] flex-shrink-0 pt-20 bg-cover"
                onClick={()=>handleFind(each.id)}
              >
                <div className="flex justify-center items-end self-end text-center">
                  <h1 className="flex self-end text-white text-[15px] font-roboto font-[800]">
                    {each.country}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <ChevronRightIcon
          className="w-7 h-7 cursor-pointer ml-3 text-white"
          onClick={() => scroll("right")}
          containerStyle="self-center"
        />
      </div>
     <div className="flex justify-center items-center mt-64">
     <Listing data = {data}/>
     </div>
    </div>
  );
};

export default Dashboard;
