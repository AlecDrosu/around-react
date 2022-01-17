import PopupWithForm from "./PopupWithForm.js";

export default function PopupWithConfirm(props) {
	return (
		<PopupWithForm
			name='delete'
			title='Are you sure?'
			submit='Delete'
			isOpen={props.isOpen}
            onClose={props.onClose}
		></PopupWithForm>
	);
}
