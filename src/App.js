import './css/app.9874624c.css';

function App() {
    return (
        <div>
            <div className="page" style={{ backgroundImage:`url("./img/gold-digger-house-4@1x.2c3b3a00.png")` }}>
                <div className="viewContainer mint">
                    <div className="mintCard">
                        <center>
                            <p className="title1 mintTitle"
                               style={{fontSize: "70px", fontWeight: "bold", color: 'white'}}>THE PI CHARITY CLUB</p>
                            <p className="mintTitle" style={{fontSize: "20px", color: 'white'}}>PI Holders are official
                                investors of school in
                                Africa</p>
                        </center>
                        <div className="inline22">
                            <button className="mintButton" style={{borderRadius: '50%'}}>-</button>
                            <button className="mintButton1 selected">1</button>
                            <button className="mintButton" style={{borderRadius: '50%'}}>+</button>
                        </div>
                        <p className="text nftPrice titleFont" style={{fontSize: 25}}>Price : X.X ETH</p>
                        <div className="text nbNft titleFont" style={{fontSize: 25}}>Minted : XXX / XXXX</div>
                        <center>
                            <button className="connectButton titleFont" style={{fontWeight: "bold"}}>Connect wallet
                            </button>
                            <br/>
                            <button className="validateButton titleFont" style={{fontWeight: "bold"}}> Mint</button>
                        </center>
                    </div>
                </div>
                <img src="./img/redlip.png" className="redlip22"/>
                <img src="./img/coin-5@1x_cut.a0f51c8b.png" className="coin22"/>
            </div>
        </div>
    )
}

export default App;
