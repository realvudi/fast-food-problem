
import { useEffect, useState } from "react"

function Total(props) {

    const chickenBurger = {
        energy: 596,
        proteins: 26,
        fats: 32,
        carbs: 53
    }

    const cheeseBurger = {
        energy: 812,
        proteins: 71,
        fats: 69,
        carbs: 50
    }

    const chickenBasket = {
        energy: 782,
        proteins: 32,
        fats: 49,
        carbs: 35
    }

    const cola = {
        energy: 212,
        proteins: 26,
        fats: 32,
        carbs: 53
    }

    const pizza = {
        energy: 309,
        proteins: 12,
        fats: 15,
        carbs: 24
    }

    const fries = {
        energy: 1247,
        proteins: 129,
        fats: 137,
        carbs: 87
    }
    let energyFood = 0;
    let proteins = 0;
    let fats = 0;
    let carbs = 0;

    energyFood += props.menu.chickenBurger * chickenBurger.energy;
    proteins += props.menu.chickenBurger * chickenBurger.proteins;
    fats += props.menu.chickenBurger * chickenBurger.fats;
    carbs += props.menu.chickenBurger * chickenBurger.carbs;

    energyFood += props.menu.cheeseBurger * cheeseBurger.energy;
    proteins += props.menu.cheeseBurger * cheeseBurger.proteins;
    fats += props.menu.cheeseBurger * cheeseBurger.fats;
    carbs += props.menu.cheeseBurger * cheeseBurger.carbs;

    energyFood += props.menu.chickenBasket * chickenBasket.energy;
    proteins += props.menu.chickenBasket * chickenBasket.proteins;
    fats += props.menu.chickenBasket * chickenBasket.fats;
    carbs += props.menu.chickenBasket * chickenBasket.carbs;

    energyFood += props.menu.cola * cola.energy;
    proteins += props.menu.cola * cola.proteins;
    fats += props.menu.cola * cola.fats;
    carbs += props.menu.cola * cola.carbs;

    energyFood += props.menu.pizza * pizza.energy;
    proteins += props.menu.pizza * pizza.proteins;
    fats += props.menu.pizza * pizza.fats;
    carbs += props.menu.pizza * pizza.carbs;

    energyFood += props.menu.fries * fries.energy;
    proteins += props.menu.fries * fries.proteins;
    fats += props.menu.fries * fries.fats;
    carbs += props.menu.fries * fries.carbs;


    const [information, setInformation] = useState({
        sex: "",
        age: 0,
        typeOfLife: 0
    });

    const [form, setForm] = useState(false);

    const [totalCal, setTotalCal] = useState(0);
    function handleSex(name) {

        setInformation(prevState => ({
            ...prevState,
            sex: name
        }));
    };

    function handleAge(type) {
        setInformation(prevState => ({
            ...prevState,
            age: type
        }))
    }

    function handleLife(type) {
        setInformation(prevState => ({
            ...prevState,
            typeOfLife: type
        }))
    }

    function handleTotalCal(value) {
        setTotalCal(prevState => prevState + value)
    }

    function submitForm() {
        if (information.sex === "male") {
            handleTotalCal(400);
        }

        if (information.age === 1) {
            handleTotalCal(2050);
        }
        else if (information.age === 2) {
            handleTotalCal(1900);
        }
        else if (information.age === 3) {
            handleTotalCal(1700);
        }
        else {
            handleTotalCal(1500);
        }

        if (information.typeOfLife === 2) {
            handleTotalCal(200);
        }
        else if (information.typeOfLife === 3) {
            handleTotalCal(400);
        }

        console.log(totalCal)
        setForm(true)
    }


    
    return(
        <div className="main text-center font-light items-center justify-center pt-20 overflow-y-scroll">
            

        <div>
            <h1 className="text-6xl font-bold py-10">
                Итог
            </h1>
                
            <div className="bg-white bg-opacity-30 w-[50%] m-auto p-5 rounded-2xl">
                <h1 className="text-4xl">Пройдите следующий опрос для результата:</h1>
                <hr className="border-t-[0.8px] border-gray-500 mt-5" />
                    
                <div>
                    <h1 className="text-2xl text-left ml-10 pt-5">Ваш Пол</h1>
                    <div className="flex w-[25%] m-auto">
                        <div className="radio">
                            <label>
                                <input
                                type="radio"
                                value="Male"
                                checked={information.sex === "male"}
                                onChange={() => handleSex("male")}
                                />
                                Мужской
                            </label>
                        </div>
                        <div className="radio ml-auto">
                            <label>
                                <input
                                type="radio"
                                value="Female"
                                checked={information.sex === "female"}
                                onChange={() => handleSex("female")}
                                />
                                Женский
                            </label>
                        </div>
                    </div>
                    
                    
                        
                    <h1 className="text-2xl text-left ml-10 pt-5">Ваш Возраст</h1>
                    
                    <div className="w-[50%] m-auto grid grid-cols-4">
                        <div className="radio">
                            <label>
                                <input
                                type="radio"
                                value="Teen"
                                checked={information.age === 1}
                                onChange={() => handleAge(1)}
                                />
                                14-17
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                type="radio"
                                value="20s"
                                checked={information.age === 2}
                                onChange={() => handleAge(2)}
                                />
                                18-30
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                type="radio"
                                value="Middle"
                                checked={information.age === 3}
                                onChange={() => handleAge(3)}
                                />
                                30-50
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                type="radio"
                                value="Old"
                                checked={information.age === 4}
                                onChange={() => handleAge(4)}
                                />
                                Старше 50
                            </label>
                        </div>
                    </div>
                    
                    <h1 className="text-2xl text-left ml-10 pt-5">Образ Жизни</h1>
                    
                    <div className="w-[50%] m-auto grid grid-cols-3">
                        <div className="radio">
                            <label>
                                <input
                                type="radio"
                                value="Sitting"
                                checked={information.typeOfLife === 1}
                                onChange={() => handleLife(1)}
                                />
                                Сидячий
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                type="radio"
                                value="Average"
                                checked={information.typeOfLife === 2}
                                onChange={() => handleLife(2)}
                                />
                                Умеренный
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                type="radio"
                                value="Active"
                                checked={information.typeOfLife === 3}
                                onChange={() => handleLife(3)}
                                />
                                Активный
                            </label>
                        </div>
                    </div>
                </div>
                
                {information.sex === "" || information.age === 0 || information.typeOfLife === 0 ? "" :
                <button className="btn btn-default bg-blue-500 p-2 rounded-xl mt-5" type="submit" onClick={submitForm}>
                    Получить результат
                </button>}
                
                    
                
            </div>
        </div>


                { form === false ? "" :            

            <div className="bg-white bg-opacity-30 w-[50%] m-auto p-5 rounded-2xl mt-10">
                <h1 className="text-3xl font-bold">Результат</h1>
                <div className="mb-5">
                    
                    <div className="flex w-[60%] m-auto text-xl">
                        <h1 className="">Ваша дневное употребление должно быть: </h1>
                        <h1 className="text-black ml-2">{totalCal} калорий</h1>
                    </div>

                </div>     

                <div>
                    <h1 className="text-3xl font-bold mb-2">Результат по Фастфуд Меню</h1>
                    <div className="grid grid-cols-4">
                        <h1>Энергия: {energyFood}</h1>
                        <h1>Белки: {proteins}</h1>
                        <h1>Жиры: {fats}</h1>
                        <h1>Углеводы: {carbs}</h1>
                    </div>
                    {totalCal === 0 ? "" : 
                        <div className="mt-10 text-2xl text-black">
                            {
                                /* 0% */
                                energyFood === 0 ? <div>Вы не употребляете фастфуд. Так держать!</div> : ""
                            }
    
                            {
                                /* 10% */
                                (0 < energyFood && energyFood / totalCal <= 0.1) ? <div>Вы употребляете умеренное количество фастфуда.</div> : ""
                            }
    
                            {
                                /* 25% */
                                (energyFood / totalCal > 0.1) && (energyFood / totalCal <= 0.5) ? <div>Вы употребляете умеренное количество фастфуда, но лучше убрать его из своего рациона</div> : ""
                            }
    
                            {
                                /* 50% */
                               energyFood / totalCal >= 0.5 ? <div>Вы употребляете слишком много фастфуда.</div> : ""
                            }
                        </div>
                    }
                    
                </div>
                    
            </div>
            }
            
            

        {/* <div className="">
            <h1 className="text-6xl font-bold py-10">
                Итог
            </h1>
            <h5 className="text-2xl py-2 text-black-600">
            Если вы будете принимать такой рацион пищи каждый день и всю свою жизнь, это может привести к разным болезням например: ожирение, проблемы с сердцем, диабет 2 типа, пептичская язва, панкреатит, гастрит, а также отсутвие нужных для организма питательных веществ. Но еще страшнее то что в этой пище почти нет клетчатки, а значит, она застаивается в кишечнике, бродит и гниет там, приводит к вздутию живота, дискомфорту в животе, способствует запорам. Кроме того, нарушается всасывание витаминов и железа – это приводит к анемии и снижению иммунитета.
            </h5>
        </div> */}
     </div>
    )
}
export default Total