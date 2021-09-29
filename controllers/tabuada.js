const list = (req, res) => {
    res.render('tabuada/list')
}

const tabuada = (req, res) => {
    res.render('tabuada/tabuada')
}

module.exports = { list, tabuada }
