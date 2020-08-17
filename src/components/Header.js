import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Menu, Icon } from 'semantic-ui-react'

import '../assets/styles/header.css'

export default function Header(props) {

    const { activeItem } = props;

    const [toggle, setToggle] = useState(false)
    const handleItemClick = (e, { name }) => {
        props.setActiveItem(name)
    };

    return (
        <>
            <div className="header-container">
                <h2 className="logo"><Link to="/"> CoffeeWeb</Link></h2>
                <div className="nav">
                    <Menu inverted pointing secondary>
                        <Menu.Item
                            name='home'
                            as={Link}
                            to="/"
                            active={activeItem === 'home'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='pricing'
                            as={Link}
                            to="/pricing"
                            active={activeItem === 'pricing'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='contact'
                            as={Link}
                            to="/contact"
                            active={activeItem === 'contact'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='about'
                            as={Link}
                            to="/about"
                            active={activeItem === 'about'}
                            onClick={handleItemClick}
                        />
                    </Menu>
                </div>
                <div className="hamburger">
                    <Icon name="bars" size="large" onClick={() => setToggle(!toggle)} />

                    {/* {
                        toggle ?
                            <Icon name="close" size="large" onClick={() => setToggle(!toggle)} />
                            :
                            <Icon name="bars" size="large" onClick={() => setToggle(!toggle)} />

                    } */}
                </div>
            </div>

            <div className={toggle ? "nav-collapse open" : "nav-collapse close"}>
                <Menu inverted pointing secondary>
                    <Menu.Item
                        name='home'
                        as={Link}
                        to="/"
                        active={activeItem === 'home'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='pricing'
                        as={Link}
                        to="/pricing"
                        active={activeItem === 'pricing'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='contact'
                        as={Link}
                        to="/contact"
                        active={activeItem === 'contact'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='about'
                        as={Link}
                        to="/about"
                        active={activeItem === 'about'}
                        onClick={handleItemClick}
                    />
                </Menu>
            </div>

        </>
    )
}
