import { Component } from 'react'

class App extends Component {
    render(){
		let {id, next} = this.props

        return(
            <section id={id}>
				<header className="major">
					<h1>Portfolio</h1>
					<p>A little single page by utif milkedori</p>
				</header>
				<div className="container">
					<ul className="actions special">
						<li><a onClick={() => document.getElementById(next).scrollIntoView({behavior: 'smooth'})} className="button primary scrolly">Begin</a></li>
					</ul>
				</div>
			</section>
        )
    }
}

export default App;