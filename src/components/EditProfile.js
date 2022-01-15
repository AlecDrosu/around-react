import PopupWithForm from "./PopupWithForm.js";

export default function EditProfile() {
	return (
		<PopupWithForm
			name='edit'
			title='Edit Profile'
			submit='Save'
			isOpen={isOpen}
		>
			<label className='form__label'>
				<input
					type='text'
					name='name'
					id='name'
					className='form__input form__input_type_name'
					placeholder='Name'
					required
					minLength='2'
					maxLength='40'
				/>
				<span className='form__error' id='name-error'></span>
			</label>
			<label className='form__label'>
				<input
					type='text'
					name='job'
					id='job'
					className='form__input form__input_type_job'
					placeholder='About Me'
					required
					minLength='2'
					maxLength='200'
				/>
				<span className='form__error' id='about-error'></span>
			</label>
		</PopupWithForm>
	);
}
