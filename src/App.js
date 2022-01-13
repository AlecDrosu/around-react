import logo from "./logo.svg";
// import "./App.css";

function App() {
	return (
		<body className='page'>
			<header className='header'>
				<img
					src="<%=require('./images/Vector.svg')%>"
					alt='AroundUS'
					className='header__logo'
				/>
			</header>
			<main className='main'>
				<section className='profile'>
					<div className='profile__holder'>
						<div className='profile__image-box'>
							<img
								src="<%=require('./images/man.jpg')%>"
								alt='Man in Hat'
								className='profile__avatar'
							/>
							<button className='profile__avatar-edit'></button>
						</div>
						<div className='info'>
							<div className='title'>
								<h1 className='title__name'>Jacques Cousteau</h1>
								<button type='button' className='title__button'></button>
							</div>
							<p className='info__job'>Explorer</p>
						</div>
					</div>

					<button
						type='button'
						className='profile__button'
						id='form-button'
					></button>
				</section>
				<section className='elements'></section>

				<section className='modal modal_type_edit' id='first__modal'>
					<div className='modal__body'>
						<button type='button' className='modal__close-btn'></button>
						<h2 className='modal__title'>Edit Profile</h2>
						<form method='GET' className='form' name='edit' noValidate>
							<label className='form__label'>
								<input
									type='text'
									name='name'
									id='name'
									className='form__input'
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
									name='about'
									id='about'
									className='form__input'
									placeholder='About me'
									required
									minLength='2'
									maxLength='200'
								/>
								<span className='form__error' id='about-error'></span>
							</label>

							<button type='submit' className='form__submit'>
								Save
							</button>
						</form>
					</div>
					<div className='modal__overlay'></div>
				</section>

				<section className='modal modal_type_edit-pic'>
					<div className='modal__body'>
						<button type='button' className='modal__close-btn'></button>
						<h2 className='modal__title'>Change profile picture</h2>
						<form method='GET' className='form' name='add' noValidate>
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

							<button type='submit' className='form__submit'>
								Save
							</button>
						</form>
					</div>
					<div className='modal__overlay'></div>
				</section>

				<section className='modal modal_type_add'>
					<div className='modal__body'>
						<button type='button' className='modal__close-btn'></button>
						<h2 className='modal__title'>New Place</h2>
						<form method='GET' className='form' name='add' noValidate>
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

							<button type='submit' className='form__submit'>
								Create
							</button>
						</form>
					</div>
					<div className='modal__overlay'></div>
				</section>

				<section className='modal modal_type_confirm'>
					<div className='modal__body'>
						<button type='button' className='modal__close-btn'></button>
						<h2 className='modal__title modal__title_delete'>Are you sure?</h2>
						<form method='GET' className='form' name='delete' noValidate>
							<button type='submit' className='form__submit'>
								Yes
							</button>
						</form>
					</div>
					<div className='modal__overlay'></div>
				</section>

				<div className='modal modal_type_preview'>
					<div className='modal__body modal__body_type_preview'>
						<button type='button' className='modal__close-btn'></button>
						<img
							className='modal__img'
							src="<%=require('./images/braies.png')%>"
							alt='empty'
						/>
						<h2 className='modal__caption'></h2>
					</div>
					<div className='modal__overlay'></div>
				</div>

				<template id='elementTemplate'>
					<div className='element'>
						<img
							src="<%=require('./images/braies.png')%>"
							alt=''
							className='element__img'
						/>
						<button type='button' className='element__trash'></button>
						<div className='text'>
							<h2 className='text__label'></h2>
							<div className='text__like'>
								<button type='button' className='text__heart'></button>
								<span className='text__like-count'>0</span>
							</div>
						</div>
					</div>
				</template>
			</main>
			<footer className='footer'>
				<p className='footer__copyright'>© 2021 Around The U.S.</p>
			</footer>
		</body>
	);
}

export default App;