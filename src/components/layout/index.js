import Header from "./header";
import LeftBar from "./leftbar";

const Layout = ({ children }) => {

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex mt-12 left-0 right-0 top-4">
        <div className="h-screen overflow-auto border-r-2 w-[260px]">
          <LeftBar />
        </div>
        <div className="w-full overflow-y-auto h-screen ">
          <div className="">{children}</div>
          {/* <div className="items-end"><Footer /></div> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;