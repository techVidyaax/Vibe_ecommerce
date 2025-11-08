import { useLocation, Link } from "react-router-dom";

export default function Receipt() {
  const location = useLocation();
  const receipt = location.state?.receipt;

  if (!receipt) return <p>No receipt found</p>;

  return (
    <div className="wrapper">
      <div className="receipt-wrapper">
        <h1>Thank you, {receipt.name}!</h1>
        <p>Email: {receipt.email}</p>
        <p>Total: ₹{receipt.total}</p>
        <p>Date: {new Date(receipt.purchasedAt).toLocaleString()}</p>

        <h3>Items:</h3>
        <ul>
          {receipt.items.map((item: any, idx: number) => (
            <li key={idx}>
              {item.name} x {item.qty} = ₹{item.price * item.qty}
            </li>
          ))}
        </ul>

        <Link to="/home">
          <button className="btn-back-home">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
