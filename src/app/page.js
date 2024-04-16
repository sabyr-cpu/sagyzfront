import './globals.css'
import './page.css'
import Logo from '../../public/logo.svg'
import Bubbles from '../../public/bubbles.png'
import Header from './components/header.jsx'

export default function Home() {
  return (
      <div className="home">
          <Header style={'light'}/>
          <main>
              <div className="info">
                  <div className="bigtext">
                      Подтверди свое качество с помощью SAGYZ!
                  </div>
                  <div className="smalltext">
                      Это платформа, использующая блокчейн для  сертификации и тщательного отслеживания поставки сельскохозяйственной продукции.
                  </div>
                  <div>
                    <button>Начать!</button>
                  </div>
              </div>
              <div className="logo">
                  <img className="sagyz" src={Logo.src} alt=""/>
              </div>
          </main>
      </div>
  );
}
