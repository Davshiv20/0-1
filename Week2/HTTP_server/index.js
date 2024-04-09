// const express = require("express");
// //express doesn't parse the body using req.body
// //we need body parser for that

// //express is not a node default library
// function calculateSum(n){
//   let ans=0;
//   for(let i=0;i<n;i++)
//   {
//     ans+=i;
//   }
//   return ans;
// }
// const bodyParser = require("body-parser");
// const app = express();
// const port =process.env.PORT|| 3000 ;

// app.use(express.json());
// app.use(bodyParser.json());
// app.post("/convo", (req, res) => {
//   console.log(req.body);
//   console.log(req.headers);
//   res.send({
//     msg: "2+2=4",
//   });
// });
// app.get("/", function (req, res) {
//   const n=req.query.n;
//   const ans=calculateSum(n);
//   res.send("<b>Ans is: </b>"+ ans.toString());
// });

// app.listen(port, () => {
//   console.log(`Example app listening on ${port}`);
// });
// //api->used outside the browser, not to be accessed from browser but other node js processes
// //rest-> from other backend apps
const express = require("express");
const app = express();
app.use(express.json());
const users = [
  {
    name: "Shivam",
    kidneys: [
      {
        healthy: true,
      },
      {
        unhealthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const johnKidney = users[0].kidneys;
  const numOfKidneys = johnKidney.length;
  let healthyKidneys = 0;
  for (let i = 0; i < numOfKidneys; i++) {
    if (johnKidney[i].healthy) {
      healthyKidneys += 1;
    }
  }
  const unhealthyKidneys = numOfKidneys - healthyKidneys;
  res.json({
    numOfKidneys,
    healthyKidneys,
    unhealthyKidneys,
  });
});
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});
app.delete("/", (req, res) => {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.json({ msg: "Done" });
});

app.listen(3000);
