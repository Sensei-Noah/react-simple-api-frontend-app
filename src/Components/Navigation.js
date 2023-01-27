import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from '@react-spring/web'
import NavigationMenu from "./NavigationMenu"
  
function Navigation() {
	const [showMenu, setShowMenu] = useState(false);

    const masktransitions = useTransition(showMenu, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menutransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)'},
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })
    
    // className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
    // mask className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full z-50"


	return (
		<nav>
			<span className="text-xl">
				<FontAwesomeIcon
					icon={faBars}
					onClick={() => setShowMenu(!showMenu)} // makes it so that the menu is toggleable
				/>
			</span>

            {
                masktransitions((style, item) => (
                    item &&
                    <animated.div 
                        style={style}
                        className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                ))
            }

            {
                menutransitions((style, item) => (
                    item &&
                    <animated.div 
                        style={style}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                    >

                        <NavigationMenu
                            closeMenu={() => setShowMenu(false)}
                        />
                    </animated.div>
                ))
            }
		</nav>
	);
}

export default Navigation;
