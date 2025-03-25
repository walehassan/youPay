import "./VisaCard.css";
import world from "../../assets/world.svg";
import chip from "../../assets/chip.png";
import visa from "../../assets/visa.png";
import partern from "../../assets/partern.jpg"


const VisaCard = () => {
  return (
    <div className="visa-card">
        <div className="visa-card-inner">
            <div className="front">
                <img src={world} className="map-img" alt="map image" />
                <div className="row">
                    <img src={chip} className="icon" alt="chip" />
                    <img src={visa} className="icon" alt="visa" />
                </div>
                <div className="row card-no">
                    <p>9083</p>
                    <p>4190</p>
                    <p>4021</p>
                    <p>5677</p>
                </div>
                <div className="row card-holder">
                    <p>CARD HOLDER</p>
                    <p>VALID TILL</p>
                </div>
                <div className="row name">
                    <p>ANT KWAME</p>
                    <p>03/12</p>
                </div>
            </div>
            <div className="back">
                <img src={world} className="map-img" alt="map image" />
                <div className="bar"></div>
                <div className="row card-cvv">
                    <div>
                        <img src={partern} alt="" />
                    </div>
                    <p>449</p>
                </div>
                <div className="row card-text">
                    <p>YouPay's Virtual Card enables secure, instant payment giving you access to seamless financial management</p>
                </div>
                <div className="row signature">
                    <p>CUSTOMER SIGNATURE</p>
                    <img src={visa} className="icon" alt="visa" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisaCard