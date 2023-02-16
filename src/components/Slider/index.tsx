import './index.sass';
import './index.css';
import { useEffect, useState } from 'react';

export default function Slider({works, games}: { works?: any[], games?: any[]}) {
	const [controller, setController] = useState('slide-controller');
	const [slide, setSlide] = useState('slide');
	const [list, setList] = useState('slides-list');

	function controllerConnect() {
		if (works) {
			setController('slide-controller')
			setSlide('slide')
			setList('slides-list')
		} else {
			setController('slide-controller2')
			setSlide('slide2')
			setList('games-list')
		}
	}

	useEffect(() => controllerConnect, []);

	return (
		<div className='container'>
			<input type='radio' className={controller} name={slide} /> 
			<input type='radio' className={controller} name={slide} /> 
			<input type='radio' className={controller} name={slide} /> 
			<input type='radio' className={controller} name={slide} /> 

			<div className='slide-show'>
				<ul className={list}>
					{works?.map((el: any) => (
						<li className='slide' key={el.id}>
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
					))}
					{games?.map((el: any) => (
						<li className='slide2' key={el.id}>
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
					))}
				</ul>
			</div>
		</div>
	);
}
