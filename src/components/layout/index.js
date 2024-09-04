import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import LeftBar from "./leftbar";
import Button from "../button";
import { exploreFail } from "../../store/reducers/startSlice";

const Layout = ({ children }) => {
  const startSuccess = useSelector((state) => state.start.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Header />
      </div>
      {startSuccess ? (
        <div className="w-full overflow-y-auto h-screen bg-image flex justify-center items-center">
          <div>
            <h1 className="text-white font-bold text-[40px] m-5">
              Hyniva Welcomes you
            </h1>
            <div className="text-center">
              <Button
                type="outline"
                onClick={() => dispatch(exploreFail())}
                value={"Explore Trips"}
                className = {"!bg-[rgba(245, 242, 235, 1)] text-black border-white"}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex mt-12 left-0 right-0 top-4">
          <div className="h-screen overflow-auto border-r-2 w-[260px]">
            <LeftBar />
          </div>
          <div className="w-full overflow-y-auto h-screen ">
            <div className="">{children}</div>
            {/* <div className="items-end"><Footer /></div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
