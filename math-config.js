window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    macros: {
      Q: '\\mathbb{Q}',
      Z: '\\mathbb{Z}',
      R: '\\mathbb{R}',
      C: '\\mathbb{C}',
      F: '\\mathbb{F}'
    }
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const names = {
    theorem: "Theorem",
    proposition: "Proposition",
    lemma: "Lemma",
    corollary: "Corollary",
    conjecture: "Conjecture",
    definition: "Definition",
    remark: "Remark",
    example: "Example",
    proof: "Proof"
  };

  let number = 0;

  document.querySelectorAll(".latex-env").forEach((block) => {
    const source = block.textContent.trim();
    const match = source.match(
      /^\\begin\{(\w+)\}(?:\[([^\]]*)\])?\s*([\s\S]*?)\s*\\end\{\1\}$/
    );

    if (!match || !names[match[1]]) return;

    const [, type, title, body] = match;
    block.classList.add("math-env", type);

    const heading = document.createElement("strong");
    heading.textContent =
      names[type] +
      (type === "proof" ? "" : ` ${++number}`) +
      (title ? ` (${title})` : "") +
      ".";

    block.replaceChildren(heading);

    body.split(/\n\s*\n/).forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph.trim();
      block.append(p);
    });

    if (type === "proof") {
      const end = document.createElement("span");
      end.className = "qed";
      end.textContent = "□";
      block.append(end);
    }
  });
});
