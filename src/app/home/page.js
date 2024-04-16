import '../globals.css'
import SubHeader from "@/app/components/subheader.jsx";
import Header from "@/app/components/header.jsx";

export default function Home () {
    return (
        <>
            <Header style={'blue'}/>
            <SubHeader />
            <main>
                <div className="left">
                    <div className="info">
                        <div className="address">
                            OxE40f88AC0149c75DE54580cd047f40a58E840962
                        </div>
                        <div className="subtext">Адрес создателя</div>
                        <div className="subtext">Кто создал эту поставку и может создавать запросы на вывод денег.</div>
                    </div>
                    <div className="info-grid">
                        <div className="info-box">
                            <div className="info-value">Sagyz</div>
                            <div className="info-name">Компания</div>
                        </div>
                        <div className="info-box">
                            <div className="info-value">Мангилик ел 32/1</div>
                            <div className="info-name">Местоположение</div>
                        </div>
                        <div className="info-box">
                            <div className="info-value">Овощи</div>
                            <div className="info-name">Категория товара</div>
                        </div>
                        <div className="info-box">
                            <div className="info-value">3</div>
                            <div className="info-name">Количество  перевозок</div>
                        </div>
                        <div className="info-box">
                            <div className="info-value">Производство</div>
                            <div className="info-name">Данные о производстве</div>
                        </div>
                        <div className="info-box">
                            <div className="info-value">Состояние товара</div>
                            <div className="info-name">Изменения состояния товара</div>
                        </div>
                    </div>
                    <div className='left-button'>
                        <button>Посмотреть поставки</button>
                    </div>
                </div>
                <div className="right">
                    <form action="">
                        <div className="form-title">Регистрация</div>
                        <div className="form-inside-container">
                            <div className="form-row">
                                <label htmlFor="">Оценочная годовая выручка</label>
                                <div className="double-input">
                                    <input type="text"/>
                                    <input type="text"/>
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
                        <button>Зарегистрироватся</button>
                    </form>
                    <div className="div">
                        <button>Добавить сотрудника</button>
                    </div>
                </div>
            </main>
        </>
    )
}
