import Mision from "./components/Mision";
import Vision from "./components/Vision";

const Working = () => {

    return (
        <div className="w-full my-12 mt-24 lg:mt-16">
            <div className="grid gap-1 lg:grid-cols-2 lg:gap-2">
                <Mision />
                <Vision />
            </div>
        </div>
    )

}

export default Working;
