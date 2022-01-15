function PopopWithForm() {
	// setup the props
	this.props = {
		title: "",
		name: "",
		submit: "",
		// the names are edit, edit-pic, add, confirm
	};
	return (
		<section className={`modal modal_type_${props.name} ${isOpen && 'modal_is-open'}`} id='first__modal'>
			<div className='modal__body'>
				<button type='button' className='modal__close-btn'></button>
				<h2 className='modal__title'>{props.title}</h2>
				<form method='GET' className='form' name='edit' noValidate>
                    {children}
					<button type='submit' className='form__submit'>
						{props.button}
					</button>
				</form>
			</div>
			<div className='modal__overlay'></div>
		</section>
	);
}
