import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './components/Button';

function ButtonPage() {

	const handleClick = () => {
		console.log('Click!!');
	}

	return (
		<div>
			<div>
				<Button primary rounded className='mb-5' onClick={handleClick}>
					<GoBell />
					Click me!!
				</Button>
			</div>
			<div>
				<Button secondary outline onMouseEnter={handleClick}>
					<GoCloudDownload />
					Buy Now!
				</Button>
			</div>
			<div>
				<Button success outline>
					<GoDatabase />
					See Deal!
				</Button>
			</div>
			<div>
				<Button warning outline>Hide Ads!</Button>
			</div>
			<div>
				<Button danger rounded outline>Something!</Button>
			</div>
		</div>
	)
}

export default ButtonPage;
