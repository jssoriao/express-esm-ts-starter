import "./pre-start"; // Must be the first import
import app from "@/server";

const nodeEnv = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.info(
    { environment: nodeEnv },
    "Express server started on port: " + port
  );
});
