import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    return (_jsxs(_Fragment, { children: [_jsx("h2", { style: { textAlign: "center", marginBottom: "12px" }, children: "About" }), _jsxs("div", { onClick: nextText, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), style: {
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%", // ← 親(ContentBox)に依存
                }, children: [_jsx("div", { style: {
                            position: "relative",
                            overflow: "hidden",
                            flexGrow: 1,
                            textAlign: "center",
                        }, children: _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.p, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.4 }, style: {
                                    position: "absolute",
                                    whiteSpace: "pre-line",
                                    width: "100%",
                                    left: 0,
                                    textAlign: "center",
                                }, children: texts[index] }, index) }) }), _jsx(AnimatePresence, { children: hover && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 0.7 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, style: {
                                textAlign: "center",
                                fontSize: "12px",
                                marginTop: "12px",
                            }, children: "\u30AF\u30EA\u30C3\u30AF\u3067\u7D9A\u304D\u3092\u8AAD\u3080" })) })] })] }));
}
