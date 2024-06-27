import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 예제 (LOGIN-SUCCESSFUL)
  const onLogin = () => {
    axios({
      method: "POST",
      url: "https://reqres.in/api/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        console.log(response);

        document.cookie = `token=${response.data.token}; expires=Thu, 30 May 2024 19:20:00 UTC`;
        localStorage.setItem("token", response.data.token);

        const tokenFromLs = localStorage.getItem("token");
        console.log(tokenFromLs);
      })

      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };

  // 쿠키 삭제
  const deleteCookie = () => {
    document.cookie = `token=; expires=Thu, 30 May 2023 19:20:00 UTC`;
  };

  // 로컬스토리지 삭제
  const deleteLS = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <h1>POST</h1>
      {/* POST 로그인 예제 */}
      <h3>로그인</h3>
      <div>
        <input
          type="email"
          placeholder="email을 입력하세요"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <input
        type="button"
        onClick={(e) => onLogin(e.target.value)}
        value="로그인"
      />
      <br />
      <br />

      <button onClick={deleteCookie}>쿠키 삭제하기</button>
      <br />
      <button onClick={deleteLS}>로컬스토리지 삭제하기</button>
    </>
  );
}

export default App;