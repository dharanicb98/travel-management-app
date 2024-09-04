
const Listing = ({data}) => {
  return (
    <div className=''>
        {data?.map((each) => {
            const backgroundImage = require(`../../../assets/images/subPlaces/${each.backgroundImage}`)
            return (
            <div key={each.id} className="shadow-md bg-white">
                <img src={backgroundImage} alt={each.name} className="h-[100px]"/>
                <h1>{each.name}</h1>
            </div>
        )})}
    </div>
  )
}

export default Listing