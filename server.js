const express = require("express"); // this is saying to look inside the mode module direcotry for the exppress package; and if you find it, I want you to pull it in, and I want you to store what express is, what express exports, in the variable called express here. Express is the Framework which will help us create the API
// Express is just a wrapper arounf node. Express just adds a bunch of funcitonality on top of node. And node itself defines a number of objects that can be used thoughout the application
const morgan = require("morgan"); // morgan is just a logger. It will allow us to log the activity that is going on in our application
const votingRouter = require("./routes/voting"); // importing votes.js
// so basically so far what I have done is pull into server.js both pacakes that I installed, in my package.json, express and morgan.

const app = express(); // this creates a new instance of express.
// Running this function will create a new instance of the express application and store it in this app variable

//! Middleware

// here we are going to inspect the application itself useing the moregan package
app.use(morgan("tiny")); // this means "justvthe vare minimum logging version"
//here I am creating a single rout to for when I go to "/" (or the main page).
// Every requests that comes through this application we want to run it through this morgan logging middleware.
//All morgan will do is look for what kind of HTTP request it was, It will look what rout is being sent to our application, and then it will log how long the application took and a little bit of metadata about the request itself

// (1)
app.use(express.json()); // this will make sure that everytime we sent a post reuqest, express will parse that request as JSON. So by adding this additional middleware into pur express pipeline, we can now sent POST resuqests that include a request dot body

app.use("/voting", votingRouter); // we are attaching the votingRouter to "/voting" endpoint. //! this is also a route.

//! End Middleware

//! Routes

app.get("/", (req, res, next) => {
	res.status(200).json({ ping: "pong" }); // the response stops the request.
});

// adding another rout
app.get("/hey", (req, res, next) => {
	res.status(200).json({ hi: "hello" });
});

//! End Routes

// creating my port variable, which in this case holds port 3000.
const port = 3000;

// Here I am making this server listen to port 3000 for any HTTP requests.
app.listen(port, () => {
	// console.log(module); // module is a node object that node probides and it stores a reference to the current file, along with some context about it.
	// I run a call back function that whenever it starts to listen, I am going to . . .
	console.log(`🚀 Server listening on port ${port}`); // console.log "Server listening on port 3000"
});
