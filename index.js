const div = document.querySelector("#data");
const buttons = document.querySelector("#buttons");
const paginationControls = document.querySelector("#pagination-controls");
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

const posts = [
  '10-computer-programming.json', 'deeplearning.json', 'java_string.json', 'ngx.json', 'soup.json', 'Design_patterns.json', 'django.json', 'java_time.json', 'ngx_bootstrap.json', 'spark.json', 'IO.json', 'electron.json', 'java_util.json', 'node.json', 'spring.json', 'Rxjava.json', 'ember.json', 'javafx.json', 'npm.json', 'TestNG.json', 'express.json', 'javascriptcomparison.json', 'numpy.json', 'spring_JDBC.json', 'accessibility_attributes.json', 'features.json', 'javascriptfeatures.json', 'object_oriented.json', 'ai_basics.json', 'firebase.json', 'jmeter.json', 'pandas.json', 'spring_MVC.json', 'algolia.json', 'flutter.json', 'jquery.json', 'passay.json', 'spring_aop.json', 'ajax.json', 'flask.json', 'jqueryui.json', 'popper.json', 'algolia.json', 'flutter.json', 'jquery.json', 'passay.json', 'spring_aop.json', 'angular_material.json', 'foundation.json', 'jsoup.json', 'postgresql.json', 'angular_ui_component.json', 'fullpage.json', 'junit.json', 'protractor.json', 'anime.json', 'gatsby.json', 'jython.json', 'pyqt.json', 'aurelia.json', 'git.json', 'keeping_up_to_date.json', 'pyramid.json', 'backbone.json', 'go.json', 'keras.json', 'pytest.json', 'basic-computer.json', 'google-chart.json', 'knockout.json', 'pythonconcurrency.json', 'bokeh.json', 'graphql.json', 'koa.json', 'pythondesign.json', 'bootstrap.json', 'gson.json', 'kotlin.json', 'pythontips.json', 'bootstrap4.json', 'high-chart.json', 'laravel.json', 'pytorch.json', 'bulma.json', 'html.json', 'leaflet.json', 'r.json', 'c%23.json', 'introduction.json', 'lodash.json', 'rails.json', 'c++.json', 'ionic.json', 'machine_basics.json', 'react.json', 'caffe2.json', 'iosdev.json', 'matlab.json', 'reactnative.json', 'case_study.json', 'jasmine.json', 'meteor.json', 'riot.json', 'cherry.json', 'java.json', 'moment.json', 'routing_and_focus.json', 'cleanpython.json', 'java_collections.json', 'mongodb.json', 'ruby.json', 'codeigniter.json', 'java_date.json', 'multiple.json', 'rxjs.json', 'computer-science.json', 'java_exeption.json', 'mysql.json', 'rxpy.json', 'concurrency.json', 'java_functional.json', 'nativescript.json', 'scala.json', 'css.json', 'java_internationalization.json', 'net.json', 'scipy.json', 'd3.json', 'java_lang.json', 'netmvc.json', 'scraping.json', 'dart.json', 'java_math.json', 'nextjs.json', 'seaborn.json', 'datascience.json', 'java_regex.json', 'ngrx.json', 'servelets.json', 'css.json', 'java_internationalization.json', 'net.json', 'scipy.json', 'd3.json', 'java_lang.json', 'netmvc.json', 'scraping.json', 'dart.json', 'java_math.json', 'nextjs.json', 'seaborn.json', 'datascience.json', 'java_regex.json', 'ngrx.json', 'servelets.json', 'scala.json', 'webpack.json', 'what_ai.json', 'why_ai.json', 'what_is_ml.json', 'why_learn_ml.json', 'whylearnjavascript.json', 'xstream.json' 
];

console.log(posts.length)

const folders = [
  "angular",
  "dart",
  "es6",
  "java",
  "kotlin",
  "machine",
  "php",
  "react",
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

function createButtons(path, dis) {
  buttons.innerHTML = "";
  path.forEach((element) => {
    buttons.innerHTML += `<button class="button" onclick="getData('${element}', '${dis[4]}')">
            <img src="images/${element}.svg" alt="${element}" class="icon">
            <p class="text">${element.replace(
              element[0],
              element[0].toUpperCase()
            )}</p>
          </button>`;
  });
  buttons.innerHTML += `<button class="button" onclick="${dis[2]}()"> <img src="images/${dis[1]}" alt="${dis[0]}" class="icon"> <p class="text">${dis[0]}</p></button>`
}
 
async function getData(item, file, page = 1) {
  div.innerHTML = "";
  try {
    div.innerHTML = "<p>Loading...</p>"; // Add loading indicator
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedData = data[item].slice(start, end);

    const newObj = paginatedData.map((jsonData) => {
      const content = jsonData.content.replace(/<code>(.*?)<\/code>/g, (match, p1) => {
        return `{{CODE_BLOCK_START}}${p1}{{CODE_BLOCK_END}}`;
      });

      return {
        title: jsonData.title,
        content: content,
        code: jsonData.code || "",
      };
    });

    div.innerHTML = "";
    newObj.forEach((element) => {
      const contentWithCode = element.content.replace(/{{CODE_BLOCK_START}}/g, "").replace(/{{CODE_BLOCK_END}}/g, "");
      const languageClass = languageClassMapping[item] || "language-none";
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
    const prevButton = document.createElement("button");
    prevButton.innerText = "Previous";
    prevButton.onclick = () => getData(item, 'united.json', page - 1);
    paginationControls.appendChild(prevButton);
  }
  if (page * itemsPerPage < totalItems) {
    const nextButton = document.createElement("button");
    nextButton.innerText = "Next";
    nextButton.onclick = () => getData(item, 'united.json', page + 1);
    paginationControls.appendChild(nextButton);
  }
}

// Initialize buttons on page load
createButtons(folders, ['Other', 'other.svg', 'nextPosts', "getData", 'united.json']);

function nextPosts() {
  createButtons(posts, ['Back', 'back.svg', 'backFunction', 'getData', 'posts.json']);
}

function backFunction() {
  createButtons(folders, ['Other', 'other.svg', 'nextPosts', "getData", 'united.json']);
}