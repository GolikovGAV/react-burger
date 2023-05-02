import cn from 'classnames';
import { createPortal } from 'react-dom';
import { ReactNode, useEffect } from 'react';

import s from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.querySelector('#modalRoot') as HTMLElement;

function Modal({
	onClick,
	children
}: {
	onClick: () => void;
	children: ReactNode;
}) {
	useEffect(() => {
		function closeByEscape(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				onClick();
			}
		}
		function closeByOverlay(e: MouseEvent) {
			if ((e.target as Element).id === 'popup') {
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
			<button
				aria-label='Закрыть окно'
				className={cn(s.close)}
				onClick={onClick}
			>
				<CloseIcon type='primary' />
			</button>
			{children}
		</ModalOverlay>,
		modalRoot
	);
}

export default Modal;
