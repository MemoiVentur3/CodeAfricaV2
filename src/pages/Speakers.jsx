import Navbar from "../components/Navbar";
import SpeakersExtended from "../components/Speakers";
import Footer from "../components/Footer";


export default function Speaker() {
    return (
        <div className="bg-[#020710]">
        <Navbar />
        <SpeakersExtended />
        <Footer />
        </div>
    );
    }