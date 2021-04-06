const db = require('../database')

/*exports.id = (req, res) => {
    const id = req.params.id
    const table = req.params.table
    const sqlDelete = `DELETE FROM ${table} WHERE id=?`
    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
}*/