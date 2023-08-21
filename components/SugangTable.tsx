import { Lecture } from "@/pages/apply";
import React from "react";

function SugangTable({
  sugangList,
  onClickApply,
}: {
  sugangList: Lecture[];
  onClickApply: (lecture: Lecture) => void;
}) {
  return (
    <div>
      {sugangList.map((sugang) => (
        <div
          style={{ display: "flex", gap: "1rem", padding: "1rem 0", border: "1px solid black", marginTop: "0.5rem" }}
          key={sugang.code}
        >
          <button onClick={() => onClickApply(sugang)}>신청</button>
          <p>{sugang.name}</p>
        </div>
      ))}
    </div>
  );
}

export default SugangTable;
