const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const customermodel = require("./model/customermodel");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://suyash:12345@cluster0.tvfxood.mongodb.net/customer"
);

app.post("/register", (req, res) => {
  customermodel
    .create(req.body)
    .then((customers) => res.json(customers))
    .catch((err) => res.json(err));
});

app.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await customermodel.findOne({ name: name });

    if (user) {
      if (user.password === password) {
        console.log("Logged in");
        return res.json(user);
      } else {
        console.log("Incorrect password");
        return res.status(401).json({ error: "Incorrect password" });
      }
    } else {
      console.log("User Invalid");
      return res.status(401).json({ error: "user dont exist" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/search-customers", async (req, res) => {
  try {
    const logCustomers = await customermodel.find();
    res.json(logCustomers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to retrieve customers" });
  }
});

app.delete("/delete-customer/:id", async (req, res) => {
  try {
    const customerId = req.params.id;
    const deletedCustomer = await customermodel.findByIdAndDelete(customerId);
    if (!deletedCustomer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    return res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3001, () => {
  console.log("server is running");
});
