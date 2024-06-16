
const express = require("express")
const bodyParser = require('body-parser')
const router = express.Router()

var employee = [
    {
        eid:101,
        ename: 'paramesh',
        dob: '22-10-2001',
        des: 'MERN',
        salary: 50000
    },
    {
        eid:102,
        ename: 'ramesh',
        dob: '19-1-2000',
        des: 'Java',
        salary: 60000
    },
    {
        eid:103,
        ename: 'suresh',
        dob: '10-2-2002',
        des: 'PHP',
        salary: 40000
    },
    {
        eid:104,
        ename: 'esakki',
        dob: '10-8-2001',
        des: 'Python',
        salary: 70000
    }
]
router.use(bodyParser.json());

router.get('/',(req, res)=>{
    res.send(employee)
})

router.post('/', (req, res)=>{
    if (!req.body.ename || !req.body.dob || !req.body.des || !req.body.salary) {
       res.status(400)
        res.send('bad request')
    } else {
        const newid = employee[employee.length - 1].eid + 1
        employee.push({
            eid: newid,
            ename: req.body.ename,
            dob: req.body.dob,
            des: req.body.des,
            salary: req.body.salary
           
        })
        res.status(200)
        res.send("employee data inserted")
    }
})

router.put('/:id',(req, res)=>{
    const uptemployee = employee.find(emp => emp.eid === parseInt(req.params.id))

    if (!uptemployee) {
        res.send("employee details not found")
    } 
    else {

      
      const{ename, dob, des, salary} =req.body

      req.body.ename = ename
      req.body.dob = dob;
      req.body.des = des;
      req.body.salary = salary;

      res.send("employee details updated")
    }
})

module.exports = router