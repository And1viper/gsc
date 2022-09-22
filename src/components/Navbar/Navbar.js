import { useState } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';
//import NavRequest from './NavRequest';
import Button from '../Button';

import Logo from '../../images/gsclogo.svg';
import { GoThreeBars  } from 'react-icons/go';
import { ImCross  } from 'react-icons/im';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const onResizeSidebar = () =>{
        if(window.innerWidth > 700){
            setSidebar(false);
        }
    }

    window.addEventListener('resize', onResizeSidebar);

    return (
        <header>
            <div className={sidebar ? "overlay active" : "overlay"}></div>

            
            <div className="nav-mob">
                <p className="phone phone-mob">8 775 310-94-76</p>
                <Button buttonSize="btn-imgsize" onClick={showSidebar}><GoThreeBars/></Button>
            </div>
            
            <div className={sidebar ? "nav-menu active" : "nav-menu"}>
                <NavLinks onClick={showSidebar}/>

                <Link className=" nav-logo" to="/"><img className="logo-img" src={Logo} alt="garysh-logo"/></Link>

                <div className="nav-request">
					<p className="nav-link">Email:</p>
                    <p className="phone">gsassociation@gmail.com</p>
                </div>

                <Button buttonStyle="btn-close" buttonSize="btn-medium" onClick={showSidebar}><ImCross/></Button>
            </div>

        </header>
    )
}

export default Navbar
