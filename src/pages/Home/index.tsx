import LinkedIn from '/LinkedinLogo.svg'
import GithubLogo from '/Github.svg'
import FigmaLogo from '/FigmaLogo.svg'
import CodepenLogo from '/CodepenLogo.svg'
import ProfilePic from '/wow.jpg'
import HomeBig from '/HomeBig.svg'

import '../../styles/home.sass'

export default function Home() {
    return (
        <section className="pageContainer" id="home">
            <img className="home big" src={HomeBig} alt="" />
            <div className="bloco">
                <div className="texto">
                    <h1>Hi! I'm Gabe</h1>
                    <p>I love technology and I worked for a time with printed art. 
                    In a way, I merged those two passions to create digital solutions.</p>
                    <div className="logos">
                        <a href="https://github.com/gothmate" target="_blank">
                            <img src={GithubLogo} alt="Github" />
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-correia-dev/" target="_blank">
                            <img src={LinkedIn} alt="LinkedIn" />
                        </a>
                        <a href="https://www.figma.com/@gothmategabriel" target="_blank">
                            <img src={FigmaLogo} alt="Figma" />
                        </a>
                        <a href="https://codepen.io/gabriel-gothmate-correia" target="_blank">
                            <img src={CodepenLogo} alt="Codepen" />
                        </a>
                    </div>
                </div>
                <div className="profile">
                    <div className="profilepic">
                        <img src={ProfilePic} alt="Profile picture" />
                    </div>
                </div>
            </div>
        </section>
    )
}
