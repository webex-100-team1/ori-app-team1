import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase.js";
import { Link } from "react-router";
import "./MyPage.css";

function MyPage(props) {
  const [achievements, setAchievements] = useState([]);

  const getAchievements = async () => {
    const snapshot = await getDocs(
      query(
        collection(db, "achievements"),
        where("uid", "==", props.user.uid),
        orderBy("createdAt", "desc"),
      ),
    );
    const newAchievements = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setAchievements(newAchievements);
  };

  useEffect(() => {
    if (props.user !== null && props.user !== undefined) {
      getAchievements();
    }
  }, []);

  if (props.user === null || props.user === undefined) {
    return <p>ログインしてください</p>;
  }

  return (
    <div className="mypage">
      <h1>マイページ</h1>
      <h2>{props.user.displayName}さんのマイページ</h2>

      <h3>獲得した実績</h3>

      {achievements.length === 0 ? <p>まだ実績がありません</p> : ""}

      {achievements.map((achievement) => (
        <div key={achievement.id}>
          <p>{achievement.name}</p>
          <p>
            開放日時：
            {new Date(achievement.createdAt).toLocaleString("ja-JP")}
          </p>
        </div>
      ))}

      <Link to="/">一覧に戻る</Link>
    </div>
  );
}

export default MyPage;
