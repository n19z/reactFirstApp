import '../App.css'

function Sidebar () {
    return (
                <div className="slider  flex-flow-column f-s-3">
                    <button className="btn">
                        About the author
                    </button>
                    <div className="post flex-flow-column">
                        <img src={require(`../assets/slider/Bitmap1.jpg`)} alt="фотографирую закат" />
                        <div className="description flex-flow-column">
                            <span className="post--text f-s-3 olga"><strong>Olga Pavlova</strong></span>
                            <span className="post--text f-s-0 cooking"><i>Food & cooking bloger</i></span>
                            <span className="post--time f-s-0">Hi, I'm Olga. Cooking is the way I express my creative side to
                                the world. Welcome to my Kitchen Corner on…</span>
                            <hr className="delimiter m-t-2 m-b-1" />
                            <span className="post--title f-s-2 fake-btn">CONTINUE READING</span>
                        </div>
                    </div>
                    <button className="btn m-t-8">
                        Featured posts
                    </button>
                    <div className="post flex-flow-column">
                        <img src={require(`../assets/slider/Bitmap2.png`)} alt="фотографирую закат" />
                        <div className="description flex-flow-column">
                            <span className="post--title f-s-0">TOURISM</span>
                            <span className="post--text f-s-3">One of Saturn’s largest rings may be newer than anyone</span>
                            <span className="post--time f-s-0">June 6, 2019 By Rickie Baroch</span>
                        </div>
                    </div>
                    <div className="post flex-flow-column">
                        <img src={require(`../assets/slider/Bitmap3.png`)} alt="фотографирую закат" />
                        <div className="description flex-flow-column">
                            <span className="post--title f-s-0">TOURISM</span>
                            <span className="post--text f-s-3">One of Saturn’s largest rings may be newer than anyone</span>
                            <span className="post--time f-s-0">June 6, 2019 By Rickie Baroch</span>
                        </div>
                    </div>
                    <div className="post flex-flow-column">
                        <img src={require(`../assets/slider/Bitmap4.png`)} alt="фотографирую закат" />
                        <div className="description flex-flow-column">
                            <span className="post--title f-s-0">TOURISM</span>
                            <span className="post--text f-s-3">One of Saturn’s largest rings may be newer than anyone</span>
                            <span className="post--time f-s-0">June 6, 2019 By Rickie Baroch</span>
                        </div>
                    </div>
                    <button className="btn m-t-2">
                        Categories
                    </button>
                    <div className="block m-b-3 max-w">
                        <div className="row flex-flow-row space-between">
                            <div>Fashion</div>
                            <div>(23)</div>
                        </div>
                        <div className="delimiter"></div>
                        <div className="row flex-flow-row space-between">
                            <div>Style & clothes</div>
                            <div>(7)</div>
                        </div>
                        <div className="delimiter"></div>
                        <div className="row flex-flow-row space-between">
                            <div>Minimalism</div>
                            <div>(16)</div>
                        </div>
                        <div className="delimiter"></div>
                        <div className="row flex-flow-row space-between">
                            <div>Black & White</div>
                            <div>(5)</div>
                        </div>
                        <div className="delimiter"></div>
                        <div className="row flex-flow-row space-between">
                            <div>Modern clothes</div>
                            <div>(12)</div>
                        </div>
                        <div className="delimiter"></div>
                        <div className="row flex-flow-row space-between">
                            <div>Fashion</div>
                            <div>(23)</div>
                        </div>
                    </div>
                    <button className="btn m-b-3" id="socialMedia">
                        Social media
                    </button>
                    <div className="icons flex-flow-row-wrap max-w">
                        <div className="item flex-flow-column ">
                            <img src={require(`../assets/icons/f.png`)} alt="" />
                            <span>32k</span>
                            <span>likes</span>
                        </div>
                        <div className="item flex-flow-column ">
                            <img src={require(`../assets/icons/p.png`)} alt="" />
                            <span>32k</span>
                            <span>followers</span>
                        </div>
                        <div className="item flex-flow-column ">
                            <img src={require(`../assets/icons/Be.png`)} alt="" />
                            <span>84m</span>
                            <span>subscribes</span>
                        </div>
                        <div className="item flex-flow-column ">
                            <img src={require(`../assets/icons/bird.png`)} alt="" />
                            <span>75k</span>
                            <span>subscribes</span>
                        </div>
                        <div className="item flex-flow-column ">
                            <img src={require(`../assets/icons/Group Copy 2.png`)} alt="" />
                            <span>97k</span>
                            <span>likes</span>
                        </div>
                        <div className="item flex-flow-column ">
                            <img src={require(`../assets/icons/instagram (6) copy 4.png`)} alt="" />
                            <span>124k</span>
                            <span>followers</span>
                        </div>
                        <div className="item flex-flow-column ">
                            <img src={require(`../assets/icons/v.png`)} alt="" />
                            <span>14k</span>
                            <span>likes</span>
                        </div>
                        <div className="item flex-flow-column ">
                            <img src={require(`../assets/icons/youtube.png`)} alt="" />
                            <span>54k</span>
                            <span>followers</span>
                        </div>
                        <div className="item flex-flow-column ">
                            <img src={require(`../assets/icons/Shape Copy 5.png`)} alt="" />
                            <span>4k</span>
                            <span>subscribes</span>
                        </div>
                    </div>
                    <button className="btn m-b-1 m-t-3">
                        Tags
                    </button>
                    <div className="tags flex-flow-row-wrap max-w">
                        <span id="bus">Business</span>
                        <span id="free">Freelance</span>
                        <span id="money">Money</span>
                        <span>Experience</span>
                        <span>Lifestyle</span>
                        <span>SEO</span>
                        <span>Wordpress</span>
                        <span>Marketing</span>
                        <span>UX</span>
                        <span>Modern</span>
                        <span>Success</span>
                        <span>Nature</span>
                    </div>
                </div>
    )
}

export default Sidebar;