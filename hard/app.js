const express = require ('express')
const app = express() 
const jsondata = require ('./Node_js_GI_6-16/employees.json')
app.listen(3000, () => console.log("It is working!"))

app.get("/employees", function (req,res){
    res.send(jsondata)
})
app.get("/employees/:employeeID", function (req,res){
   const employeeID = req.params.employeeID - 1
   if (req.params.employeeID > jsondata.Employees.length){
    res.send ("employee was not found")
}else {
    res.send (jsondata.Employees[employeeID])
}
    res.send(jsondata)
})