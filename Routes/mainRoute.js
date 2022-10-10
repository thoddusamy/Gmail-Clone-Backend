const express = require('express')
const router = express.Router()
const {
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
} = require('../Controllers/get')
const {
    AddMail,
    AddMailsToAllMails,
    AddMailToStarredMails,
    AddMailToImportantMails,
    AddMailToSnoozedMails,
    AddMailToTrashMails,
    AddMailToSpamMails
} = require('../Controllers/post')
const {
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
} = require('../Controllers/put')
const {
    RemoveFromStarredMails,
    RemoveFromImportantMails,
    RemoveFromSnoozedMails,
    RemoveFromSpamMails,
    RemoveFromTrashMails,
    DeleteAllSpamMails,
    DeleteAllTrashMails
} = require('../Controllers/delete')

router.get('/navbar_appspopup_topapps', NavbarAppspopupTopapps)
router.get('/navbar_appspopup_middleapps', NavbarAppspopupMiddleapps)
router.get('/inbox/:value', InboxMails)
router.get('/promotions/:value', PromotionMails)
router.get('/social/:value', SocialMails)
router.get('/allmails', AllmailsMails)
router.get('/starred', StarredMails)
router.get('/snoozed', SnoozedMails)
router.get('/sendMail', SendMails)
router.get('/important', ImportantMails)
router.get('/spam', SpamMails)
router.get('/trash', TrashMails)
router.get('/:id/:collectionName', GetMailData)
router.get('/getDataForSnoozed/:id/:collectionName', GetMailDataForsnoozed)
router.get('/getDataForDelete/:id/:collectionName', GetMailDataForDelete)
router.post('/addmail', AddMail)
router.post('/allmails', AddMailsToAllMails)
router.post('/addMailToStarred', AddMailToStarredMails)
router.post('/addMailToSpam', AddMailToSpamMails)
router.post('/addMailToImportant', AddMailToImportantMails)
router.post('/addMailtoSnoozed', AddMailToSnoozedMails)
router.post('/addMailToTrash', AddMailToTrashMails)
router.put('/updateStarred/:id', UpdateIsStarred)
router.put('/updateSpam/:id', UpdateIsSpam)
router.put('/updateImportant/:id', UpdateIsImportant)
router.put('/updateIsread/:id', UpdateIsRead)
router.put('/updateIssnoozed/:id', UpdateIsSnoozed)
router.put('/updateIsDelete/:id', UpdateIsDelete)
router.put('/updateMarkAsReadAll', UpdateMarkAsReadAllMails)
router.put('/addFieldToStarredMail/:id', AddFieldToStarredMail)
router.put('/addFieldToSpamMail/:id', AddFieldToSpamMail)
router.put('/addFieldToImportantMail/:id', AddFieldToImportantMail)
router.put('/updateIsArchived/:id', UpdateIsArchived)
router.put('/addFieldToSnoozedMail/:id', AddFieldToSnoozedMail)
router.delete('/removeFromStarred/:id', RemoveFromStarredMails)
router.delete('/removeFromImportant/:id', RemoveFromImportantMails)
router.delete('/removeFromSnoozed/:id', RemoveFromSnoozedMails)
router.delete('/removeFromSpam/:id', RemoveFromSpamMails)
router.delete('/removeFromTrash/:id', RemoveFromTrashMails)
router.delete('/deleteAllSpamMails', DeleteAllSpamMails)
router.delete('/deleteAllTrashMails', DeleteAllTrashMails)


module.exports = router
