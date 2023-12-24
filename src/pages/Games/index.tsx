import Slider from '../../components/Slider';
import GamesBig from '/GamesBig.svg'

interface Ititle {
	id: number;
	linkGit: string;
	img: string;
	title: string;
	description: string;
	repository: string;
	figma: string;
	alt: string;
}

export default function Games() {

    const gameItems: Ititle[] = [
			{
				id: 5,
				linkGit: 'https://gothmate.github.io/Vampire-SuperTrunfo/',
				img: 'https://gothmate.github.io/assets/trunfo.png',
				title: 'Vampire Card-Game',
				description:
					'Vampire: The Masquerade Role Playing Game in a Supertramp-like card game based in Rio de Janeiro by night, on sale at DrivethruRPG.',
				repository: 'https://github.com/gothmate/Vampire-SuperTrunfo',
				figma: '',
				alt: 'Vampire Card Game',
			},
			{
				id: 6,
				linkGit: 'https://gothmate.github.io/rock-paper-scissors_JS/',
				img: 'https://gothmate.github.io/assets/rps.jpg',
				title: 'Rock-Paper-Scissors',
				description:
					'Rock-Paper-Scissors Game made in a challenge from Frontend Mentor.',
				repository: 'https://github.com/gothmate/rock-paper-scissors_JS',
				figma: '',
				alt: 'Rock-Paper-Scissors',
			},
			{
				id: 7,
				linkGit: 'https://gothmate.github.io/snake_game/',
				img: 'https://gothmate.github.io/gothmate_portifolio/assets/snake.jpg',
				title: 'Snake Game',
				description: 'The classic snake game written in JavaScript vanilla.',
				repository: 'https://github.com/gothmate/snake_game',
				figma: '',
				alt: 'snake game',
			},
			{
				id: 8,
				linkGit: 'https://gothmate.github.io/tictactoe/',
				img: 'https://user-images.githubusercontent.com/16990753/219168416-d29c48ab-50ff-4a70-9fce-2353a47175d4.png',
				title: 'Tic Tac Toe',
				description: 'Digital game based on the famous tic tac toe.',
				repository: 'https://github.com/gothmate/tictactoe',
				figma: '',
				alt: 'Tic Tac Toe',
			},
		]; 

    return (
			<section className='pageContainer' id='games'>
				<div className='bgCover'></div>
				<img className='games big' src={GamesBig} alt='games' />
				<div className='bloco'>
					<div className='texto'>
						<h1>Games</h1>
						<Slider games={gameItems} />
					</div>
				</div>
			</section>
		);
}
