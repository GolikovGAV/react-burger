import React from 'react';
import s from './ModalOverlay.module.css';

function ModalOverlay({ children }) {
	return (
		<section id='popup' className={s.popup}>
			<div className={s.container}> {children}</div>
		</section>
	);
}

export default ModalOverlay;
