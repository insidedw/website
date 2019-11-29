import React from 'react';
class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const cardStyle = {
            boxShadow: "none",
        };

        return <div className="card" style={cardStyle}>
            <div className="card-content">
                <div className="content">
                    <strong>DAEWOONG KIM</strong>
                    <br/>
                    <small>Full-Stack Web Developer</small>
                    <br/>
                    Javascript, React JS, Java, Spring, MySQL, Redis, Storm
                </div>
                <a href="https://www.instagram.com/sh_chuck/">
                    <figure className="image is-32x32" style={{float: "left"}}>
                        <img
                            src={'/image/insta.png'}
                            alt='instagram'/>
                    </figure>
                </a>
                <a href="https://github.com/insidedw" style={{float: "left", paddingLeft: "3px"}}>
                    <figure className="image is-32x32">
                        <img src={"/image/github-sign.png"}
                             alt='github'/>
                    </figure>
                </a>
            </div>
        </div>;
    }
}

export default Profile;
