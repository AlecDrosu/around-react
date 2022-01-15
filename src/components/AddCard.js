import PopupWithForm from "./PopupWithForm.js";

export default function AddCard() {
	return (
		<PopupWithForm name='add' title='New Place' submit='Create' isOpen={isOpen}>
			<label className='form__label'>
				<input
					type='text'
					name='name'
					id='title'
					className='form__input form__input_type_title'
					placeholder='Title'
					required
					minLength='1'
					maxLength='30'
				/>
				<span className='form__error' id='title-error'></span>
			</label>
			<label className='form__label'>
				<input
					type='url'
					name='link'
					id='link'
					className='form__input form__input_type_link'
					placeholder='Image Link'
					required
				/>
				<span className='form__error' id='link-error'></span>
			</label>
		</PopupWithForm>
	);
}
