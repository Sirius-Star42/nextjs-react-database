import axios from "axios";

export default async function handler(req, res) {
    var response = await axios.get("http://hp-api.herokuapp.com/api/characters/students");

    if (response.status == 200) {
        res.status(200).json(response.data)
    } else {
        res.status(404).json({message: "Not found!"})
    }

  }
  