function beforesubmit() {
  debugger;
  let outputdate = document.querySelector(".outputdate");
  let inputdate = document.querySelector(".inputdate");
  console.log("inputdate", inputdate.value);
  let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");
  outputdate.value = formatteddate;
  console.log(outputdate);
}
