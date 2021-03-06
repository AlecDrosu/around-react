import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from "./EditProfilePopup";
import PopupWithConfirm from "./PopupWithConfirm";
import EditAvatarPopup from "./EditAvatarPopup";
import React from "react";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
		React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
		React.useState(false);
	const [isPopupWithConfirmOpen, setIsPopupWithConfirmOpen] =
		React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState({});
	const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
	const [currentUser, setCurrentUser] = React.useState({});
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		api
			.getUserInfo()
			.then((data) => {
				setCurrentUser(data);
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

	function handleCardLike(card) {
		const isLiked = card.likes.some((i) => i._id === currentUser._id);

		api
			.changeLikeCardStatus(card._id, !isLiked)
			.then((data) => {
				setCards((state) => state.map((c) => (c._id === card._id ? data : c)));
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleCardDelete() {
		api
			.deleteCard(selectedCard._id)
			.then(() => {
				setCards((state) => state.filter((c) => c._id !== selectedCard._id));
			})
			.then(() => {
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const handleCardClick = (card) => {
		setSelectedCard(card);
		setIsImagePopupOpen(true);
	};

	const handleEditProfileClick = () => {
		setIsEditProfilePopupOpen(true);
	};

	const handleAddPlaceClick = () => {
		setIsAddPlacePopupOpen(true);
	};

	const handleEditAvatarClick = () => {
		setIsEditAvatarPopupOpen(true);
	};

	const handleDeleteOpen = (card) => {
		setSelectedCard(card);
		setIsPopupWithConfirmOpen(true);
	};

	const handleUpdateUser = (userInfo) => {
		api
			.editProfile(userInfo)
			.then((data) => {
				setCurrentUser(data);
			})
			.then(() => {
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleUpdateAvatar = (avatar) => {
		api
			.editAvatar(avatar)
			.then((data) => {
				setCurrentUser(data);
			})
			.then(() => {
				closeAllPopups();
			})

			.catch((err) => {
				console.log(err);
			});
	};

	const handleAddPlacePopup = (cardData) => {
		api
			.createCard(cardData)
			.then((data) => {
				setCards([data, ...cards]);
			})
			.then(() => {
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const closeAllPopups = () => {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setIsPopupWithConfirmOpen(false);
		setIsImagePopupOpen(false);
	};

	React.useEffect(() => {
		const closeByEsc = (e) => {
			if (e.key === "Escape") {
				closeAllPopups();
			}
		};
		document.addEventListener("keydown", closeByEsc);
		return () => {
			document.removeEventListener("keydown", closeByEsc);
		};
	}, []);

	return (
		<div className='page'>
			<CurrentUserContext.Provider value={currentUser}>
				<Header />
				<Main
					onEditAvatarClick={handleEditAvatarClick}
					onEditProfileClick={handleEditProfileClick}
					onAddPlaceClick={handleAddPlaceClick}
					onCardClick={handleCardClick}
					onCardDelete={handleDeleteOpen}
					onCardLike={handleCardLike}
					cards={cards}
				/>
				<AddPlacePopup
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddPlacePopup={handleAddPlacePopup}
				/>
				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>
				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>
				<PopupWithConfirm
					isOpen={isPopupWithConfirmOpen}
					onClose={closeAllPopups}
					onConfirm={handleCardDelete}
				/>
				<ImagePopup
					isOpen={isImagePopupOpen}
					card={selectedCard}
					onClose={closeAllPopups}
				/>
				<Footer />
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
