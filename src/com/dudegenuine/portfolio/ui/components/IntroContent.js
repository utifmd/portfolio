import { Component } from 'react'

class App extends Component {
    render(){
		let { id, title, desc, cover, list, next } = this.props

        return(
            <section id={id} className="main special">
				<div className="container">
					<div className="content">
						<header className="major">
							<h2>{title}</h2>
						</header>
						{ cover != null ? <img src={cover} /> : null }
						<p>{desc}</p>
						<ul className="icons-grid">
						{ list != null ? list.map(item => 
							<li>
								<span className={`icon solid major fa-${item[1]}`}></span>
								<h3>{item[0]}</h3>
							</li>
						) : null }
						</ul>
					</div>
					<a onClick={() => document.getElementById(next).scrollIntoView({behavior: 'smooth'})} className="goto-next scrolly">Next</a>
				</div>
			</section>
        )
    }
}

export default App;