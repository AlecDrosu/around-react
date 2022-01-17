import api from "../utils/api";
import React from "react";
import Card from "./Card.js";

export default function Main(props) {
	// add the userName, userDescription, and userAvatar state variables
	const [userName, setUserName] = React.useState("");
	const [userDescription, setUserDescription] = React.useState("");
	const [userAvatar, setUserAvatar] = React.useState("");
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		api.getUserInfo().then((data) => {
			setUserName(data.name);
			setUserDescription(data.about);
			setUserAvatar(data.avatar);
		});
	}, []);

	React.useEffect(() => {
		api.getCards().then((data) => {
			setCards(data);
		});
	}, []);

	return (
		<main className='main'>
			<section className='profile'>
				<div className='profile__holder'>
					<div className='profile__image-box'>
						<img
							src={userAvatar}
							alt='Man in Hat'
							className='profile__avatar'
						/>
						<button
							className='profile__avatar-edit'
							onClick={props.onEditAvatarClick}
						></button>
					</div>
					<div className='info'>
						<div className='title'>
							<h1 className='title__name'>{userName}</h1>
							<button
								type='button'
								className='title__button'
								onClick={props.onEditProfileClick}
							></button>
						</div>
						<p className='info__job'>{userDescription}</p>
					</div>
				</div>

				<button
					type='button'
					className='profile__button'
					id='form-button'
					onClick={props.onAddPlaceClick}
				></button>
			</section>

			<section className='elements'>
				{cards.map((card) => (
					<Card
						key={card._id}
						id={card._id}
						name={card.name}
						link={card.link}
						likes={card.likes}
						onCardClick={props.onCardClick}
						card={card}
						onTrashClick={props.onDeleteOpen}
						// onCardLike={props.onCardLike}
						// onCardDelete={props.onCardDelete}
					/>
				))}
			</section>
		</main>
	);
}
