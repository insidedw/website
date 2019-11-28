import React from 'react';
import Profile from "./Profile";
import './../css/tab.css';
import TimelineBox from "./TimelineBox";
import timelineData from './../data/timeline';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timelines: [],
        };
    }

    componentDidMount() {
        this.initTimelineData();
    }

    initTimelineData() {
        this.setState({
            timelines: [...this.state.timelines, ...timelineData.result.data],
        });
    }

    render() {
        const {timelines} = this.state;
        return <section className="section">
            <div className="container is-fullhd">
                <div className="columns">
                    <div className="column is-one-fifths">
                        <Profile/>
                    </div>
                    <div className="column is-four-fifths">
                        <div className="tabs">
                            <ul>
                                <li><a>Timeline</a></li>
                                <li><a>Projects</a></li>
                                <li><a>Videos</a></li>
                            </ul>
                        </div>
                        {timelines.map(t => ( <TimelineBox exp={t} key={t.period}/>))}

                        <div className="box projects" style={{display: "none"}}>
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src="image/wavlogo.png" alt="Image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>Converted Web from jQuery to React JS</strong> <br/>
                                            <small>Aug 2019 ~ Oct 2019</small> <br/>
                                        </p>

                                        <div className="columns">
                                            <div className="column">
                                                <figure className="image">
                                                    <img src="image/wav_web_screenshots/home.png" alt="Image"/>
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <figure className="image">
                                                    <img src="image/wav_web_screenshots/artist_dashboard.png"
                                                         alt="Image"/>
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <figure className="image">
                                                    <img src="image/wav_web_screenshots/video_end.png" alt="Image"/>
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <figure className="image">
                                                    <img src="image/wav_web_screenshots/video_manage.png" alt="Image"/>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column">
                                                <figure className="image">
                                                    <img src="image/wav_web_screenshots/insight_content.png"
                                                         alt="Image"/>
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <figure className="image">
                                                    <img src="image/wav_web_screenshots/insight_earning.png"
                                                         alt="Image"/>
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <figure className="image">
                                                    <img src="image/wav_web_screenshots/artist_edit.png" alt="Image"/>
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <figure className="image">
                                                    <img src="image/wav_web_screenshots/video_manage.png" alt="Image"/>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column">
                                                <figure className="image">
                                                    <img src="image/wav_web_screenshots/upload_end.png" alt="Image"/>
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <figure className="image">
                                                    <img src="image/wav_web_screenshots/upload_video_end.png"
                                                         alt="Image"/>
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <figure className="image">
                                                    <img src="image/wav_web_screenshots/upload_audio_visual_end.png"
                                                         alt="Image"/>
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <figure className="image">
                                                    <img src="image/wav_web_screenshots/upload_audio_final_end.png"
                                                         alt="Image"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
    }
}

export default Container;