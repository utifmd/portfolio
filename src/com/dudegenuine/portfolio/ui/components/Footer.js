import React, { Component } from 'react';

// import resume from '../images/academy/resume.pdf'

class App extends Component {
    render(){
        return(
            <section id="footer">
				<div className="container">
					<header className="major">
						<h2>Get in touch</h2>
					</header>
					<form method="post" action="#">
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
							<div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
							<div className="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
							<div className="col-12">
								<ul className="actions special">
									<li><input type="submit" value="Send Message" className="primary" /></li>
								</ul>
								<ul className="actions special">
									<li><input type="button" value="Home" className="primary" onClick={() => window.scrollTo({top:0,left:0, behavior: "smooth"})} /></li>
								</ul>
							</div>
						</div>
					</form>
				</div>
				<footer>
					<ul className="icons">
						<li><a href="https://linkedin.com/in/utifmd/" target="_blank" rel="noreferrer" className="icon brands alt fa-linkedin"><span className="label">Linkedin</span></a></li>
						<li><a href="https://medium.com/@utifmd/" target="_blank" rel="noreferrer" className="icon brands alt fa-medium"><span className="label">Medium</span></a></li>
						<li><a href="https://github.com/utifmd/" target="_blank" rel="noreferrer" className="icon brands alt fa-github"><span className="label">Github</span></a></li>
						<li><a href="https://twitter.com/utifmd/" target="_blank" rel="noreferrer" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="https://instagram.com/utifmd/" target="_blank" rel="noreferrer" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="mailto:utifmd@gmail.com" target="_blank" rel="noreferrer" className="icon solid alt fa-envelope"><span className="label">Email</span></a></li>
						<li><a href="#" target="_blank" rel="noreferrer" className="icon solid alt fa-file-pdf"><span className="label">Resume</span></a></li>
					</ul>
				</footer>
			</section>
        )
    }
}

export default App;