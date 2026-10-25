import { useState } from "react";

export default function Toggle() {
  const [lang, setLang] = useState("en");
  return (
    <div>
      <h1>Toggle</h1>
      {lang === "en" ? (
        <p>Welcome</p>
      ) : lang === "bn" ? (
        <p>স্বাগতম</p>
      ) : (
        <p>ようこそ</p>
      )}
      <button onClick={() => setLang("en")}>EN</button>
      <button onClick={() => setLang("bn")}>BN</button>
      <button onClick={() => setLang("jp")}>JP</button>
    </div>
  );
}
