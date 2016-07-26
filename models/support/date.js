/**
 * Get recent dates according to the current date
 * @param {number} dateNum
 * @returns {date[]} dates
 */
exports.getDates = (dateNum) => {
	var now = new Date();
	var dates = [];
	for (var i = 0; i < dateNum; i++) {
		dates.unshift(now);
		now = new Date(now.valueOf() - 24 * 60 * 60 * 1000);
	}
	return dates;
}

/**
 * check if tow date type variables are of the same date
 * @param {date} targetDate
 * @param {date[]} dates
 * @returns {number} index
 */
exports.indexOfDate = (targetDate, dates) => {
	var index=-1;
	for(i in dates){
		if (targetDate.toLocaleDateString()===dates[i].toLocaleDateString()){
			index=i;
			break;
		}
	}
	return index;
}