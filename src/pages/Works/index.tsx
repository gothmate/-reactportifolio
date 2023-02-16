import Slider from '../../components/Slider';

import WorksBig from '/Works.svg'
import Rain from '/Raindrops.gif'


export default function Works() {
  const workItems = [
		{
			id: 1,
			linkGit: 'https://gothmate.github.io/shadyrhymesdesign/',
			img: 'https://gothmate.github.io/assets/shady.png',
			title: 'Shady Rimes Project',
			description:
				'Frontend study to create an Interior Design responsive landing page.',
			repository: 'https://github.com/gothmate/shadyrhymesdesign',
			figma:
				'https://www.figma.com/file/G0QkUaoOr6JrfpxpgMLkJk/shady-rhymes-interior-design-landing-page-(Community)',
			alt: 'Shady Rimes',
		},
		{
			id: 2,
			linkGit: 'https://gothmate.github.io/time-tracking-dashboard/',
			img: 'https://gothmate.github.io/assets/time-tracking.jpg',
			title: 'Time-Tracking-Dashboard',
			description:
				'Frontend Mentor Challenge with Json Bank and responsive layout.',
			repository: 'https://github.com/gothmate/time-tracking-dashboard',
			figma: '',
			alt: 'time-tracking-dashboard',
		},
		{
			id: 3,
			linkGit: 'https://gothmate.github.io/sliceoflife/',
			img: 'https://gothmate.github.io/gothmate_portifolio/assets/slice.jpg',
			title: 'Slice of Life Landingpage',
			description:
				'Frontend Mentor Challenge with Json Bank and responsive layout.',
			repository: 'https://github.com/gothmate/sliceoflife',
			figma:
				'https://www.figma.com/file/tB6YS2jRESnewrJLFxhi64/Pizzaria?node-id=0%3A1',
			alt: 'slice of life',
		},
		{
			id: 4,
			linkGit:
				'https://gothmate.github.io/social-media-dashboard-with-theme-switcher/',
			img: 'https://gothmate.github.io/assets/social-media.jpg',
			title: 'Light & Dark Dashboard',
			description:
				"Frontend Mentor's challenge to create light and dark mode.",
			repository:
				'https://github.com/gothmate/social-media-dashboard-with-theme-switcher',
			figma: '',
			alt: 'light and dark mode',
		},
	]; 

  return (
    <section className="pageContainer" id="works">
      <img className="works big" src={WorksBig} alt="works" />
      <img className="rain" src={Rain} alt="background" />
      <div className="bloco">
        <div className="texto">
          <h1>Works</h1>
          <Slider works={workItems} /> 
        </div>
      </div>
    </section>
  )
}
