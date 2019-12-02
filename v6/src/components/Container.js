import React from 'react';
import Profile from "./Profile";
import './../css/tab.css';
import TimelineBox from "./TimelineBox";
import timelineData from './../data/timeline';
import projectData from './../data/project';
import ProjectBox from "./ProjectBox";

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timelines : [],
			projects : [],
			currentTab: 'timeline',
		};

		this.changeTab = this.changeTab.bind(this);
	}

	componentDidMount() {
		this.initTimelineData();
	}

	initTimelineData() {
		this.setState({
			timelines : [...this.state.timelines, ...timelineData.result.data],
			projects : [...this.state.projects, ...projectData.result.data],
		});
	}

	changeTab(tab) {
		this.setState({
			currentTab: tab,
		})
    }

	render() {
		const {timelines, projects, currentTab} = this.state;
		return <section className="section">
			<div className="container is-fullhd">
				<div className="columns">
					<div className="column is-one-fifths">
						<Profile/>
					</div>
					<div className="column is-four-fifths">
						<div className="tabs">
							<ul>
								<li className={currentTab === 'timeline' ? 'is-active' : ''}><a onClick={() => this.changeTab('timeline')}>Timeline</a></li>
								<li className={currentTab === 'project' ? 'is-active' : ''}><a onClick={() => this.changeTab('project')}>Projects</a></li>
								<li className={currentTab === 'video' ? 'is-active' : ''}><a onClick={() => this.changeTab('video')}>Videos</a></li>
							</ul>
						</div>
						{currentTab === 'timeline' ? timelines.map(t => (<TimelineBox exp={t} key={t.period}/>)) : null}
						{currentTab === 'project' ? projects.map(t => (<ProjectBox exp={t} key={t.period}/>)) : null}
						<div className="box projects" style={{display : "none"}}>
							<article className="media">
								<div className="media-left">
									<figure className="image is-64x64">
										<img src="image/wavlogo.png"/>
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
													<img src="image/wav_web_screenshots/home.png"/>
												</figure>
											</div>
											<div className="column">
												<figure className="image">
													<img src="image/wav_web_screenshots/artist_dashboard.png"
													/>
												</figure>
											</div>
											<div className="column">
												<figure className="image">
													<img src="image/wav_web_screenshots/video_end.png"/>
												</figure>
											</div>
											<div className="column">
												<figure className="image">
													<img src="image/wav_web_screenshots/video_manage.png"/>
												</figure>
											</div>
										</div>
										<div className="columns">
											<div className="column">
												<figure className="image">
													<img src="image/wav_web_screenshots/insight_content.png"
													/>
												</figure>
											</div>
											<div className="column">
												<figure className="image">
													<img src="image/wav_web_screenshots/insight_earning.png"
													/>
												</figure>
											</div>
											<div className="column">
												<figure className="image">
													<img src="image/wav_web_screenshots/artist_edit.png"/>
												</figure>
											</div>
											<div className="column">
												<figure className="image">
													<img src="image/wav_web_screenshots/video_manage.png"/>
												</figure>
											</div>
										</div>
										<div className="columns">
											<div className="column">
												<figure className="image">
													<img src="image/wav_web_screenshots/upload_end.png"/>
												</figure>
											</div>
											<div className="column">
												<figure className="image">
													<img src="image/wav_web_screenshots/upload_video_end.png"
													/>
												</figure>
											</div>
											<div className="column">
												<figure className="image">
													<img src="image/wav_web_screenshots/upload_audio_visual_end.png"
													/>
												</figure>
											</div>
											<div className="column">
												<figure className="image">
													<img src="image/wav_web_screenshots/upload_audio_final_end.png"
													/>
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