import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import SectionBox from "./components/common/SectionBox";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(135deg, #e0e7ff, #f8fafc)",
      }}
    >
      {/* Header */}
      <SectionBox
        style={{
          borderRadius: "0 0 24px 24px",
        }}
      >
        <Header />
      </SectionBox>

      {/* Home（完全透過） */}
      <SectionBox
        transparent
        noBorder
        style={{
          flex: 1,
        }}
      >
        <Home />
      </SectionBox>

      {/* Footer */}
      <SectionBox
        style={{
          borderRadius: "24px 24px 0 0",
        }}
      >
        <Footer />
      </SectionBox>
    </div>
  );
}

export default App;