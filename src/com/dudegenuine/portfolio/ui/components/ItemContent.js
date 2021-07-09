import { Component } from 'react'
import ModalImage , { } from 'react-modal-image'

class App extends Component {

	constructor(){
		super()
		this.state = {
			page: 0
		}
	}
	
    render(){
		let 
			{ id, title, desc, logo, banner, background, next } = this.props,
			{ page } = this.state

        return(
            <section id={id} className="main special">
				<div className="container">
					<div className={`content ${logo && 'project-item'}`} onClick={() => logo && this.setState({page: page +1})}>
						{ logo != null &&
						<div>
							<img className={page != 0 ? "content project-item" : "logo"} style={{borderRadius: 5}} src={page >= logo.length ? this.setState({page:0}) : logo[page]}/><br /><br />
							{/* <ul>
								<img style={{width:24, height: 24, margin:6}} src={logo[page]}></img>
								<li></li>
							</ul> */}
						</div>
						}
						<header className="major">
							<h2>{title}</h2>
						</header>
						{ banner != null && 
							<div><ModalImage className="content"
								small={banner.m}
								large={banner.l}
								alt={title}/><br /><br />
							</div> 
						}
						<p>{desc}</p>
					</div>
					<a className="goto-next scrolly" onClick={() => document.getElementById(next).scrollIntoView({behavior: 'smooth'})}>Next</a>
				</div>
			</section>
        )
    }
}

export default App;