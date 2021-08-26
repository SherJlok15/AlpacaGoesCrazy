import React, { useState } from 'react';
import Modal from 'react-modal';

import { addNewContinent } from '../util/helpFunc';

import { useMainDispatch } from '../context/main';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement('body');

export default function ModalAddContent() {
	const dispatch = useMainDispatch()

	// modal logick
	let subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		subtitle.style.color = 'green';
	}

	function closeModal() {
		setIsOpen(false);
		setContinentSettings({
			depthTree: '',
			numberOfchildren: ''
		})
		setError('')
	}

	// modal logick />

	let [continentSettings, setContinentSettings] = useState({
		depthTree: '',
		numberOfchildren: ''
	})

	let [error, setError] = useState('')

	return (
		<div className="add-content-modal">
			<button onClick={openModal}>Add content</button>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<div className="add-content-modal__title">
					<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Новий континент</h2>
					<button onClick={closeModal}>close</button>
				</div>

				<form className="add-content-modal__form"
				onSubmit={(e) => {
					e.preventDefault();
					console.log()
					if (isNaN(+continentSettings.numberOfchildren)) {
						setError('Кількість вложених елементів має бути Число')
					} else {
						setError('')
					}

					if (!isNaN(+continentSettings.numberOfchildren) && continentSettings.depthTree !== '') {
						let newContinent = addNewContinent(+continentSettings.depthTree, +continentSettings.numberOfchildren);
						dispatch({ type: "SET_NEW_CONTINENT", payload: newContinent })
						closeModal()
					}
				}}>
					<div className='add-content-modal__depthTree-change'>
						<p>Глубина</p>
						<label>

							<input type="radio" value="0" name="depthTree" onClick={(e) => {
								setContinentSettings({
									...continentSettings,
									depthTree: e.target.value
								})
							}} />
							<span>Пустий континент</span>
						</label>

						<label>

							<input type="radio" value="1" name="depthTree" onClick={(e) => {
								setContinentSettings({
									...continentSettings,
									depthTree: e.target.value
								})
							}} />
							<span>Континент з країнами</span>
						</label>

						<label>

							<input type="radio" value="2" name="depthTree" onClick={(e) => {
								setContinentSettings({
									...continentSettings,
									depthTree: e.target.value
								})
							}} />
							<span>Континент з країнами і мовами</span>
						</label>
					</div>

					<div className="add-content-modal__numberOfchildren-change">

						<label>
							<span>Кількість вложених елементів</span>
							<input type="text" value={continentSettings.numberOfchildren}
								onChange={(e) => {
									setContinentSettings({
										...continentSettings,
										numberOfchildren: e.target.value
									})
								}} />
						</label>
					</div>
					<div className="add-content-modal__error">
						{error.trim() !== '' ? error : ''}
					</div>
					<button type="submit"
						disabled={
							continentSettings.depthTree.trim() !== '' &&
								continentSettings.numberOfchildren.trim() !== '' ? false : true
						}
					>Add new continent</button>
				</form>
			</Modal>
		</div>
	)
}