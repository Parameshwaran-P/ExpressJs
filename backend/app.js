const express = require('express')
const app = express()
const dotenv =require('dotenv')
const path = require('path')


const connectDatabase = require('./config/db')

dotenv.config({path:path.join(__dirname, 'config', 'config.env')})

connectDatabase()