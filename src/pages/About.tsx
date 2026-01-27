import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const texts = [
  `初めまして！ポートフォリオサイトを閲覧いただきありがとうございます！
高校時からプログラミングを始め、様々なことを学びながら現在も成長を重ねています。`,

  `専門学校卒業後、カコムス株式会社に入社。
ビジネスソリューション部として配属され、
主に保守業務を担当し、Access や JavaScript を使用した
システム保守に携わってきました。`,

  `チーム開発ではリードプログラマの経験があります。
専門学校で経験したスパイラル開発の中で、
正確なコミュニケーションを意識し、
チームの協力を得ながら開発を完遂しました。`,

  `趣味はゲームです。遊ぶのも、作るのも好きです。`,

  `将来的にはフロントエンドを主軸に、
バックエンドまで対応できる
Webアプリケーションエンジニアを目指しています。
また、自作ゲームを販売し、
多くの人に楽しんでもらうことも目標としています。`,
];

export default function About() {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const nextText = () => {
    setIndex((prev) => (prev + 1) % texts.length);
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "12px" }}>
        About
      </h2>

      <div
        onClick={nextText}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%", // ← 親(ContentBox)に依存
        }}
      >
        {/* テキスト表示エリア */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{
                position: "absolute",
                whiteSpace: "pre-line",
                width: "100%",
                left: 0,
                textAlign: "center",
              }}
            >
              {texts[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* ホバー時ヒント（下部中央） */}
        <AnimatePresence>
          {hover && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                textAlign: "center",
                fontSize: "12px",
                marginTop: "12px",
              }}
            >
              クリックで続きを読む
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
