import s from './Modal.module.css';
import React from 'react';

function Modal({ children }) {
	return <div className={s.popup}>{children}</div>;
}

export default Modal;
