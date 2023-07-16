const CardData = ({heading, desc}) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl">
                {heading}
            </h1>
            <h1 className="text-dark_gray">
                {desc}
            </h1>
        </div>
    )
}

export default CardData;