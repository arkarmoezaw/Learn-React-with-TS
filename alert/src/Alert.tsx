import { useState, type ReactNode } from "react";

type Props = {
  type?: "warning" | "information";
  heading: string;
  closable?: boolean;
  onClose?: () => void;
  children: ReactNode;
};

export default function Alert({
  type = "information",
  heading,
  closable,
  onClose,
  children,
}: Props) {
  const [visible, setVisible] = useState<boolean>(true);

  if (!visible) {
    return null;
  }

  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }

  return (
    <div>
      <div>
        <span
          role="img"
          aria-label={`${type === "warning" ? "Warning" : "Information"}`}
        >
          {type === "warning" ? "⚠️" : "ℹ️"}
        </span>
        <span>{heading}</span>
        {closable && <button onClick={handleCloseClick}>Close</button>}
      </div>
      <div>{children}</div>
    </div>
  );
}
