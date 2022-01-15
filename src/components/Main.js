import Man from "../images/man.jpg";
import Braies from "../images/braies.png";

export default function Main() {
	return (
		<main className='main'>
			<section className='profile'>
				<div className='profile__holder'>
					<div className='profile__image-box'>
						<img src={Man} alt='Man in Hat' className='profile__avatar' />
						<button className='profile__avatar-edit' onClick={onEditAvatarClick}></button>
					</div>
					<div className='info'>
						<div className='title'>
							<h1 className='title__name'>Jacques Cousteau</h1>
							<button type='button' className='title__button' onClick={onEditProfileClick}></button>
						</div>
						<p className='info__job'>Explorer</p>
					</div>
				</div>

				<button
					type='button'
					className='profile__button'
					id='form-button'
                    onClick={onEditAddPlaceClick}
				></button>
			</section>
			<section className='elements'></section>

			<div className='modal modal_type_preview'>
				<div className='modal__body modal__body_type_preview'>
					<button type='button' className='modal__close-btn'></button>
					<img className='modal__img' src={Braies} alt='empty' />
					<h2 className='modal__caption'></h2>
				</div>
				<div className='modal__overlay'></div>
			</div>

			<template id='elementTemplate'>
				<div className='element'>
					<img src={Braies} alt='' className='element__img' />
					<button type='button' className='element__trash' onClick={onDeleteOpen}></button>
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
	);
}
