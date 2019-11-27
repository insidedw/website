import React from 'react';
import bulma from '../image/made-with-bulma--semiblack.png';

const Footer = () => {
    return (
        <footer className="footer" style={{backgroundColor: "#ffdd57", padding: "1rem 1.5rem 1rem"}}>
            <div className="content has-text-centered">
                <p>
                    <a href="https://bulma.io">
                        <img src={bulma} alt="Made with Bulma" width="128"
                             height="24"/>
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;