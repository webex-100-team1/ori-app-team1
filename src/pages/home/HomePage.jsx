import { signOut } from "firebase/auth";
import { Link } from "react-router";
import { auth } from "../../firebase.js";
import "./HomePage.css";

const modes = [
  { path: "/calculator", name: "ノーマル電卓", text: "ふつうに計算できる電卓" },
  { path: "/warikan", name: "割り勘", text: "人数で割って 1 人分を出す" },
  { path: "/prank", name: "いたずら電卓", text: "ちょっと答えがおかしい電卓" },
];

function HomePage(props) {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="home">
      <h1>電卓アプリ</h1>

      <div className="home-user">
        <span>{props.user.displayName}</span>
        <Link to="/mypage">マイページ</Link>
        <button onClick={logout}>ログアウト</button>
      </div>

      <ul className="mode-list">
        {modes.map((mode) => (
          <li key={mode.path}>
            <Link to={mode.path} className="mode-card">
              <h2>{mode.name}</h2>
              <p>{mode.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
