import { useDispatch, useSelector } from "react-redux";
import Listing from "../../components/pages/Listing";
import { ChevronRightIcon } from "../../icons";
import { useEffect, useRef, useState } from "react";
import { filterByCountryId, setInitialData } from "../../store/reducers/placesSlice";

const Dashboard = () => {
  const scrollRef = useRef(null);
  const [popup , setPopUp] = useState(false)
  const [clickId, setClickId] = useState([])
  const dispatch = useDispatch();
  const data = useSelector((state) => state.places.destination)
  console.log(data , "this is redux")


  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 200;
    } else {
      scrollRef.current.scrollLeft += 200;
    }
  };

  useEffect(() => {
    dispatch(setInitialData());
  }, [dispatch]);


const handleFind = (id) => {
  dispatch(filterByCountryId(id)); 
  setPopUp(true)
  setClickId(id)
};


  const handleCloseButton = () => {
    setPopUp(false)
  }

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
          {data?.map((each, index) => {
            const backgroundImage = require(`../../assets/images/places/${each.backgroundImage}`);
            return (
              <div
                key={each.id}
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                }}
                className={`rounded-md h-[140px] w-[140px] flex-shrink-0 pt-20 bg-cover ${each.id === clickId && "border-solid border-[3px]"}`}
                onClick={() => handleFind(each.id)}
              >
                <div className="flex justify-center items-end self-end text-center">
                  <h1 className="flex self-end text-white text-[15px] font-roboto font-[800] hover:text-[17px]">
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
      <div className="flex justify-start items-center mt-64">
        <Listing handleCloseButton = {handleCloseButton}  isOpen={popup} />
      </div>
    </div>
  );
};

export default Dashboard;