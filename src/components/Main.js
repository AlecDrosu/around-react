import api from "../utils/api";
import React from "react";
import Card from "./Card.js";

export default function Main(props) {
	const [user, setUser] = React.useState("");
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		api
			.getUserInfo()
			.then((data) => {
				setUser(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	React.useEffect(() => {
		api
			.getCards()
			.then((data) => {
				setCards(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<main className='main'>
			<section className='profile'>
				<div className='profile__holder'>
					<div className='profile__image-box'>
						<img
							src={user.avatar}
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
							<h1 className='title__name'>{user.name}</h1>
							<button
								type='button'
								className='title__button'
								onClick={props.onEditProfileClick}
							></button>
						</div>
						<p className='info__job'>{user.about}</p>
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
