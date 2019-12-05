import React from 'react';

const Footer = () => {
	return (
		<footer className="footer" style={{
			backgroundColor : "#ffdd57",
			padding : "1rem 1.5rem 1rem"
		}}>
			<div className="content has-text-centered">
				<p>
					<strong>This website</strong> by DAEWOONG KIM. <br/>
					The source code is licensed <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.  <br/>
					<a href="https://www.vecteezy.com/free-vector/awards">Awards Vectors by Vecteezy</a> <br/>
					<a href="https://www.vecteezy.com/free-vector/building">Building Vectors by Vecteezy</a>  <br/>
				</p>

				<p>
					<a href="https://bulma.io">
						<img src={"/image/made-with-bulma--semiblack.png"} alt="Made with Bulma" width="128"
							 height="24"/>
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;