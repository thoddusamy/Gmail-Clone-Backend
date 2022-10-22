const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
require('dotenv').config()
const URL = process.env.DBURL
const { ObjectId } = require('mongodb')
const nodemailer = require("nodemailer");

const AddMail = async (req, res) => {
    try {
        let { subject, message, useremail } = req.body
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        // await db.collection("allmails").insertOne(req.body)
        await db.collection("send_mails").insertOne(req.body)
        // await db.collection("inbox").insertOne(req.body)

        let transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: `${process.env.MAIL_ID}`,
                pass: `${process.env.MAIL_PASSWORD}`
            }
        })

        let mailOptions = {
            from: `${process.env.MAIL_ID}`,
            to: `${useremail}`,
            subject: `${subject}`,
            text: `${message}`
        }

        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log(info.response)
            }
        })

        connection.close()
        res.json({
            message: "Mail sended 👍"
        })
    } catch (error) {
        console.log(error);
    }
}

const AddMailsToAllMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        await db.collection("allmails").insertOne(req.body)
        connection.close()
        res.json({
            message: "Mail added to allmails 👍"
        })
    } catch (error) {
        console.log(error);
    }
}

const AddMailToStarredMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        req.body._id = new ObjectId(req.body._id)
        await db.collection("starred_mails").insertOne(req.body)
        connection.close()
        res.json({
            message: "Mail added to starredMails 👍"
        })
    } catch (error) {
        console.log(error);
    }
}

const AddMailToSpamMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        req.body._id = new ObjectId(req.body._id)
        await db.collection("spam_mails").insertOne(req.body)
        connection.close()
        res.json({
            message: "Mail added to spamMails 👍"
        })
    } catch (error) {
        console.log(error);
    }
}

const AddMailToImportantMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        req.body._id = new ObjectId(req.body._id)
        await db.collection("important_mails").insertOne(req.body)
        connection.close()
        res.json({
            message: "Mail added to importantMails 👍"
        })
    } catch (error) {
        console.log(error);
    }
}

const AddMailToSnoozedMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        req.body._id = new ObjectId(req.body._id)
        await db.collection("snoozed_mails").insertOne(req.body)
        connection.close()
        res.json({
            message: "Mail added to snoozedMails 👍"
        })
    } catch (error) {
        console.log(error);
    }
}

const AddMailToTrashMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        req.body._id = new ObjectId(req.body._id)
        await db.collection("trash_mails").insertOne(req.body)
        connection.close()
        res.json({
            message: "Mail added to trashMails 👍"
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    AddMail,
    AddMailsToAllMails,
    AddMailToStarredMails,
    AddMailToImportantMails,
    AddMailToSnoozedMails,
    AddMailToTrashMails,
    AddMailToSpamMails
}