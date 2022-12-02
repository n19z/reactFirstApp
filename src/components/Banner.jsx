import '../App.css';

function Banner() {
    return (
        <>
            <div className="banner">
                <img src={require(`../assets/banner2.jpg`)} alt="banner" width="100%" />
                <div className="subtitle flex-flow-column">
                    <span className="f-s-5 sub">Собачки</span>
                    <span className="text f-s-8">Благоговение – чувство, испытываемое человеком к Богу и собакой к человеку.</span>
                    <span className="f-s-2">June 6, 2019 By Rickie Baroch 4 comments</span>
                </div>
            </div>
            <br />
        </>
    )
};

export default Banner;