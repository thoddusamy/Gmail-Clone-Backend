const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
require('dotenv').config()
const URL = process.env.DBURL

const UpdateIsStarred = async (req, res) => {
    try {
        const { id } = req.params
        const { collectionName, isStarred } = req.body
        const connection = await mongoClient.connect(URL)
        const db = connection.db("Gmail_Clone")
        await db.collection(collectionName).updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isStarred } })
        connection.close()
        res.json({ message: req.body.isStarred == true ? 'IsStarred true is updated !' : req.body.isStarred == false ? 'IsStarred false is updated !' : null })
    } catch (error) {
        console.log(error);
    }
}

const UpdateIsSpam = async (req, res) => {
    try {
        const { id } = req.params
        const { collectionName, isSpam } = req.body
        const connection = await mongoClient.connect(URL)
        const db = connection.db("Gmail_Clone")
        await db.collection(collectionName).updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isSpam } })
        connection.close()
        res.json({ message: req.body.isSpam == true ? 'isSpam true is updated !' : req.body.isSpam == false ? 'isSpam false is updated !' : null })
    } catch (error) {
        console.log(error);
    }
}

const UpdateIsImportant = async (req, res) => {
    try {
        const { id } = req.params
        const { collectionName, isImportant } = req.body
        const connection = await mongoClient.connect(URL)
        const db = connection.db("Gmail_Clone")
        await db.collection(collectionName).updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isImportant } })
        connection.close()
        res.json({ message: req.body.isImportant == true ? 'isImportant true is updated !' : req.body.isImportant == false ? 'isImportant false is updated !' : null })
    } catch (error) {
        console.log(error);
    }
}

const UpdateIsRead = async (req, res) => {
    try {
        const { id } = req.params
        const { collectionName, isRead } = req.body
        const connection = await mongoClient.connect(URL)
        const db = connection.db("Gmail_Clone")
        await db.collection(collectionName).updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isRead } })
        connection.close()
        res.json({ message: req.body.isRead == true ? 'isRead true is updated !' : req.body.isRead == false ? 'isRead false is updated !' : null })
    } catch (error) {
        console.log(error);
    }
}

const UpdateIsSnoozed = async (req, res) => {
    try {
        const { id } = req.params
        const { collectionName, isSnoozed } = req.body
        const connection = await mongoClient.connect(URL)
        const db = connection.db("Gmail_Clone")
        await db.collection(collectionName).updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isSnoozed } })
        connection.close()
        res.json({ message: req.body.isSnoozed == true ? 'isSnoozed true is updated !' : req.body.isSnoozed == false ? 'isSnoozed false is updated !' : null })
    } catch (error) {
        console.log(error);
    }
}

const UpdateIsDelete = async (req, res) => {
    try {
        const { id } = req.params
        const { collectionName, isDelete } = req.body
        const connection = await mongoClient.connect(URL)
        const db = connection.db("Gmail_Clone")
        await db.collection(collectionName).updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isDelete } })
        let findDataFromSendMailsCollection = await db.collection("send_mails").findOne({ _id: mongodb.ObjectId(id) })
        if (findDataFromSendMailsCollection) {
            await db.collection("send_mails").updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isDelete } })
        }
        let findDataFromAllMailsCollection = await db.collection("allmails").findOne({ _id: mongodb.ObjectId(id) })
        if (findDataFromAllMailsCollection) {
            await db.collection("allmails").updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isDelete } })
        }
        let findDataFromStarredCollection = await db.collection("starred_mails").findOne({ _id: mongodb.ObjectId(id) })
        if (findDataFromStarredCollection) {
            await db.collection("starred_mails").updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isDelete } })
        }
        let findDataFromImportantCollection = await db.collection("important_mails").findOne({ _id: mongodb.ObjectId(id) })
        if (findDataFromImportantCollection) {
            await db.collection("important_mails").updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isDelete } })
        }
        let findDataFromSnoozedCollection = await db.collection("snoozed_mails").findOne({ _id: mongodb.ObjectId(id) })
        if (findDataFromSnoozedCollection) {
            await db.collection("snoozed_mails").updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isDelete } })
        }
        let findDataFromSpamCollection = await db.collection("spam_mails").findOne({ _id: mongodb.ObjectId(id) })
        if (findDataFromSpamCollection) {
            await db.collection("spam_mails").updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isDelete } })
        }
        connection.close()
        res.json({ message: 'isDelete true is updated !' })
    } catch (error) {
        console.log(error);
    }
}

const UpdateMarkAsReadAllMails = async (req, res) => {
    try {
        const { collectionName } = req.body
        const connection = await mongoClient.connect(URL)
        const db = connection.db("Gmail_Clone")
        await db.collection(collectionName).updateMany({}, { $set: { isRead: true } })
        connection.close()
        res.json({ message: `AllMails Mark as readed in ${collectionName} collection` })
    } catch (error) {
        console.log(error);
    }
}

const AddFieldToStarredMail = async (req, res) => {
    try {
        const { id } = req.params
        const { collectionName } = req.body
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        await db.collection("starred_mails").findOneAndUpdate({ _id: mongodb.ObjectId(id) }, { $set: { collectionName } })
        connection.close()
        res.json({ message: "Field setted in starredMails !" })
    } catch (error) {
        console.log(error);
    }
}

const AddFieldToSpamMail = async (req, res) => {
    try {
        const { id } = req.params
        const { collectionName } = req.body
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        await db.collection("spam_mails").findOneAndUpdate({ _id: mongodb.ObjectId(id) }, { $set: { collectionName } })
        connection.close()
        res.json({ message: "Field setted in spamMails !" })
    } catch (error) {
        console.log(error);
    }
}

const AddFieldToImportantMail = async (req, res) => {
    try {
        const { id } = req.params
        const { collectionName } = req.body
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        await db.collection("important_mails").findOneAndUpdate({ _id: mongodb.ObjectId(id) }, { $set: { collectionName } })
        connection.close()
        res.json({ message: "Field setted in importantMails !" })
    } catch (error) {
        console.log(error);
    }
}

const AddFieldToSnoozedMail = async (req, res) => {
    try {
        const { id } = req.params
        const { collectionName } = req.body
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        await db.collection("snoozed_mails").findOneAndUpdate({ _id: mongodb.ObjectId(id) }, { $set: { collectionName } })
        connection.close()
        res.json({ message: "Field setted in snoozedMails !" })
    } catch (error) {
        console.log(error);
    }
}

const UpdateIsArchived = async (req, res) => {
    try {
        const { id } = req.params
        const { collectionName, isArchive } = req.body
        const connection = await mongoClient.connect(URL)
        const db = connection.db("Gmail_Clone")
        await db.collection("allmails").updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isArchive } })
        await db.collection(collectionName).updateOne({ _id: mongodb.ObjectId(id) }, { $set: { isArchive } })
        connection.close()
        res.json({ message: req.body.isRead == true ? 'isRead true is updated !' : req.body.isRead == false ? 'isRead false is updated !' : null })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    UpdateIsStarred,
    AddFieldToStarredMail,
    UpdateIsImportant,
    AddFieldToImportantMail,
    UpdateIsRead,
    UpdateIsArchived,
    UpdateIsSnoozed,
    AddFieldToSnoozedMail,
    UpdateIsDelete,
    UpdateMarkAsReadAllMails,
    UpdateIsSpam,
    AddFieldToSpamMail
}