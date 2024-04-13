import { useState, ReactNode } from "react";

interface Props {
  children: string;
  expanded?: boolean;
  maxChars?: number;
}
const ExpandableText = ({
  children,
  expanded = false,
  maxChars = 100,
}: Props) => {
  const [isExpanded, setExpanded] = useState(expanded);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars) + "...";

  return (
    <>
      <p>
        {text}
        <button
          onClick={() => {
            setExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Less" : "More"}
        </button>
      </p>
    </>
  );
};

export default ExpandableText;
