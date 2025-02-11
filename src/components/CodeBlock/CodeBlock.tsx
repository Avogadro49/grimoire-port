import { useState, useEffect, useRef } from "react";

interface CodeLine {
  type: "comment" | "command";
  text: string;
}

interface CodeBlockProps {
  code: string;
  line?: number;
  interactive?: boolean;
  title?: string;
  onExecute?: (command: string) => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  // line = 4,
  interactive = false,
  title = "Shell",
  onExecute,
}) => {
  const [input, setInput] = useState("");
  const [codeLines, setCodeLines] = useState<CodeLine[]>([]);
  const codeblockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const parsedLines: CodeLine[] = code.split("\n").map((line) => {
      if (line.startsWith("#")) {
        return {
          type: "comment",
          text: `<span style="color:#ffffff99">${line}</span>`,
        };
      }
      const parts = line.split(" ");
      parts[0] = `<span style="color:var(--arctic-prim)">${parts[0]}</span>`;
      return { type: "command", text: parts.join(" ") };
    });
    setCodeLines(parsedLines);
  }, [code]);

  const executeCommand = () => {
    if (!input.trim()) return;
    onExecute?.(input);
    setCodeLines((prev) => [...prev, { type: "command", text: input }]);
    setInput("");
    setTimeout(() => {
      codeblockRef.current?.scrollBy({ top: 100, behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      className="codeblock"
      style={{
        // maxHeight: `${60 * line}px`,
        marginTop: "10px",
        backgroundColor: "#012456",
        padding: "30px",
        fontSize: "clamp(12px, 2vw, 18px);",
      }}
    >
      <div className="codeblock-heading" style={{ borderBottom: "1px solid" }}>
        {title}
      </div>
      <div ref={codeblockRef} className="codeblock-commands">
        {codeLines.map((codeline, index) => (
          <pre
            style={{ lineHeight: "1px" }}
            key={index}
            dangerouslySetInnerHTML={{ __html: codeline.text }}
          ></pre>
        ))}
        {interactive && (
          <div>
            <label htmlFor="cb-input" style={{ display: "none" }}>
              Command Input
            </label>
            <span>{">"}</span>
            <input
              className="codeblock-input"
              type="text"
              id="cb-input"
              value={input}
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
              }}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => e.key === "Enter" && executeCommand()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeBlock;
