import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import LoginPage from "./pages/login/LoginPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import CalculatorPage from "./pages/calculator/CalculatorPage.jsx";
import MyPage from "./pages/mypage/MyPage.jsx";
import WarikanPage from "./pages/warikan/WarikanPage.jsx";
import PrankPage from "./pages/prank/PrankPage.jsx";
import SlotPage from "./pages/slot/SlotPage.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <p>読み込み中…</p>;
  }

  if (user === null) {
    return <LoginPage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/mypage" element={<MyPage user={user} />} />
        <Route path="/warikan" element={<WarikanPage user={user} />} />
        <Route path="/prank" element={<PrankPage user={user} />} />
        <Route path="/slot" element={<SlotPage user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
