import "./styles.css";

const fname = "Arbaaz";
const lname = "Khan";
let rand = parseInt(Math.random() * 10);
export default function App() {
  return (
    <>
      <h1>Wellcome {fname + " " + lname}!</h1>
      <p>Your lucky number is: {rand}</p>
    </>
  );
}
