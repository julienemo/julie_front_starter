// import all CSS/SCSS/SASS that I want to compile
// they don't have to bear conventional names
// they don't all have to be imported to the same file
import "bootstrap";
import "../styles/style.scss";

// To use moment
/* import moment from "moment";
console.log(moment().format("MMMM Do YYYY"));
console.log(moment("20111031", "YYYYMMDD").fromNow());
console.log(moment().subtract(10, "days").calendar());
 */
// To use an env var
// console.log("DEV", process.env.DB_HOST);
