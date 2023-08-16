import React from "react";
import styles from "@/styles/header.module.css";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="http://sugang.ajou.ac.kr/images/white-logo.png"
                layout="fill"
                objectFit="contain"
                alt="로고"
              />
            </Link>
          </div>
          <Link href="/notice">공지사항</Link>
          <Link href="/apply">수강신청</Link>
          <Link href="/my">개인시간표</Link>
          <Link href="/changed">조정강의정보</Link>
        </div>

        <div className={styles.right}>
          <p>김아주 / 201234567</p>
          <button>로그아웃</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
