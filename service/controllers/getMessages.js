const findAllMessages = require('../clients/findAllMessages');

module.exports = (req, res) => {
    findAllMessages()
        .then(messages => res.status(200).send(messages))
        .catch(err => console.log('Error fetching messages from db', err));
}