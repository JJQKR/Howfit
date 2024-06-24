import React, { useState } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="mt-40">
        로그인페이지입니다
       
        <div className="flex items-center flex-col">
        <h2>Login</h2>
          <form>
            <div>
            <label htmlFor="inputId">아이디</label>
            <div className="border-solid border-2 border-pink-500">
            <input
              id="inputId"
              type="text"
              value={id}
              placeholder="아이디를 입력해주세요"
              onChange={(e) => setId(e.target.value)}
            />
            </div>
            </div>
            
           <div><label htmlFor="inputPassword">비밀번호</label>
           <div className="border-solid border-2 border-pink-500">
            <input
              id="inputPassword"
              type="password"
              value={password}
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            {/* password 아마 string이어서 number변환 필요? */}</div>
            
            <button className="bg-gray-300" type="submit">로그인하기</button>
          </form>
        </div>
      </div>
    </>
  );
}
