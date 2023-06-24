import "../Main.css"
import Burger from "../assets/Images/food1.png"
import Fries from "../assets/Images/about.png"
import Burger2 from "../assets/Images/food2.png"
import Chicken from "../assets/Images/food3.png"
import { useNavigate } from "react-router-dom"



function Main() {
    
    let navigate = useNavigate();
    
    const toMenu = () => {
        const link = "/menu";
        navigate(link);
    }
    
    return (
        <div className="main text-center font-light items-center justify-center pt-20">
            <div className="">
                <h1 className="text-6xl font-bold py-10">
                    Последствия Употребления Фастфуда в Питании
                </h1>

                <h3 className="text-md italic">
                    Проект Александра Голзари 
                </h3>
            </div>

            <div className="w-[96%] mx-auto mt-32 justify-items-center rounded-2xl items-center  bg-white bg-opacity-30">
                <div className="grid grid-cols-2 gap-x-2">
                    <div className=" text-left p-5">


                        <h5 className="text-2xl py-2 text-gray-600 ">
                        Моя задача заключается в создании сайта, где можно наглядно посмотреть, какие вредные вещества содержатся в разных продуктах фаст-фуда 
                        </h5>

                        <h5 className="text-2xl py-2 text-gray-600 ">
                        Мы даём совет по вашей диете
                        </h5>

                    </div>
                    <div className="flex ml-24 mt-10">
                            <img src={Burger} alt="Burger" className="h-48"></img>
                            <img src={Fries} alt="Fries" className="h-48"></img>
                            <img src={Burger2} alt="Burger2" className="h-48"></img>
                    </div>
                </div>
                <button href = 'Menu.js'className="start-button px-12 py-[0.5rem] rounded-md my-5" onClick={() => toMenu()}>Начать</button>
                
            </div>
        </div>
    )
}


export default Main