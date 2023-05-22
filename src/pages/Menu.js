import Burger from "../assets/Images/food1.png"
import Coke from "../assets/Images/coke.png"
import Fries from "../assets/Images/about.png"
import Burger2 from "../assets/Images/food2.png"
import Chicken from "../assets/Images/food3.png"
import Pizza from "../assets/Images/pizza.png"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function Menu(props) {
    let navigate = useNavigate();
    
    const toBasket = () => {
        const link = "/basket";
        navigate(link);
    }

    return (
        <div className="main text-center pt-40 overflow-y-scroll">
            <div className="" > 
                <h1 className="text-6xl font-bold py-10">
                    Меню
                </h1>
            </div>

            <div className="grid grid-cols-3  w-[80%] m-auto">
                <div className="w-96 m-auto block h-[32rem] bg-white bg-opacity-30 rounded-2xl mb-5">
                    <img src={Burger} className="w-64 h-64 m-auto block"></img>
                    <h1 className="py-4 text-2xl font-bold">Чикенбургер</h1>
                    <h5 className="text-l py-2 text-black-600">596 кКал; белки 26г; жиры 32г; углеводы 53г</h5>
                    <h5 className="text-m py-2 text-black-600">Стоимость: 369₽</h5>
                    <p>Вы добавили {props.menu.chickenBurger}</p>
                    <button className="mt-10 bg-red-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleRemove("chickenBurger");
                        }}>Убрать</button>
                        <button className="mt-10 bg-green-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleAdd("chickenBurger");
                        }}>Добавить</button>
                    
                </div>

                <div className="w-96 m-auto block h-[32rem] bg-white bg-opacity-30 rounded-2xl mb-5">
                    <img src={Burger2} className="w-64 h-64 m-auto block"></img>
                    <h1 className="py-4 text-2xl font-bold">Чизбургер</h1>
                    <h5 className="text-l py-2 text-black-600">812 кКал; белки 71г; жиры 69г; углеводы 50г</h5>
                    <h5 className="text-m py-2 text-black-600">Стоимость: 450₽</h5>
                    <p>Вы добавили {props.menu.cheeseBurger}</p>
                    <button className="mt-10 bg-red-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleRemove("cheeseBurger");
                        }}>Убрать</button>
                        <button className="mt-10 bg-green-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleAdd("cheeseBurger");
                        }}>Добавить</button>
                </div>

                <div className="w-96 m-auto block h-[32rem] bg-white bg-opacity-30 rounded-2xl mb-5">
                    <img src={Chicken} className="w-64 h-64 m-auto block"></img>
                    <h1 className="py-4 text-2xl font-bold">Куриный баскет</h1>
                    <h5 className="text-l py-2 text-black-600">782 кКал; белки 32г; жиры 49г; углеводы 35г</h5>
                    <h5 className="text-m py-2 text-black-600">Стоимость: 530₽</h5>
                    <p>Вы добавили {props.menu.chickenBasket}</p>
                    <button className="mt-10 bg-red-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleRemove("chickenBasket");
                        }}>Убрать</button>
                        <button className="mt-10 bg-green-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleAdd("chickenBasket");
                        }}>Добавить</button>
                </div>
                <div className="w-96 m-auto block h-[32rem] bg-white bg-opacity-30 rounded-2xl">
                    <img src={Coke} className="w-64 h-64 m-auto block"></img>
                    <h1 className="py-4 text-2xl font-bold">Добрый кола</h1>
                    <h5 className="text-l py-2 text-black-600">212 кКал; белки 0г; жиры 0г; углеводы 53г</h5>
                    <h5 className="text-m py-2 text-black-600">Стоимость: 109₽</h5>
                    <p>Вы добавили {props.menu.cola}</p>
                    <button className="mt-10 bg-red-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleRemove("cola");
                        }}>Убрать</button>
                        <button className="mt-10 bg-green-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleAdd("cola");
                        }}>Добавить</button>
                </div>
                <div className="w-96 m-auto block h-[32rem] bg-white bg-opacity-30 rounded-2xl">
                    <img src={Pizza} className="w-64 h-64 m-auto block"></img>
                    <h1 className="py-4 text-2xl font-bold">Кусочек пепперони</h1>
                    <h5 className="text-l py-2 text-black-600">309 кКал; белки 12г; жиры 15г; углеводы 24г</h5>
                    <h5 className="text-m py-2 text-black-600">Стоимость: 120₽</h5>
                    <p>Вы добавили {props.menu.pizza}</p>
                    <button className="mt-10 bg-red-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleRemove("pizza");
                        }}>Убрать</button>
                        <button className="mt-10 bg-green-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleAdd("pizza");
                        }}>Добавить</button>
                </div>
                <div className="w-96 m-auto block h-[32rem] bg-white bg-opacity-30 rounded-2xl">
                    <img src={Fries} className="w-64 h-64 m-auto block"></img>
                    <h1 className="py-4 text-2xl font-bold">Ролл + картошка фри</h1>
                    <h5 className="text-l py-2 text-black-600">1247 кКал; белки 129г; жиры 137г; углеводы 87г</h5>
                    <h5 className="text-m py-2 text-black-600">Стоимость: 657₽</h5>
                    <p>Вы добавили {props.menu.fries}</p>
                    <button className="mt-10 bg-red-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleRemove("fries");
                        }}>Убрать</button>
                        <button className="mt-10 bg-green-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleAdd("fries");
                        }}>Добавить</button>
                </div>
            </div>
            <button href = 'Basket.js'className="start-button px-12 py-[0.5rem] rounded-md mt-4 content-end mr-[0%] my-4" onClick={() => toBasket()}>Перейти в корзину</button>
        </div>
    )
}

export default Menu

