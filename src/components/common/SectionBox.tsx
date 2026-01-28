import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  style?: React.CSSProperties;
  noBorder?: boolean;
  transparent?: boolean;
};

export default function SectionBox({
  children,
  style,
  noBorder,
  transparent,
}: Props) {
  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",

        /* background 切り替え */
        background: transparent
          ? "transparent"
          : "rgba(255, 255, 255, 0.6)",

        backdropFilter: transparent ? "none" : "blur(12px)",
        WebkitBackdropFilter: transparent ? "none" : "blur(12px)",

        border: noBorder ? "none" : "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: transparent
          ? "none"
          : "0 8px 32px rgba(0, 0, 0, 0.08)",

        ...style,
      }}
    >
      {children}
    </div>
  );
}
