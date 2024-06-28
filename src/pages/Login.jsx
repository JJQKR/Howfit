import React, { useState } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [stature, setStature] = useState("");
  const [weight, setWeight] = useState("");
  const [fatAmount, setFatAmount] = useState("");
  const [fatPercentage, setFatPercentage] = useState("");
  const [muscleAmount, setMuscleAmount] = useState("");



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

      
      <div className="flex items-center flex-col">
      <form>
  
      <p>성별을 선택해주세요</p>
<fieldset className="border-solid border-2 border-pink-500">
  <div>
    <input type="radio" id="female" name="gender" value="female" checked />
    <label for="female">여성</label>
  </div>

  <div>
    <input type="radio" id="male" name="gender" value="male" />
    <label for="male">남성</label>
  </div>

  <div>
    <input type="radio"  id="none" name="gender" value="none" />
    <label for="none">무응답</label>
  </div>
  </fieldset>
  


      <div>신체 정보를 입력해주세요</div>
    <p>키</p>
    <input type="text" value={stature} onChange={(e) => {setStature(e.target.value)}}
     className="border-solid border-2 border-pink-500" placeholder="숫자만 입력해주세요(cm)"/> 
    <p>몸무게</p>
    <input type="text" value={weight} onChange={(e) => {setWeight(e.target.value)}} className="border-solid border-2 border-pink-500" placeholder="숫자만 입력해주세요(kg)"/> 
    <p>체지방량</p>
    <input type="text" value={fatAmount} onChange={(e) => {setFatAmount(e.target.value)}} className="border-solid border-2 border-pink-500" placeholder="숫자만 입력해주세요(kg)"/> 

    <p>체지방률</p>

    <input type="text" value={fatPercentage} onChange={(e) => {setFatPercentage(e.target.value)}} className="border-solid border-2 border-pink-500" placeholder="숫자만 입력해주세요(%)"/> 

    <p>근육량</p>
    <input type="text" value={muscleAmount} onChange={(e) => {setMuscleAmount(e.target.value)}} className="border-solid border-2 border-pink-500" placeholder="숫자만 입력해주세요(kg)"/> 
    
<button>저장하기</button>
    

      </form>
      </div>
    </>
  );
}
