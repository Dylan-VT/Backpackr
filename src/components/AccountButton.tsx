

interface AccountButtonProps {
    logged_in: boolean
}

let AccountButton = (props: AccountButtonProps) => {
    //set link
    if (props.logged_in) {
        //if logged in use Account Button
        return (
            <button className="mx-5"><a href="/account">Account</a></button>
        )
    }
    //else show login Button
    return (
        <button className="mx-5"><a href="/login">Login</a></button>
    )
    
}

export default AccountButton