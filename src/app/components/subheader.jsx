import MapPointer from '../../../public/mappointer.svg';
import Search from '../../../public/search.svg'
import User from '../../../public/user.png'
import Globe from '../../../public/globe.png'
import House from '../../../public/house.svg'
import './subheader.css'
export default function SubHeader () {

    return (
        <div className="subheader">
            <div className="sh-address">
                <img src={MapPointer.src} alt=""/>
                <span>Turan, 11</span>
            </div>
            <form className="sh-search">
                <img src={Search.src} alt=""/>
                <input type="text" className="sh-searchbar" placeholder={'Поиск...'}/>
            </form>
            <div className="sh-additional">
                <div className="sh-user">
                    <img src={User.src} alt=""/>
                    <span>Арлан</span>
                </div>
                <div className="sh-lang">
                    <img src={Globe.src} alt=""/>
                    <select name="lang" id="lang">
                        <option value="rus">RUS</option>
                        <option value="eng">ENG</option>
                        <option value="kaz">KAZ</option>
                    </select>
                </div>
                <img className="sh-houseimg" src={House.src} alt=""/>
            </div>
        </div>
    )
}
