let div = document.querySelector("#data");
let buttons = document.querySelector("#buttons");
let paginationControls = document.querySelector("#pagination-controls");
let currentPage = 1;
const itemsPerPage = 5;

const languageClassMapping = {
  angular: "language-typescript",
  dart: "language-dart",
  es6: "language-javascript",
  java: "language-java",
  kotlin: "language-kotlin",
  machine: "language-python",
  php: "language-php",
  react: "language-jsx",
  tailwind: "language-css",
  typescript: "language-typescript",
  blockchain: "language-solidity",
  django: "language-python",
  intelligence: "language-python",
  javascript: "language-javascript",
  laravel: "language-php",
  node: "language-javascript",
  python: "language-python",
  reactnative: "language-jsx",
  tensorflow: "language-python",
  vue: "language-vue",
};

async function getData(item, page = 1) {
  try {
    div.innerHTML = "<p>Loading...</p>"; // Add loading indicator
    let newObj = [];
    let response = await fetch("united.json");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    let data = await response.json();

    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let paginatedData = data[item].slice(start, end);

    paginatedData.forEach((jsonData) => {
      let content = jsonData.content.replace(/<code>(.*?)<\/code>/g, (match, p1) => {
        return `{{CODE_BLOCK_START}}${p1}{{CODE_BLOCK_END}}`;
      });

      newObj.push({
        title: jsonData.title,
        content: content,
        code: jsonData.code || "",
      });
    });

    div.innerHTML = "";
    newObj.forEach((element) => {
      let contentWithCode = element.content.replace(/{{CODE_BLOCK_START}}/g, "").replace(/{{CODE_BLOCK_END}}/g, "");
      let languageClass = languageClassMapping[item] || "language-none";
      div.innerHTML += `
              <h1>${element.title}</h1>
              <div>${contentWithCode}</div>
              ${element.code ? `<pre><code class="${languageClass}">${element.code}</code></pre>` : ""}
            `;
    });

    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });

    updatePaginationControls(item, page, data[item].length);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    div.innerHTML = "<p>Failed to load data. Please try again later.</p>";
  }
}

function updatePaginationControls(item, page, totalItems) {
  paginationControls.innerHTML = "";

  if (page > 1) {
    let prevButton = document.createElement("button");
    prevButton.innerText = "Previous";
    prevButton.onclick = () => getData(item, page - 1);
    paginationControls.appendChild(prevButton);
  }

  if (page * itemsPerPage < totalItems) {
    let nextButton = document.createElement("button");
    nextButton.innerText = "Next";
    nextButton.onclick = () => getData(item, page + 1);
    paginationControls.appendChild(nextButton);
  }
}

let folders = [
  "angular",
  "dart",
  "es6",
  "java",
  "kotlin",
  "machine",
  "php",
  "react",
  "tailwind",
  "typescript",
  "blockchain",
  "django",
  "intelligence",
  "javascript",
  "laravel",
  "node",
  "python",
  "reactnative",
  "tensorflow",
  "vue",
];

folders.forEach((element) => {
  buttons.innerHTML += `<button class="button" onclick="getData('${element}')">
          <img src="images/${element}.svg" alt="${element}" class="icon">
          <p class="text">${element.replace(
            element[0],
            element[0].toUpperCase()
          )}</p>
        </button>`;
});