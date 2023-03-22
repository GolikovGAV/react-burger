import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const modalRoot = document.querySelector('#modalRoot');

function Modal({ onClick, children }) {
	useEffect(() => {
		function closeByEscape(event) {
			if (event.key === 'Escape') {
				onClick();
			}
		}
		function closeByOverlay(event) {
			if (event.target.id === 'popup') {
				onClick();
			}
		}

		document.addEventListener('keydown', closeByEscape);
		document.addEventListener('click', closeByOverlay);
		return () => {
			document.removeEventListener('keydown', closeByEscape);
			document.removeEventListener('click', closeByOverlay);
		};
	}, []);

	return createPortal(<ModalOverlay>{children}</ModalOverlay>, modalRoot);
}

export default Modal;
