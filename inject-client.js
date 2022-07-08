const fs = require("fs");
const path = require("path");

function getAbsPath(file) {
  switch (typeof file) {
    case "string":
      return path.join(__dirname, file);
    case "object":
      // Assume array
      return path.join(__dirname, ...file);
    default:
      throw new Error();
  }
}

const appCode = 'function App() {\n  return (\n    <div id="App" >\n    </div>\n  );\n}\n\nexport default App;\n';

module.exports = function (callback) {
  // Make client dir
  const clientPath = getAbsPath("client");
  if (!fs.existsSync(clientPath)) {
    fs.mkdirSync(clientPath);
  }

  // Copy to App.jsx
  fs.writeFileSync(getAbsPath(["client", "App.jsx"]), appCode);

  callback();
};
