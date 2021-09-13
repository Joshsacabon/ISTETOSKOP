const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Sched = require("./models/Sched");
const Client = require("./models/Client");

mongoose.connect("mongodb://127.0.0.1:27017/scheds", { useNewUrlParser: true });
mongoose.connect("mongodb://127.0.0.1:27017/clients", { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());


app.get('/home/dashboard/', (req, res) => {
  Sched.find((err, scheds) => {
      if (err) {
        console.log(err);
      } else {
        res.json(scheds);
      }
    });
  });


app.post('/home/dashboard/createschedule', (req, res) => {
    const sched = new Sched(req.body);
    sched
      .save()
      .then((sched) => {
        res.json(sched);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  });


  app.get('/home/dashboard/:id', (req, res) => {
    const id = req.params.id;
    Sched.findById(id, (err, sched) => {
      res.json(sched);
    });
  });

  app.post("/home/dashboard/:id", (req, res) => {
    const id = req.params.id;
    Sched.findById(id, (err, sched) => {
      if (!sched) {
        res.status(404).send("sched not found");
      } else {
        sched.fname = req.body.fname;
        sched.lname = req.body.lname;
        sched.time = req.body.time;
        sched.date = req.body.date;
        sched.description = req.body.description;
  
        sched
          .save()
          .then((sched) => {
            res.json(sched);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });


app.delete('/home/dashboard/:id', async (req, res) => {
    let id = req.params.id;
    let sched;
    try {
      sched = await Sched.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
    if (sched) return res.json({ deleted: true });
    return res.json({ deleted: false });
});

app.get('/home/clientlist/', (req, res) => {
  Client.find((err, clients) => {
      if (err) {
        console.log(err);
      } else {
        res.json(clients);
      }
    });
  });


app.post('/createclient', (req, res) => {
    const client = new Client(req.body);
    client
      .save()
      .then((client) => {
        res.json(client);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  });


  app.get('/home/clientlist/:id', (req, res) => {
    const id = req.params.id;
    Client.findById(id, (err, client) => {
      res.json(client);
    });
  });

  app.post('/home/clientlist/:id', (req, res) => {
    const id = req.params.id;
    Client.findById(id, (err, client) => {
      if (!client) {
        res.status(404).send("client not found");
      } else {
        client.firstname = req.body.firstname; 
        client.middlename = req.body.middlename; 
        client.lastname = req.body.lastname; 
        client.birthday = req.body.birthday; 
        client.age = req.body.age; 
        client.emailadd = req.body.emailadd; 
        client.cellnumber = req.body.cellnumber; 
        client.gender = req.body.gender; 
        client.saddress = req.body.saddress; 
        client.city = req.body.city; 
        client.province = req.body.province; 
        client.zipcode = req.body.zipcode; 
        client.country = req.body.country;
  
        client
          .save()
          .then((client) => {
            res.json(client);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

  app.delete('/home/clientlist/:id', async (req, res) => {
    let id = req.params.id;
    let client;
    try {
      client = await Client.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
    if (client) return res.json({ deleted: true });
    return res.json({ deleted: false });
});


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });