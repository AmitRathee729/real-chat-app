const mongoose = require('mongoose');

const clubSchema = mongoose.Schema({
    name: { type: String, default: '' },
    country: { type: String, default: '' },
    image: { type: String, default: 'default.png' },
    fans: [
        {
            username: { type: String, default: '' },
            email: { type: String, default: '' },
        },
    ],
});

module.exports = mongoose.model('Club', clubSchema);