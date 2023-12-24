import { useState } from 'react'
import Home from '/Home.svg'
import Works from '/Works.svg'
import Games from '/Games.svg'
import Github from '/Github.svg'
import GetInTouch from '/GetInTouch.svg'
import './index.sass'
import { NavItems } from '../NavItems/index.jsx'
import React from 'react'

interface NavigatorProps extends React.HTMLAttributes<HTMLDivElement> {
    link?: string;
    item?: string;
    image?: SVGImageElement;
}

export function Navigator(props: NavigatorProps) {

    const [handleActive, setHandleActive] = useState('HOME')

    return (
			<aside>
				<nav className='navigation'>
					<div className='menu'>
						<ul>
							<NavItems
								onClick={() => setHandleActive('HOME')}
								isActive={handleActive === 'HOME'}
								link='#home'
								item='HOME'
								image={Home}
							/>
							<NavItems
								onClick={() => setHandleActive('WORKS')}
								isActive={handleActive === 'WORKS'}
								link='#works'
								item='WORKS'
								image={Works}
							/>
							<NavItems
								onClick={() => setHandleActive('GAMES')}
								isActive={handleActive === 'GAMES'}
								link='#games'
								item='GAMES'
								image={Games}
							/>
							<NavItems
								onClick={() => setHandleActive('GITHUB')}
								isActive={handleActive === 'GITHUB'}
								link='#github'
								item='GITHUB'
								image={Github}
							/>
							<NavItems
								onClick={() => setHandleActive('CONTACT')}
								isActive={handleActive === 'CONTACT'}
								link='#contatos'
								item='CONTACT'
								image={GetInTouch}
							/>
							<div
								className='indicator'
								aria-label='Marcador de acesso do Menu'
							></div>
						</ul>
					</div>
				</nav>
			</aside>
		);
}
