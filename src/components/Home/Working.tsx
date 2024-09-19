import Mision from "./components/Mision";
import Objetive from "./components/Objetive";
import Vision from "./components/Vision";

const Working = () => {

    return (
        <div className="w-full my-12 p-4">
            <div className="grid gap-14 md:grid-cols-3 md:gap-5">
                <Mision />
                <Vision />
                <Objetive />
            </div>
        </div>
    )

}

export default Working;
