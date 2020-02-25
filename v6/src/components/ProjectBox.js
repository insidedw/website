import React from 'react';

class ProjectBox extends React.Component {
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
						<img src={`${exp.image}`} alt={exp.location}/>
					</figure>
				</div>
				<div className="media-content">
					<div className="content">
						<p>
							<strong>{exp.title}</strong><br/>
							{exp.location}<br/>
							<small>{exp.period}</small><br/>
							<br/>
							<strong>Description</strong><br/>
							{exp.desc}
							{exp.labels != null ? <ul>
								{exp.labels.map(label => <li>{label}</li>)}
							</ul> : null
							}

							<br/>

							{exp.achievements != null && exp.achievements.length > 0 ? <strong>Achievement</strong> : null
							}

							{exp.achievements != null ? <ul>
								{exp.achievements.map(ac => <li>{ac}</li>)}
							</ul> : null
							}
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

export default ProjectBox;