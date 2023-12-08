import 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

export default function Header() {
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-transparent z-3' id='blurBackground'>
				<div className='container-fluid'>
					<a className='navbar-brand text-light' href='/'>
						Monkey Gallery
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'>
                        
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'></div>
				</div>
			</nav>
		</>
	);
}
