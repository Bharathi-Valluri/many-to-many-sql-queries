const Manager_controller = require('../controller/ManagerController')
const router = require('express').Router()
router.post('/insertTableData', Manager_controller.InsertingData)
router.get('/getAllRecords', Manager_controller.fetchAllRecords)
module.exports = router
