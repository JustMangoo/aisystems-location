import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav style={{ display: "flex", gap: "20px" }}>
        <p>
          <Link to="">Home</Link>
        </p>
        <p>
          <Link to="forwards">Exp. sys: Forward Chaining</Link>
        </p>
        <p>
          <Link to="backwards">Exp. sys: Backward Chaining</Link>
        </p>
      </nav>
    </header>
  );
}
