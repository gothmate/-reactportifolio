import './index.sass';
import './index.css';
import { useEffect, useState } from 'react';


export default function Slider({works, games}: any){
	const [controller, setController] = useState('slide-controller');
	const [slide, setSlide] = useState('slide');
	const [list, setList] = useState('slides-list');

	function controllerConnect() {
		if (works) {
			setController('slide-controller');
			setSlide('slide');
			setList('slides-list');
		}
		if(games) {
			setController('slide-controller2');
			setSlide('slide2');
			setList('games-list');
		}
	}

	function renderItem(el: any) {
		return (
			<li className={slide} key={el.id} tabIndex={-1}>
				<a href={el.linkGit} target='_blank'>
					<img src={el.img} alt={el.alt} />
				</a>
				<div className='textcar'>
					<h2>{el.title}</h2>
					<p>{el.description}</p>
					<a href={el.repository} target='_blank'>
						<img src='/GitBranch.svg' alt='Github link' />
					</a>
					{el.figma != '' ? (
						<a href={el.figma} target='_blank'>
							<img src='/FigmaLogo.svg' alt='Figma link' />
						</a>
					) : (
						''
					)}
				</div>
			</li>
		);
	}

	useEffect(() => {
		controllerConnect();
	}, []);

	return (
		<div className='container'>
			{controller &&
				new Array(4)
					.fill(null)
					.map((_, index) => (
						<input
							key={index}
							type='radio'
							className={controller}
							name={slide}
						/>
					))}

			<div className='slide-show'>
				<ul className={list}>
					{(works || games).map((el: any) => renderItem(el))}
				</ul>
			</div>
		</div>
	);
}
