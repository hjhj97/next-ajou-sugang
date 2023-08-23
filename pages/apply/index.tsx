import React, { useRef, useState } from "react";
import styles from "@/styles/apply.module.css";
import { applyLecture } from "@/mock/server";
import SugangTable from "@/components/SugangTable";

export interface Lecture {
  name: string;
  code: string;
}

function Apply() {
  const lectureRef = useRef<HTMLInputElement>();
  const lectureCodeRef = useRef<HTMLInputElement>();
  const [preSugangList, setPreSugangList] = useState<Lecture[]>([{ code: "AB123", name: "컴퓨터 프로그래밍 입문" }]);
  const [sugangList, setSugangList] = useState<Lecture[]>([]);

  const onClickApply = async (lecture: Lecture) => {
    const res = await applyLecture();
    if (res) {
      // 신청 성공
      setSugangList((prev) => [...prev, lecture]);
      setPreSugangList((prev) => prev.filter((item) => item.code !== lecture.code));
    } else {
      // 실패
      alert("정원이 초과되었습니다.");
    }
  };

  const onClickDelete = async () => {
    //
  };

  const addPreSugang = () => {
    if (lectureRef.current == undefined || lectureCodeRef.current == undefined) return;
    const lectureName = lectureRef.current?.value;
    const lectrueCode = lectureCodeRef.current?.value;
    if (lectureName == "" || lectrueCode == "") {
      alert("강의명과 코드를 입력해주세요");
      return;
    }

    setPreSugangList((prev) => [...prev, { name: lectureName, code: lectrueCode }]);
    lectureRef.current.value = "";
    lectureCodeRef.current.value = "";
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>수강신청</h1>

      <div style={{ border: "1px solid black", marginTop: "2rem", padding: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", margin: "2rem 0" }}>
          <div>
            <p>수강신청기간 수강신청 정보</p>
            <p style={{ color: "red", fontSize: "0.8rem" }}>
              *재수강신청인 경우, [재수강]란에 붉은색이라고 입력됩니다.
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <p>수강번호</p>
            <div>
              <input type="text" />
              <button onClick={onClickApply}>신청</button>
            </div>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>예비수강신청목록</h4>

            <div style={{ display: "flex" }}>
              <label>총 신청학점 : </label>
              <input type="text" style={{ width: "50px" }} />
            </div>
          </div>
          <div>
            <label htmlFor="lecture-name">강의명</label>
            <input type="text" id="lecture-name" ref={lectureRef} />
            <label htmlFor="lecture-code">강의코드</label>
            <input type="text" id="lecture-code" ref={lectureCodeRef} />
            <button onClick={addPreSugang}>예비신청 강의추가</button>
          </div>
          <SugangTable sugangList={preSugangList} onClickButton={onClickApply} />
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h4>수강신청목록</h4>
          <SugangTable sugangList={sugangList} onClickButton={onClickDelete} />
        </div>
      </div>
    </div>
  );
}

export default Apply;
