"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ArticleSchema = new mongoose_1.Schema({
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    imageUrl: {
        type: String
    },
    bodyPart: {
        type: String,
        required: true
    },
    outfits: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Outfit'
        }
    ]
});
const ArticleModel = mongoose_1.model('User', exports.ArticleSchema);
exports.default = ArticleModel;
//# sourceMappingURL=article.js.map