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
	const [isEditProfilePopupOpen, setisEditProfilePopupOpen] =
		React.useState(false);
	const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
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
		setisEditProfilePopupOpen(true);
	};

	const handleAddPlaceClick = () => {
		setisAddPlacePopupOpen(true);
	};

	const handleEditAvatarClick = () => {
		setisEditAvatarPopupOpen(true);
	};

	// const handleDeleteOpen = () => {
	// 	setIsPopupWithConfirmOpen(true);
	// };

	const closeAllPopups = () => {
		setisEditProfilePopupOpen(false);
		setisAddPlacePopupOpen(false);
		setisEditAvatarPopupOpen(false);
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
