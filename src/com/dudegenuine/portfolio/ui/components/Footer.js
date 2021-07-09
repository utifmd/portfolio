import React, { Component } from 'react';

class App extends Component {

	sendMail = () => {
		let 
			sender = this.getElemValue('name'), 
			email = this.getElemValue('email'), 
			message = this.getElemValue('message')
		
		if(sender !== '' && email !== '' && message !== ''){
			window.location.href = `mailto:utifmd@gmail.com?subject=About your portfolio - ${sender} (${email})&body=${message}`
			sender = ""; email = ""; message = ""
		}
	}

	getElemValue = (id) => document.getElementById(id).value

    render(){
        return(
            <section id="footer">
				<div className="container">
					<header className="major">
						<h2>Get in touch</h2>
					</header>
					<form>
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" required/></div>
							<div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" required/></div>
							<div className="col-12"><textarea name="message" id="message" placeholder="Message" rows="4" required></textarea></div>
							<div className="col-12">
								<ul className="actions special"><li>
									<button type="submit" className="primary" onClick={this.sendMail}>Send Message</button>
								</li></ul>
								<ul className="icons container-pjct">
									<li>
										<a onClick={() => document.getElementById('who_i_am').scrollIntoView({behavior: 'smooth'})} className="icon solid alt fa-home"><span className="label">Home</span></a>
									</li>
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
						<li><a href="https://stackoverflow.com/users/6235678/utif-milkedori" target="_blank" rel="noreferrer" className="icon brands alt fa-stack-overflow"><span className="label">StackOverflow</span></a></li>
						<li><a href="https://twitter.com/utifmd/" target="_blank" rel="noreferrer" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="https://instagram.com/utifmd/" target="_blank" rel="noreferrer" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="mailto:utifmd@gmail.com" target="_blank" rel="noreferrer" className="icon solid alt fa-envelope"><span className="label">Email</span></a></li>
						<li><a href="https://drive.google.com/file/d/1VfYR-yoGHx-mT9g6qXnAPb3NlFhKJzVd/view?usp=sharing" target="_blank" rel="noreferrer" className="icon solid alt fa-external-link-alt"><span className="label">Resume</span></a></li>
					</ul>
				</footer>
			</section>
        )
    }
}

export default App;