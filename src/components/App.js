import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import AddCard from "./AddCard";
import EditProfile from "./EditProfile";
import PopupWithConfirm from "./PopupWithConfirm";
import EditAvatar from "./EditAvatar";
import React from "react";
import ImagePopup from "./ImagePopup";

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

	const handleDeleteOpen = () => {
		setIsPopupWithConfirmOpen(true);
	};

	const closeAllPopups = () => {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setIsPopupWithConfirmOpen(false);
		setIsImagePopupOpen(false);
	};

	return (
		<div className='page'>
			<Header />
			<Main
				onEditAvatarClick={handleEditAvatarClick}
				onEditProfileClick={handleEditProfileClick}
				onAddPlaceClick={handleAddPlaceClick}
				onCardClick={handleCardClick}
				onDeleteOpen={handleDeleteOpen}
			/>
			<AddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
			<EditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
			<EditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
			<PopupWithConfirm
				isOpen={isPopupWithConfirmOpen}
				onClose={closeAllPopups}
			/>
			<ImagePopup
				isOpen={isImagePopupOpen}
				card={selectedCard}
				onClose={closeAllPopups}
			/>
			<Footer />
		</div>
	);
}

export default App;
