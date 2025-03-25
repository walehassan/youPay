import "./Transactions.css";
import profile from "../../assets/profile.jpg";
import paystack from "../../assets/paystack.png";
import paypal from "../../assets/paypal.png"; 
import flutterwave from "../../assets/flutterwave.jpg";

const transactions = [
  {
    status: 1,
    name: "Olusola Adio",
    image: profile, 
    email: "olusolaadio3@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$500",
  },
  {
    status: 2,
    name: "Okpara Janet",
    image: paystack, 
    email: "okpara-jane@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$230",
  },
  {
    status: 1,
    name: "Kwame Nkrumah",
    image: paypal, 
    email: "nkrumahgabe@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$120",
  },
  {
    status: 0,
    name: "Michael Adinuba",
    image: flutterwave, 
    email: "michaeladinuba1@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$650",
  },
]

const Transactions = () => {
  const shortenText = (text,maxLength) => text.length > maxLength ? "..." + text.slice(-maxLength): text;

  return (
    <div className="transactions">
        <h2 className="title">Recent Transactions</h2>
        <table>
          <tbody>
            {transactions.map((data,index)=>{
              let status = 
              data.status === 1
              ? "Success"
              : data.status === 0
              ? "Failed"
              : "Processing";
              return(
                <tr key={index}>
                  <td className="minimize">
                    <div className="profile">
                      <img src={data.image} alt="" />
                    </div>
                  </td>
                  <td title={data.name} className="minimize">{data.name}</td>
                  <td className="minimize">{data.date}</td>
                  <td title={data.email}>{shortenText(data.email, 11)}</td>
                  <td title={data.amount}>{data.amount}</td>
                  <td>
                    <div className={status}>
                      {status}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  )
}

export default Transactions