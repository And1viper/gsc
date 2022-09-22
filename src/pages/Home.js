import ContactSection from "../components/ContactSection";
import Button from "../components/Button";
import { Link } from "react-router-dom";

//Page Transition
import { motion } from "framer-motion";
import PageVariants from '../components/PageVariants';
import PageTransitions from '../components/PageTransitions';

//images

import CoherentLogo from "../images/coherentlogo1.svg";
import PrinterImg from "../images/viasticker.png";
import InntechLogo from "../images/inntech-main-logo.svg";
import ViaLanding from "../images/vialanding.png"

const Home = () => {
    return (
        <motion.div exit="out" animate="in" initial="initial" variants={PageVariants} transition={PageTransitions} className="container">
            {/* <div className="text-half text-more-than-half">
                
            </div> */}
            <img className="landing-img" src={ViaLanding}></img>

            <div className="text-half text-more-than-half padding-top-0">
                <div className="line line-blue"></div>
                
            </div>

            <div className="grid-more grid-more-maybe">
                <div className="round bg-purpose-img grid-span-column">
                    <p className="text-purpose">The transition to "green" energy, the introduction of "green" technologies is a growing vector of the global economy. Kazakhstan, despite the presence of huge natural resources in our bowels, including hydrocarbons, intends to actively develop renewable energy sources.</p>
                </div>
                <div className="drop-shape-left bg-dark-purple img-wrapper-1">
                    <div className="flex-img">
                        <img src={PrinterImg} alt="3d-printer-img"/>
                    </div>
                </div>
            </div>

            <div className="text-half text-more-than-half">
                <p><strong>Our mission</strong> is to increase financial literacy in Kazakhstan and increase people's awareness of sustainable finance.</p>
            </div>
            <div className="grid-more grid-more-mob">
                <div className="half-round-left bg-blue ">
                    <div className="wrapper-main-small">
                        <h2 className="text-header-medium">InnTech</h2>
                        <p>3D принтеры для создания персональных имплантов, пластиковых ортезов совместимых с телом. </p>
                        <img className="inntech-logo" src={InntechLogo} alt="inntech-logo"/>
                        <Link to="/inntech"><Button buttonStyle="btn-transparent" buttonSize="btn-medium">Подробнее</Button></Link>
                    </div>   
                </div>
                
                <div className="round bg-purple grid-span-column bg-purple1">
                    <div className="grid-2-columns">
                        <div className="coherent-wrapper">
                            <img className="flex-img" src={CoherentLogo} alt="tft-display"/>
                        </div>
                        <div className="coherent-text-wrapper">
                            <h2 className="text-header-medium">Coherent</h2>
                            <p>Производят компактные системы для сварки и резки мелких деталей. Отлично подходит для металлических изделий и лабораторий.</p>
                            <Link to="/coherent">
                                <Button buttonStyle="btn-transparent" buttonSize="btn-medium">Подробнее</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <ContactSection/>
        </motion.div>
    )
}

export default Home
