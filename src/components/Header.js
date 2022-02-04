import vector from "../images/Vector.svg";

export default function Header() {
	return (
		<header className='header'>
			<img src={vector} alt='AroundUS' className='header__logo' />
		</header>
	);
}
