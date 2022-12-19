const dbmananger = require("./DBManager.js")
const db = dbmananger.db

exports.getNames = () => {
    const sql = "SELECT * FROM test"

    let stmt = db.prepare(sql)
    let res = stmt.all()
    return res
}

