import { useState } from 'react';
import './Home.css';

export default function Home() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <section className="main">
            <header>
                <h4>Logo</h4>
                <nav className={`menu ${showMenu ? 'show' : ''}`}>
                    <div className='close-container'>
                        <div className={`close ${showMenu ? 'show' : ''}`} onClick={toggleMenu}>X</div>
                    </div>
                    <ul>
                        <li>What is</li>
                        <li>Token</li>
                        <li>Team</li>
                        <li>Roadmap</li>
                        <li>Partners</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className='nav-buttons'>
                    <button>WHITEPAPER</button>
                    <button>TRY APP</button>
                </div>
                <div className='bx-menu' onClick={toggleMenu}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            </header>
            <div className='content'>
                <p>Empowering data for the emerging equity blockchain</p>
                <span>Transforming businesses with efficiency and transparency: The revolutionary benefits of blockchain technology</span>
                <div>
                    <button id='signup'>SIGN UP TO JOIN</button>
                    <button id='token'>TOKEN DISTRIBUTION</button>
                </div>
            </div>
        </section>
    )
}
