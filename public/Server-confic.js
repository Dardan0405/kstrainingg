const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("Data.json");
const middlewares = jsonServer.defaults();
const cors = require("cors"); // Import the cors middleware

// Enable CORS for localhost:3000
server.use(
  cors({
    origin: ["http://localhost:3000","https://kosovatraining.netlify.app","https://kosovatraining.com"]
  })
);

// Add custom routes or middleware as needed
// Example: Adding a custom route
server.get("http://localhost:3700/articles", (req, res) => {
  res.json({ message: "This is a custom route" });
});

// Use the default JSON Server middlewares
server.use(middlewares);

// Use the router for your JSON data
server.use(router);

const PORT = process.env.PORT || 3700;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)}
  )


