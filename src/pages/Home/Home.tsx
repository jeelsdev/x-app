import InfoAttachment from "../../components/Home/components/InfoAttachment"
import Contact from "../../components/Home/Contact"
import Video from "../../components/Home/Video"
import Working from "../../components/Home/Working"
import Works from "../../components/Home/Works"

const Home = () => {
    return (
        <div className="">
            <div className="bg-black h-screen">
                <Video />
            </div>
            <div id="about" className="container">
                <Working />
            </div>
            <div>
                <InfoAttachment />
            </div>
            <div className="container py-5" id="blogs">
                <h3 className="text-2xl font-bold text-gray-800 lg:text-3xl py-3">Nuestros productos</h3>
                <Works />
            </div>
            <div className="my-10 mx-5 md:mx-1" id="contact">
                {/* <Timeline /> */}
                <Contact />
            </div>
        </div>
    )
}

export default Home
