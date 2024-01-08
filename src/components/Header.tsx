import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">home</Link>
        <Link to="/test">test</Link>
      </div>
    </div>
  );
};

export default Header;
