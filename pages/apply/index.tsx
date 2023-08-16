import React from "react";
import styles from "@/styles/apply.module.css";
import { applyLecture } from "@/mock/server";

function apply() {
  const onClickApply = async () => {
    //const res = await fetch("/api/apply", { method: "POST", body: "AB123" });
    //const data = await res.json();
    //console.log(data);
    const res = await applyLecture();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>수강신청</h1>

      <div style={{ border: "1px solid black" }}>
        <div style={{ display: "flex", gap: "1rem", padding: "1rem 0" }}>
          <button onClick={onClickApply}>신청</button>
          <p>컴퓨터 프로그래밍 입문</p>
        </div>
      </div>
    </div>
  );
}

export default apply;
