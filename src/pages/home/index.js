import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { exploreFail } from "../../store/reducers/startSlice";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const startSuccess = useSelector((state) => state.start.isAuthenticated);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  return (
    <div className="w-full overflow-y-auto h-screen bg-image flex justify-center items-center">
      <div>
        <h1 className="text-white font-bold text-[40px] m-5">
          Hyniva Welcomes you
        </h1>
        <div className="text-center">
          <Button
            type="outline"
            onClick={() => {
                dispatch(exploreFail())
                navigate("/places")
            }}
            value={"Explore Trips"}
            className={"!bg-[rgba(245, 242, 235, 1)] text-black border-white"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
