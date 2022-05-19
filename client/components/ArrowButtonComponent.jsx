
export function ArrowButton({value}) {
    return(
        <div className={"arrowButton-container"}>
                <input type={"Button"} value={value} className={"button-container"}/>

            <span className={"arrow-right"}>
                <i className="fa-solid fa-arrow-right"></i>
            </span>
        </div>
    )
}