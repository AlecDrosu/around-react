import PopupWithForm from "./PopupWithForm.js";

export default function EditAvatar() {
	return (
		<PopupWithForm
			name='edit'
			title='Change profile picture'
			submit='Save'
			isOpen={isOpen}
		>
			<label className='form__label'>
				<input
					type='url'
					name='avatar'
					id='avatar'
					className='form__input'
					placeholder='Image Link'
					required
				/>
				<span className='form__error' id='avatar-error'></span>
			</label>
		</PopupWithForm>
	);
}
