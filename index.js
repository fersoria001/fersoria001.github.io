const contentElement = document.getElementById("main-expertise-scroll-area-content");

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "TypeScript",
  "Next.js",
];

skills.forEach(skill => {
  const badge = document.createElement("custom-badge");

  badge.textContent = skill;

  badge.setAttribute("variant", "secondary"); 

  contentElement.appendChild(badge);
});
