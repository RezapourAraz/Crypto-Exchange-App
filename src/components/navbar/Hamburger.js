import React, { useState } from 'react';
import Navbar from './Navbar';
// Styles
import styled from 'styled-components';

const Div = styled.div`
        display: none;

        @media ( max-width: 768px ) {
        top: 17px;
        right: 20px;
        display: block;
        z-index: 5;
        cursor: pointer;
        div {
            width: 2.2rem;
            height: .4rem;
            background: #fff;
            margin: 5px 0;
            border-radius: 10px;
            transform-origin: 1px;
            transition: all .3s linear; 
            &:nth-child(1) {
                transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)" };
            }
            &:nth-child(2) {
                transform: ${({ open }) => open ? "translateX(150%)" : "translateX(0)" };
                opacity: ${({ open }) => open ? "0"  : "1"};
            }
            &:nth-child(3) {
                transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)" };
            }
        }
`;

const Hamburger = () => {
    
    const [ open, setOpen ] = useState(false);

    const clickHandler = () => {
        setOpen(!open);
    }

    return (
        <>
            <Div open={open} onClick={clickHandler}>
                <div></div>
                <div></div>
                <div></div>
            </Div>
            <Navbar open={open} />
        </>
    );
};

export default Hamburger;