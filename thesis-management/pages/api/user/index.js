import { dbConnection } from "../../../dbconnection";
export default function handler(req, res) {
  dbConnection;
  console.log("in api", req.body);
  switch (req.method) {
    case "POST": {
      res.status(200).json({ name: "John Doe" });
    }
    case "GET": {
      res.status(200).json({ name: "John Doe" });
    }
  }
}
