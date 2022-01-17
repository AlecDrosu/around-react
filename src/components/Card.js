export default function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

	return (
		<div className='element'>
			<img src={props.link} alt={props.name} className='element__img' onClick={handleClick} />
			<button
				type='button'
				className='element__trash'
				onClick={props.onTrashClick}
			></button>
			<div className='text'>
				<h2 className='text__label'>{props.name}</h2>
				<div className='text__like'>
					<button type='button' className='text__heart'></button>
					<span className='text__like-count'>{props.likes.length}</span>
				</div>
			</div>
		</div>
	);
}
