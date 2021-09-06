const { Movie } = require('../Movie.js')
const getHotMovie = async function() {
    const data = await Movie.findAll();
    const datajson = JSON.parse(JSON.stringify(data))
    const hotArr = [];
    const comingArr = [];
    for (const item of datajson) {
        if (item.flag == 'hot') {
            hotArr.push(item)
        } else if (item.flag == 'coming') {
            comingArr.push(item)
        }
    }
    return {
        hot: hotArr,
        coming: comingArr
    }
}
module.exports = {
    getHotMovie
}