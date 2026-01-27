import { jsx as _jsx } from "react/jsx-runtime";
export default function ContentBox({ children, height, noPadding }) {
    return (_jsx("div", { style: {
            height: height ? `${height}px` : "auto",
            padding: noPadding ? "0" : "24px",
            borderRadius: "16px",
            backdropFilter: "blur(10px)",
            background: "rgba(141, 141, 141, 0.15)",
            display: "flex",
            flexDirection: "column",
        }, children: children }));
}
