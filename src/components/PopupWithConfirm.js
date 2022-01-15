import PopupWithForm from "./PopupWithForm.js";

export default function PopupWithConfirm() {
	return (
		<PopupWithForm
			name='delete'
			title='Are you sure?'
			submit='Delete'
			isOpen={isOpen}
		></PopupWithForm>
	);
}
