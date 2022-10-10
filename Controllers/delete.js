const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
require('dotenv').config()
const URL = process.env.DBURL

const RemoveFromStarredMails = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        await db.collection("starred_mails").deleteOne({ _id: mongodb.ObjectId(id) })
        connection.close()
        res.json({ message: "StarredMail removed !" })
    } catch (error) {
        console.log(error);
    }
}

const RemoveFromImportantMails = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        await db.collection("important_mails").deleteOne({ _id: mongodb.ObjectId(id) })
        connection.close()
        res.json({ message: "ImportantMail removed !" })
    } catch (error) {
        console.log(error);
    }
}

const RemoveFromSnoozedMails = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        await db.collection("snoozed_mails").deleteOne({ _id: mongodb.ObjectId(id) })
        connection.close()
        res.json({ message: "SnoozedMail removed !" })
    } catch (error) {
        console.log(error);
    }
}

const RemoveFromSpamMails = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        await db.collection("spam_mails").deleteOne({ _id: mongodb.ObjectId(id) })
        connection.close()
        res.json({ message: "SpamMail removed !" })
    } catch (error) {
        console.log(error);
    }
}

const RemoveFromTrashMails = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        await db.collection("trash_mails").deleteOne({ _id: mongodb.ObjectId(id) })
        connection.close()
        res.json({ message: "TrashMail removed !" })
    } catch (error) {
        console.log(error);
    }
}

const DeleteAllSpamMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        await db.collection("spam_mails").deleteMany({})
        connection.close()
        res.json({ message: "All spamMails deleted !" })
    } catch (error) {
        console.log(error);
    }
}

const DeleteAllTrashMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        await db.collection("trash_mails").deleteMany({})
        connection.close()
        res.json({ message: "All trashMails deleted !" })
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    RemoveFromStarredMails,
    RemoveFromImportantMails,
    RemoveFromSnoozedMails,
    RemoveFromSpamMails,
    RemoveFromTrashMails,
    DeleteAllSpamMails,
    DeleteAllTrashMails
}