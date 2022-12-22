
import HeaderItem from "./HeaderItem";
import AccountButton from "./AccountButton";


let Header = () => {

    return (
        <div className='bg-coral h-14 shadow-xl flex flex-row'>
          <div className="w-10/12 min-h-max flex flex-row items-center">
            <HeaderItem text="Home" route="/"/>
            <HeaderItem text="Plan" route="/plan"/>
            <HeaderItem text="Explore" route="/explore"/>
          </div>
          <div className="w-2/12 flex flex-row-reverse">
            <AccountButton logged_in={true} />
          </div>
        </div>
    )
}

export default Header;