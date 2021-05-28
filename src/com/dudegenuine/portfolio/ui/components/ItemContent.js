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
					<div className="content">
						{ logo != null && // className={page != 0 && "img-wrapper"}
						<div><img
							className={page != 0 ? "content project-item" : "logo"} style={{borderRadius: 5}}
							src={page >= logo.length ? this.setState({page:0}) : logo[page]} 
							onClick={() => this.setState({page: page +1})}/><br /><br />
						</div>
						}
						<header className="major">
							<h2>{title}</h2>
						</header>
						{ banner != null && 
							<div><ModalImage className="content"
								small={banner.m}
								large={banner.l}
								alt={title}/><br /><br /></div> 
						}
						<p>{desc}</p>
					</div>
					<a onClick={() => document.getElementById(next).scrollIntoView({behavior: 'smooth'})} className="goto-next">Next</a>
				</div>
			</section>
        )
    }
}

export default App;