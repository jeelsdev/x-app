import InfoAttachment from "../../components/Home/components/InfoAttachment"
import Timeline from "../../components/Home/components/Timeline"
import Video from "../../components/Home/Video"
import Working from "../../components/Home/Working"

const Home = () => {
    return (
        <div className="">
            <div className="bg-gray-300 h-screen">
                <Video />
            </div>
            <div>
                <Working />
            </div>
            <InfoAttachment />
            <div className="my-10 mx-5 md:mx-1">
                <Timeline />
            </div>
        </div>
    )
}

export default Home
