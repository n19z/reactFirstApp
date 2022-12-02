import React from 'react';
import '../App.css';

function Footer() {
    return (
        <footer className="footer flex-flow-column-nowrap">
                <div className="title m-t-1">Follow our @instagram_name</div>
                <div className="post-line flex-flow-row">
                    <img src={require(`../assets/footer/footer (2).png`)} alt="" />
                    <img src={require(`../assets/footer/footer (3).png`)} alt="" />
                    <img src={require(`../assets/footer/footer (4).png`)} alt="" />
                    <img src={require(`../assets/footer/footer (1).png`)} alt="" />
                    <img src={require(`../assets/footer/footer (5).png`)} alt="" />
                    <img src={require(`../assets/footer/footer (6).png`)} alt="" />
                </div>
                <div className="title logo">FASHION</div>
                <div className="bikini-bottom flex-flow-row">
                    <span>Home</span>
                    <span>Recipes</span>
                    <span>Article</span>
                    <span>Contant</span>
                    <span>Purchase</span>
                </div>
                <div className="delimiter"></div>
                <div className="title">@2033 Logwork. All Right Reserved.</div>
            </footer>
    )
};

export default Footer;