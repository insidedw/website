import React from 'react';
import Typewriter from "typewriter-effect";

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <section className="hero is-medium is-warning">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Hi there!
                    </h1>
                    <h2 className="subtitle">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('I am DAEWOONG KIM.')
                                    .pauseFor(2500)
                                    .deleteChars(13)
                                    .typeString('a full-stack developer.')
                                    .pauseFor(2500)
                                    .deleteChars(23)
                                    .typeString('happy because I do what I want.')
                                    .pauseFor(2500)
                                    .start();
                            }}
                        />
                    </h2>
                </div>
            </div>
        </section>;
    }
}

export default Hero;