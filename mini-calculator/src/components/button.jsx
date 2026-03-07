export default function Button({onclick, label}){
    // console.log("cal");
    return(

    <button onClick={onclick} className="btn">
        {label}
    </button>
    )
}