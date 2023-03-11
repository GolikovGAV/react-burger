import React, { useEffect } from 'react';
import s from './ModalOverlay.module.css';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modalRoot');

function ModalOverlay({ onClick, children }) {
	useEffect(() => {
		function closeByEscape(event) {
			if (event.key === 'Escape') {
				onClick();
			}
		}

		document.addEventListener('keydown', closeByEscape);
		return () => {
			document.removeEventListener('keydown', closeByEscape);
		};
	}, []);

	return createPortal(
		<section className={s.container}>{children}</section>,
		modalRoot
	);
}

export default ModalOverlay;
