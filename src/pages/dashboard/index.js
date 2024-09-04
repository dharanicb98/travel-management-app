import destination from "../../constants/destination.json";
import { ChevronRightIcon } from "../../icons";
import { useRef } from "react";

const Dashboard = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 200;
    } else {
      scrollRef.current.scrollLeft += 200;
    }
  };

  return (
    <div
      className="flex h-screen w-screen overflow-x-auto bg-cover"
      style={{
        backgroundImage: `url('https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg3.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center h-[30%] mt-10 bg-fixed">
        <ChevronRightIcon
          className={
            "w-7 h-7 cursor-pointer rotate-180 self-center mr-3 text-white"
          }
          onClick={() => scroll("left")}
          containerStyle="self-center"
        />
        <div
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-auto space-x-4 scrollbar-hide w-[60%]"
        >
          {destination.map((each, index) => {
            const backgroundImage = require(`../../assets/images/places/${each.backgroundImage}`);
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                }}
                className="rounded-md h-[140px] w-[140px] flex-shrink-0 pt-20 bg-cover"
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
          className={"w-7 h-7 cursor-pointer ml-3 text-white"}
          onClick={() => scroll("right")}
          containerStyle="self-center"
        />
      </div>
    </div>
  );
};

export default Dashboard;
