export default function Button({label, onclick}){
    return(
        <button onClick={onclick} className="btn">
            {label}
        </button>
    );
}