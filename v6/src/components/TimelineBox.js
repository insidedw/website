import React from 'react';

class TimelineBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {exp} = this.props;
        return <div className="box timeline">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={exp.image} alt="Image"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{exp.title}</strong><br/>
                            <small>{exp.period}</small><br/>
                            {exp.location}<br/>
                            {exp.desc}
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                        </div>
                    </nav>
                </div>
            </article>
        </div>;
    }
}

export default TimelineBox;