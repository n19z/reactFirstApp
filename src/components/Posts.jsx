import '../App.css'

function Posts () {
    return (
        <div className="content">
        <div className="news flex-flow-row-wrap">
            <div className="post flex-flow-column">
                <img src={require(`../assets/post/post1.jpg`)} alt="post" />
                <div className="description flex-flow-column">
                    <span className="post--title f-s-0">TOURISM</span>
                    <span className="post--text f-s-3">One of Saturn’s largest rings may be newer than anyone</span>
                    <span className="post--time f-s-0">June 6, 2019 By Rickie Baroch</span>
                </div>
            </div>
            <div className="post flex-flow-column">
                <img src={require(`../assets/post/post2.png`)} alt="post" />
                <div className="description flex-flow-column">
                    <span className="post--title f-s-0">SPORT</span>
                    <span className="post--text f-s-3">Two of Saturn’s largest rings may be newer than no one</span>
                    <span className="post--time f-s-0">August 1, 2011 By Thomas Muller</span>
                </div>
            </div>
            <div className="post flex-flow-column">
                <img src={require(`../assets/post/post3.png`)} alt="post" />
                <div className="description flex-flow-column">
                    <span className="post--title f-s-0">TOURISM</span>
                    <span className="post--text f-s-3">Three of Saturn’s largest rings may be newer than anyone</span>
                    <span className="post--time f-s-0">September 26, 2050 By Vlad Minin</span>
                </div>
            </div>
            <div className="post flex-flow-column">
                <img src={require(`../assets/post/post4.png`)} alt="post" />
                <div className="description flex-flow-column">
                    <span className="post--title f-s-0">FASHION</span>
                    <span className="post--text f-s-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                    <span className="post--time f-s-0">June 6, 2019 By Rickie Baroch</span>
                </div>
            </div>
            <div className="post flex-flow-column">
                <img src={require(`../assets/post/post5.png`)} alt="post" />
                <div className="description flex-flow-column">
                    <span className="post--title f-s-0">CLOTHES</span>
                    <span className="post--text f-s-3">One of Saturn’s largest rings may be newer than anyone</span>
                    <span className="post--time f-s-0">May 63, 2065 By Rickie Baroch</span>
                </div>
            </div>
            <div className="post flex-flow-column">
                <img src={require(`../assets/post/post6.png`)} alt="post" />
                <div className="description flex-flow-column">
                    <span className="post--title f-s-0">TOURISM</span>
                    <span className="post--text f-s-3">One of Saturn’s largest rings may be newer than anyone</span>
                    <span className="post--time f-s-0">June 6, 2019 By Rickie Baroch</span>
                </div>
            </div>
            <div className="post post--big flex-flow-column">
                <img src={require(`../assets/post/bigpost1.png`)} alt="post" />
                <div className="description flex-flow-column">
                    <span className="post--title f-s-0">CLOTHES</span>
                    <span className="post--text f-s-3">One of Saturn’s largest rings may be newer than anyone</span>
                    <span className="post--time f-s-0">January 1, 2024 By Femmka Lowatch</span>
                    <span className="text f-s-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium, totam rem</span>
                </div>
            </div>
            <div className="post flex-flow-column">
                <img src={require(`../assets/post/post7.png`)} alt="post" />
                <div className="description flex-flow-column">
                    <span className="post--title f-s-0">FASHION</span>
                    <span className="post--text f-s-3">One of Saturn’s largest rings may be newer than anyone</span>
                    <span className="post--time f-s-0">December 31, 2013 By Puytr Fuckeah</span>
                </div>
            </div>
            <div className="post flex-flow-column">
                <img src={require(`../assets/post/post8.png`)} alt="post" />
                <div className="description flex-flow-column">
                    <span className="post--title f-s-0">TOURISM</span>
                    <span className="post--text f-s-3">One of Saturn’s largest rings may be newer than anyone</span>
                    <span className="post--time f-s-0">April 11, 2012 By Londer Pkywe</span>
                </div>
            </div>
            <div className="post flex-flow-column">
                <img src={require(`../assets/post/post1.jpg`)} alt="post" />
                <div className="description flex-flow-column">
                    <span className="post--title f-s-0">SUMMER</span>
                    <span className="post--text f-s-3">One of Saturn’s largest rings may be newer than anyone</span>
                    <span className="post--time f-s-0">June 6, 2019 By Poyter Fhuied</span>
                </div>
            </div>
            <div className="post flex-flow-column">
                <img src={require(`../assets/post/post10.png`)} alt="post" />
                <div className="description flex-flow-column">
                    <span className="post--title f-s-0">SUMMER</span>
                    <span className="post--text f-s-3">One of Saturn’s largest rings may be newer than anyone</span>
                    <span className="post--time f-s-0">June 16, 2019 By Rickie Baroch</span>
                </div>
            </div>
            <div className="pagination flex-flow-row m-b-4">
                <span className="post--time f-s-0">                  {'<'} </span>
                <span className="post--time f-s-0 m-w-1" style={{ color: '#ccc' }}>OLDER POST</span>
                <span className="post--time f-s-0">1</span>
                <span className="post--time f-s-0">2</span>
                <span className="post--time f-s-0">3</span>
                <span className="post--time f-s-0">...</span>
                <span className="post--time f-s-0">8</span>
                <span className="post--time f-s-0 m-w-1">NEXT POST</span>
                <span className="post--time f-s-0">{'>'}</span>
            </div>
        </div>
    </div>
    )
}

export default Posts;