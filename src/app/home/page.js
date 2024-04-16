import '../globals.css'
import './home.css'
import SubHeader from "@/app/components/subheader.jsx";
import Header from "@/app/components/header.jsx";

export default function Home () {
    return (
        <div className="mainhome">
            <div className="upper">
                <Header style={'blue'}/>
                <SubHeader />
            </div>
            <main>
                <div className="left">
                    <div className="title">Поставки</div>
                    <div className="info">
                        <div className="address">
                            OxE40f88AC0149c75DE54580cd047f40a58E840962
                        </div>
                        <div className="subtext bolder">Адрес создателя</div>
                        <div className="subtext">Кто создал эту поставку и может создавать запросы на вывод денег.</div>
                    </div>
                    <div className="info-grid">
                        <div className="info-box">
                            <div className="info-value">Sagyz</div>
                            <div className="subtext bolder">Компания</div>
                        </div>
                        <div className="info-box">
                            <div className="info-value">Мангилик ел 32/1</div>
                            <div className="subtext bolder">Местоположение</div>
                        </div>
                        <div className="info-box">
                            <div className="info-value">Овощи</div>
                            <div className="subtext bolder">Категория товара</div>
                        </div>
                        <div className="info-box">
                            <div className="info-value">3</div>
                            <div className="subtext bolder">Количество  перевозок</div>
                        </div>
                        <div className="info-box">
                            <div className="info-value">Производство</div>
                            <div className="subtext bolder">Данные о производстве</div>
                        </div>
                        <div className="info-box">
                            <div className="info-value">Состояние товара</div>
                            <div className="subtext bolder">Изменения состояния товара</div>
                        </div>
                    </div>
                    <div className='left-button'>
                        <button>Посмотреть поставки</button>
                    </div>
                </div>
                <div className="right">
                    <div className="title">Регистрация</div>
                    <form action="">
                        <div className="form-inside-container">
                            <div className="form-row">
                                <label htmlFor="">Оценочная годовая выручка</label>
                                <div className="double-input">
                                    <input type="text" className="sum"/>
                                    <input type="text" className="mon"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <label htmlFor="">Плательщик НДС</label><input type="text"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="">Уставной капитал</label><input type="text"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="">Налогообложение</label><input type="text"/>
                            </div>
                        </div>

                        <div className="buttons">
                            <button>Зарегистрироватся</button>
                            <button>Добавить сотрудника</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}
