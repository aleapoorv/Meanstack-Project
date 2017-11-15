'use strict';

import mongoose from 'mongoose';

var RateendpointSchema = new mongoose.Schema({
 USERNAME:String,
COMMENT:String
});

export default mongoose.model('Rateendpoint', RateendpointSchema);
