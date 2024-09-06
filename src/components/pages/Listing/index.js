import { Link, useNavigate } from "react-router-dom"
import Dialog from "../../../utils/dialog"
import Button from "../../button"

const Listing = ({ data, handleCloseButton, isOpen }) => {
  const navigate = useNavigate();

  const handleBookpage = (id) => {
    navigate(`/places/${id}`, { state: { id: id } })
  }

  return (
    <div className='flex justify-center flex-wrap'>
      {data.length > 0 ? (
        data?.map((each) => {
          const backgroundImage = require(`../../../assets/images/subPlaces/${each.backgroundImage}`)
          return (
            <div key={each.id} className="shadow-md bg-white h-[40%] w-[40%] m-5  pb-4 rounded-md">
              <Link to={`/places/${each.id}`} className="">
                <img src={backgroundImage} alt={each.name} className="h-[200px] w-full rounded-tl-md rounded-tr-md" />
                <div className="px-4 py-4">
                  <h1 className="font-bold text-center">{each.name}</h1>
                  <p className="font-[600] text-gray-700">Services</p>
                  <ul className="text-gray-600 text-[13px]">
                    <li>Transportations</li>
                    <li>Accommodations</li>
                    <li>Expenses -Food ect..</li>
                  </ul>
                  <div className="text-right">
                    <Button onClick={() => handleBookpage(each.id)} value="Book Now" type="outline" className={"!px-2 !py-2 !text-[12px]"} />
                  </div>
                </div>
              </Link>
            </div>
          )
        })
      ) : (
        <Dialog
          closeModal={handleCloseButton}
          isOpen={isOpen}
          title="Upcoming Availability Notice"
          childrenClass={
            "w-[40%] h-[40%] p-6 rounded-md no-scrollbar dark-scrollbar"
          }
        >
          <div>
            <p>We’re excited to help you plan your next trip! Currently, trips to {data?.map(each => <span key={each.id}>{each.name}</span>)} are not available. However, we are working hard to bring you more options soon.</p>
            <p><span className="font-bold">Please check back later</span> for updated availability, or feel free to explore other exciting destinations in the meantime.</p>
          </div>
          <div className="flex justify-between mt-6">
            <Button type="outline" value="Cancel" onClick={handleCloseButton} />
            <Button type="secondary" value="OK" onClick={handleCloseButton} />
            {/* <Button buttonType="submit" value={""} type="secondary" /> */}
          </div>
        </Dialog>
      )
      }
    </div>
  )
}

export default Listing