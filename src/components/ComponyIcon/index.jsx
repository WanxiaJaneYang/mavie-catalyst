/* eslint-disable react/function-component-definition */
import logo from '../../images/svg/Logo.svg';

const CompanyIcon = () => {
	const fontSize = 30; // Set this to desired size
	const logoHeight = fontSize * 1.5;

	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<div
				style={{
					fontFamily: 'Martel',
					fontWeight: '400',
					fontSize: `${fontSize}px`,
					color: '#000000',
					marginRight: '10px', // optional spacing between text and logo
				}}
			>
				Mavy
			</div>
			<img
				src={logo}
				alt="Company Logo"
				style={{
					height: `${logoHeight}px`,
					width: 'auto',
				}}
			/>
		</div>
	);
};

export default CompanyIcon;
