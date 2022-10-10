const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
require('dotenv').config()
const URL = process.env.DBURL

const TestingRoute = async (req, res) => {
    res.send("Server is Working ☢️👍")
}

const NavbarAppspopupTopapps = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone")
        const getData = await db.collection("navbar_appspopup_topapps").find().sort({ "no_id": 1 }).toArray()
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

const NavbarAppspopupMiddleapps = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone")
        const getData = await db.collection("navbar_appspopup_middleapps").find().sort({ "no_id": 1 }).toArray()
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

const InboxMails = async (req, res) => {
    try {
        const { value } = req.params
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        const getData = await db.collection("inbox").find({ isDelete: false, isArchive: false, isSnoozed: false, isSpam: false }).sort({ "sortbydate": value }).toArray();
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

const PromotionMails = async (req, res) => {
    try {
        const { value } = req.params
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        const getData = await db.collection("promotions").find({ isDelete: false, isArchive: false, isSnoozed: false, isSpam: false }).sort({ "sortbydate": value }).toArray();
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

const SocialMails = async (req, res) => {
    try {
        const { value } = req.params
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        const getData = await db.collection("social").find({ isDelete: false, isArchive: false, isSnoozed: false, isSpam: false }).sort({ "sortbydate": value }).toArray();
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

const AllmailsMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        const getData = await db.collection("allmails").find({ isDelete: false, isSpam: false }).sort({ "sortbydate": -1 }).toArray();
        connection.close();
        res.json(getData);
    } catch (error) {
        console.log(error);
    }
}

const StarredMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        const getData = await db.collection("starred_mails").find({ isStarred: true, isDelete: false, isSpam: false }).sort({ "sortbydate": -1 }).toArray();
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

const SnoozedMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        const getData = await db.collection("snoozed_mails").find({ isSnoozed: true, isDelete: false, isSpam: false }).sort({ "sortbydate": -1 }).toArray();
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

const SendMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        const getData = await db.collection("send_mails").find({ isDelete: false, isSpam: false }).sort({ "sortbydate": -1 }).toArray();
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

const ImportantMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        const getData = await db.collection("important_mails").find({ isImportant: true, isDelete: false, isSpam: false }).sort({ "sortbydate": -1 }).toArray();
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

const SpamMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        const getData = await db.collection("spam_mails").find({ isSpam: true, isDelete: false }).sort({ "sortbydate": -1 }).toArray();
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

const TrashMails = async (req, res) => {
    try {
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        const getData = await db.collection("trash_mails").find({ isDelete: true, isSpam: false }).sort({ "sortbydate": -1 }).toArray();
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

const GetMailData = async (req, res) => {
    try {
        let { id, collectionName } = req.params
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        const getData = await db.collection(collectionName).find({ _id: mongodb.ObjectId(id) }).toArray();
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

const GetMailDataForsnoozed = async (req, res) => {
    try {
        let { id, collectionName } = req.params
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        const getData = await db.collection(collectionName).find({ _id: mongodb.ObjectId(id) }).toArray();
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

const GetMailDataForDelete = async (req, res) => {
    try {
        let { id, collectionName } = req.params
        const connection = await mongoClient.connect(URL);
        const db = connection.db("Gmail_Clone");
        const getData = await db.collection(collectionName).find({ _id: mongodb.ObjectId(id) }).toArray();
        connection.close()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    TestingRoute,
    NavbarAppspopupTopapps,
    NavbarAppspopupMiddleapps,
    InboxMails,
    PromotionMails,
    SocialMails,
    AllmailsMails,
    StarredMails,
    SnoozedMails,
    SendMails,
    ImportantMails,
    GetMailData,
    GetMailDataForsnoozed,
    SpamMails,
    TrashMails,
    GetMailDataForDelete,
}