import Burger from "../assets/Images/food1.png"
import Fries from "../assets/Images/about.png"
import coke from "../assets/Images/coke.png"
import Burger2 from "../assets/Images/food2.png"
import Chicken from "../assets/Images/food3.png"
import Pizza from "../assets/Images/pizza.png"
import { useNavigate } from "react-router-dom"

function Basket(props) {
    let navigate = useNavigate();
    
    const toTotal = () => {
        const link = "/total";
        navigate(link);
    }

return (
        <div className="main text-center pt-40 overflow-y-scroll">
            <div className="w-[80%] m-auto" > 
                <h1 className="text-6xl font-bold py-10">
                    Корзина
                </h1>
            
            <button className="start-button px-12 py-[0.5rem] rounded-md mt-4 content-end mr-[-80%] my-4" onClick={() => toTotal()}>Перейти к Итогу</button>
            </div>
        <div className="w-[80%] bg-white bg-opacity-30 m-auto rounded-2xl">
            <div className="p-2">
                <div className="grid grid-cols-4 gap-2">
                    <div className="flex border-r-2 border-black">
                        <img src={Burger} className="w-16 h-16 mx-4 mt-4"/>
                        <p className="mt-10 text-xl font-bold">Чикенбургер</p>
                    </div>
                    <div className="border-r-2 border-black pr-2 text-left">
                        <div className="ml-4">
                        <p>Энергия: 596 кКал;</p>
                        <p>Белки: 26г; </p>
                        <p>Жиры: 32г; </p>
                        <p>Углеводы: 53г;</p>
                        <p className="text-gray-600 font-bold">Стоимость: 369₽</p>
                        </div>
                    </div>
                    <div className="border-r-2 border-black">
                        <p className="mt-12">Количество: {props.menu.chickenBurger}</p>
                    </div>
                    <div >
                        <button className="mt-10 bg-red-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleRemove("chickenBurger");
                        }}>Убрать</button>
                        <button className="mt-10 bg-green-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleAdd("chickenBurger");
                        }}>Добавить</button>
                    </div>
                </div>
            </div>
        </div>
            <div className="w-[80%] bg-white bg-opacity-30 m-auto rounded-2xl">
            <div className="p-2">
                <div className="grid grid-cols-4 gap-2">
                    <div className="flex border-r-2 border-black">
                        <img src={Burger2} className="w-16 h-16 mx-4 mt-4"/>
                        <p className="mt-10 text-xl font-bold">Чизбургер</p>
                    </div>
                    <div className="border-r-2 border-black pr-2 text-left">
                        <div className="ml-4">
                        <p>Энергия: 812 кКал;</p>
                        <p>Белки: 71г; </p>
                        <p>Жиры: 69г; </p>
                        <p>Углеводы: 50г;</p>
                        <p className="text-gray-600 font-bold">Стоимость: 450₽</p>
                        </div>
                    </div>
                    <div className="border-r-2 border-black">
                        <p className="mt-12">Количество: {props.menu.cheeseBurger}</p>
                    </div>
                    <div >
                        <button className="mt-10 bg-red-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleRemove("cheeseBurger");
                        }}>Убрать</button>
                        <button className="mt-10 bg-green-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleAdd("cheeseBurger");
                        }}>Добавить</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="w-[80%] bg-white bg-opacity-30 m-auto rounded-2xl">
            <div className="p-2">
                <div className="grid grid-cols-4 gap-2">
                    <div className="flex border-r-2 border-black">
                        <img src={Chicken} className="w-16 h-16 mx-4 mt-4"/>
                        <p className="mt-10 text-xl font-bold">Куриный баскет</p>
                    </div>
                    <div className="border-r-2 border-black pr-2 text-left">
                        <div className="ml-4">
                        <p>Энергия: 782 кКал;</p>
                        <p>Белки: 32г; </p>
                        <p>Жиры: 49г; </p>
                        <p>Углеводы: 35;</p>
                        <p className="text-gray-600 font-bold">Стоимость: 530₽</p>
                        </div>
                    </div>
                    <div className="border-r-2 border-black">
                        <p className="mt-12">Количество: {props.menu.chickenBasket}</p>
                    </div>
                    <div >
                        <button className="mt-10 bg-red-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleRemove("chickenBasket");
                        }}>Убрать</button>
                        <button className="mt-10 bg-green-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleAdd("chickenBasket");
                        }}>Добавить</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="w-[80%] bg-white bg-opacity-30 m-auto rounded-2xl">
            <div className="p-2">
                <div className="grid grid-cols-4 gap-2">
                    <div className="flex border-r-2 border-black">
                        <img src={coke} className="w-16 h-16 mx-4 mt-4"/>
                        <p className="mt-10 text-xl font-bold">Добрый кола</p>
                    </div>
                    <div className="border-r-2 border-black pr-2 text-left">
                        <div className="ml-4">
                        <p>Энергия: 212 кКал;</p>
                        <p>Белки: 0г; </p>
                        <p>Жиры: 0г; </p>
                        <p>Углеводы: 53г;</p>
                        <p className="text-gray-600 font-bold">Стоимость: 109₽</p>
                        </div>
                    </div>
                    <div className="border-r-2 border-black">
                        <p className="mt-12">Количество: {props.menu.cola}</p>
                    </div>
                    <div >
                        <button className="mt-10 bg-red-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleRemove("cola");
                        }}>Убрать</button>
                        <button className="mt-10 bg-green-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleAdd("cola");
                        }}>Добавить</button>
                    </div>
                </div>
            </div>
            </div>
                <div className="w-[80%] bg-white bg-opacity-30 m-auto rounded-2xl">
            <div className="p-2">
                <div className="grid grid-cols-4 gap-2">
                    <div className="flex border-r-2 border-black">
                        <img src={Pizza} className="w-16 h-16 mx-4 mt-4"/>
                        <p className="mt-10 text-xl font-bold">Кусочек пепперони</p>
                    </div>
                    <div className="border-r-2 border-black pr-2 text-left">
                        <div className="ml-4">
                        <p>Энергия: 309 кКал;</p>
                        <p>Белки: 12г; </p>
                        <p>Жиры: 15г; </p>
                        <p>Углеводы: 24г;</p>
                        <p className="text-gray-600 font-bold">Стоимость: 120₽</p>
                        </div>
                    </div>
                    <div className="border-r-2 border-black">
                        <p className="mt-12">Количество: {props.menu.pizza}</p>
                    </div>
                    <div >
                        <button className="mt-10 bg-red-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleRemove("pizza");
                        }}>Убрать</button>
                        <button className="mt-10 bg-green-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleAdd("pizza");
                        }}>Добавить</button>
                    </div>
                </div>
            </div>
            </div>
            
            <div className="w-[80%] bg-white bg-opacity-30 m-auto rounded-2xl mb-5">
            <div className="p-2">
                <div className="grid grid-cols-4 gap-2">
                    <div className="flex border-r-2 border-black">
                        <img src={Fries} className="w-16 h-16 mx-4 mt-4"/>
                        <p className="mt-10 text-xl font-bold">Ролл + картошка фри</p>
                    </div>
                    <div className="border-r-2 border-black pr-2 text-left">
                        <div className="ml-4">
                        <p>Энергия: 1247 кКал;</p>
                        <p>Белки: 129г; </p>
                        <p>Жиры: 137г; </p>
                        <p>Углеводы: 87г;</p> 
                        <p className="text-gray-600 font-bold">Стоимость: 657₽</p>
                        </div>
                    </div>
                    <div className="border-r-2 border-black">
                        <p className="mt-12">Количество: {props.menu.fries}</p>
                    </div>
                    <div >
                        <button className="mt-10 bg-red-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleRemove("fries");
                        }}>Убрать</button>
                        <button className="mt-10 bg-green-600 m-2 p-2 w-24 rounded-xl border-white border-[1px] " onClick={() => {
                            props.handleAdd("fries");
                        }}>Добавить</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
)

}


export default Basket