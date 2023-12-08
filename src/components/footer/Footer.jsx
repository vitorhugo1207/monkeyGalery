import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
	return (
		<MDBFooter bgColor='light' className='text-center text-lg-left'>
			<div
				className='text-center p-3'
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <p className='text-dark'>Made with &#10084; to my lover</p>
                
				&copy; {new Date().getFullYear()}
			</div>
		</MDBFooter>
	);
}
