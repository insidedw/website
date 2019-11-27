import React from 'react';
import Profile from "./Profile";
import './../css/tab.css';
import TimelineBox from "./TimelineBox";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const exp = {
            title: 'Full-Stack Web Developer',

        };
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
                        <TimelineBox exp={exp}/>
                        <div className="box timeline">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src="image/wavlogo.png" alt="Image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>Full-Stack Web Developer</strong><br/>
                                            <small>2017 ~ Currently</small><br/>
                                            WAV Media<br/>
                                            Web, API, Real-time Processing, CMS, Batch <br/>
                                            Javascript, React JS, Java, Spring, MySQL, Redis, Storm
                                        </p>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                        <div className="box timeline">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src="image/ksign.png" alt="Image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>Back-End Developer</strong> <br/>
                                            KSign <br/>
                                            <small>2016 ~ 2017</small> <br/>
                                            SSO (Single Sign-On), EAM (Enterprise Asset Management)<br/>
                                            Java
                                        </p>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">

                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                        <div className="box timeline">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src="image/mnsu.jpg" className="isr" alt="Image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>Bachelor in Computer Information Technology</strong> <br/>
                                            Minnesota State University, Mankato <br/>
                                            <small>2014</small><br/>
                                            Minor degree in Mathematics
                                            <br/>
                                        </p>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">

                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                        <div className="box timeline">
                            <article className="media">
                                <div className="media-left">
                                    <i className='far fa-building'
                                       style={{fontSize: "64px", backgroundColor: "darkgray"}}></i>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>Student Consultant</strong><br/>
                                            <small>2013 ~ 2014</small><br/>
                                            Academic Computer Center
                                            <br/>
                                            Help customers who have a trouble with anything related to
                                            computers.<br/>
                                            IT Solutions on the first floor of Wissink Hall.
                                        </p>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">

                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                        <div className="box timeline">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64"
                                            style={{lineHeight: "100px", verticalAlign: "middle"}}>
                                        <img src="image/testenc.jpg" alt="Image"
                                             style={{lineHeight: "100px", verticalAlign: "middle"}}/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>Android Application Tester</strong><br/>
                                            <small>Summer of 2013</small><br/>
                                            TEST ENC <br/>
                                            Created thousands of test cases. <br/>
                                            Run functional, regression, and alpha testing.
                                            <br/>
                                        </p>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">

                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                        <div className="box timeline">
                            <article className="media">
                                <div className="media-left">
                                    <i className='far fa-building'
                                       style={{fontSize: "64px", backgroundColor: "darkgray"}}></i>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>Student Consultant</strong><br/>
                                            <small>2012 ~ 2013</small><br/>
                                            IT Solutions
                                            <br/>
                                            Help customers who have a trouble with anything related to
                                            computers. <br/>
                                        </p>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">

                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
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