import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    padding: 10px;
    ul {
        display: flex;
        padding: 5px;
        li{
            margin: 0 10px;
            a {
                color: #dfddfc;
            }
            a:hover {
                color: #FF5959;
            }
        }
    }
    @media (max-width: 768px ) {
        position: fixed;
        top: 0;
        right: 0;
        background: #243B55;
        width: 300px;
        height: 100Vh;
        transition: all .3s linear; 
        transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)" };
        ul {
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
            li {
                margin: 20px 0;
            }
        }
    }

`;

const Navbar = ({open}) => {

    return (
        <Nav open={open}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/coins">Coins</Link></li>
                <li><Link to="/exchange">ExChange</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </Nav>
    );
};

export default Navbar;