'use strict';

import mongoose from 'mongoose';

var RatingendpointSchema = new mongoose.Schema({
USERNAME:String,
COMMENT:String
});

export default mongoose.model('Ratingendpoint', RatingendpointSchema);
