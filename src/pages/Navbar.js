import { useNavigate } from "react-router-dom"

function Navbar() {
    const aStyle = {
        display: "inline",
        marginLeft: "auto",
        marginRight: "auto"
    }
    let navigate = useNavigate();

    const toMenu = () => {
        const link = "/menu";
        navigate(link);
    }
    const toBasket = () => {
        const link = "/basket";
        navigate(link);
    }

    const toMain = () => {
        const link = "/";
        navigate(link);
    }

    const toContacts = () => {
        const link = "/contacts";
        navigate(link);
    }
    const toTotal = () => {
        const link = "/total";
        navigate(link);
    }


    return (
    <div className='navbar font-light fixed w-[100%]'>
        <nav className='h-14  bg-black flex items-center  text-white w-[100%]'>
          <button onClick={toMain} className='ml-2 text-red-500 border-[0.5px] border-red-500 rounded-xl p-1 px-4 w-44'>
              Fast Food Problems
          </button>
          <ul className=" w-[80%] flex">

            <li  style={aStyle}>
                <button onClick={toMenu} className="hover:cursor-pointer">Меню</button>
            </li>
            <li  style={aStyle}>
                <button onClick={toBasket} className="hover:cursor-pointer">Корзина</button>
            </li>
            <li  style={aStyle}>
                <button onClick={toContacts} className="hover:cursor-pointer">Контакты</button>
            </li>
            
            
        </ul>
      </nav>
    </div>
    )
}

export default Navbar