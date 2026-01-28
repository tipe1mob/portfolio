import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import SectionBox from "./components/common/SectionBox";
function App() {
    return (_jsxs("div", { style: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(135deg, #e0e7ff, #f8fafc)",
        }, children: [_jsx(SectionBox, { style: {
                    borderRadius: "0 0 24px 24px",
                }, children: _jsx(Header, {}) }), _jsx(SectionBox, { transparent: true, noBorder: true, style: {
                    flex: 1,
                }, children: _jsx(Home, {}) }), _jsx(SectionBox, { style: {
                    borderRadius: "24px 24px 0 0",
                }, children: _jsx(Footer, {}) })] }));
}
export default App;
