import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function ModalBox() {
	const [fullscreen, setFullscreen] = useState(true);
	const [show, setShow] = useState(false);

	function handleShow() {
		setFullscreen('sm-down');
		setShow(true);
	}

	useEffect(() => {
		const date = new Date();

		console.log(date.getMonth());

		if ((date.getMonth() == 11) & (date.getDate() == 10)) {
			handleShow();
		}
	}, []);

	return (
		<>
			<Modal
				show={show}
				fullscreen={fullscreen}
				onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Feliz Aniversário Abigail!!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Eu te amo Abigail, por mais que faz pouco tempo que estamos
					juntos você não tem ideia da diferencia que você fez na
					minha vida, antes mesmo de começarmos com esse
					relacionamento. Ao apagar as velinhas do seu bolo hoje, não
					se esqueça que eu te amo. Parabéns, Abigail. Que Deus te
					abençoe!
				</Modal.Body>
			</Modal>
		</>
	);
}
