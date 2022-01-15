import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import AddCard from "./AddCard";
import EditProfile from "./EditProfile";
import PopupWithConfirm from "./PopupWithConfirm";
import EditAvatar from "./EditAvatar";

function App() {
	const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
	const [isAddCardOpen, setIsAddCardOpen] = useState(false);
	const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
	const [isPopupWithConfirmOpen, setIsPopupWithConfirmOpen] = useState(false);

	const handleEditProfileClick = () => {
		setIsEditProfileOpen(true);
	};

	const handleAddPlaceClick = () => {
		setIsAddCardOpen(true);
	};

	const handleEditAvatarClick = () => {
		setIsEditAvatarOpen(true);
	};

	const handleDeleteOpen = () => {
		setIsPopupWithConfirmOpen(true);
	};

	return (
		<div className='page'>
			<Header />
			<Main
				onEditAvatarClick={handleEditAvatarClick}
				onEditProfileClick={handleEditProfileClick}
				onEditAddPlaceClick={handleAddPlaceClick}
				onDeleteOpen={handleDeleteOpen}
			/>
			<AddCard isOpen={isAddCardOpen} />
			<EditProfile isOpen={isEditProfileOpen} />
			<EditAvatar isOpen={isEditAvatarOpen} />
			<PopupWithConfirm isOpen={isPopupWithConfirmOpen} />

			<Footer />
		</div>
	);
}

export default App;
