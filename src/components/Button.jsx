function Button({live, git}){
    return (
        <div>
            <a href={live}><button>See This Live</button></a>
            <a href={git}><button>View Code</button></a>
        </div>
    )
}

export default Button;