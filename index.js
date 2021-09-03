let http = require ("http");
let express = require ("express");
let app = express();

app.set('view engine', 'hbs');
app.use(express.json());

app.use(express.urlencoded({extended: false}));

let userData = [
    {
        id: 1,
        username: "abhiram",
        email: "demo@test.com"
    },
    {
        id: 2,
        username: "zhastra",
        email: "scine@test.com"
    },
    {
        id: 3,
        username: "elven_king",
        email: "elv@test.com" 
    },
    {
        id: 4,
        username: "noobmaster",
        email: "loki@test.com" 
    },
    {
        id: 5,
        username: "pyroKing",
        email: "flame@test.com"
    }
];

//To get user data
app.get("/" , (req,res) =>{
    res.render("index",{ userData });
});

app.get("/add", (request, response) => {
	response.render("add");
});

//post user data
app.post("/user", (req, res) => {
	let newUser = {
		id: userData.length + 1,
		username: req.body.username,
        email:req.body.email
	};
	userData.push(newUser);
	res.render("index",{ userData });
});

app.listen(5000);