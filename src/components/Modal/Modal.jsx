import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import s from './Modal.module.css';
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

	return createPortal(
		<ModalOverlay>
			<button className={cn(s.close)} onClick={onClick}>
				<CloseIcon />
			</button>
			{children}
		</ModalOverlay>,
		modalRoot
	);
}

Modal.propTypes = {
	onClick: PropTypes.func.isRequired,
	children: PropTypes.object.isRequired
};

export default Modal;
