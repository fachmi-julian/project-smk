const newsController = require('../controller/newsController')
const uploadNews = require('../middleware/upload/upload_news')
const hapusNews = require('../middleware/delete_image/delete_news')

module.exports = app => {
    app.post('/news',uploadNews.news,newsController.tambahNews)
    app.get('/news',newsController.tampilNews)
    app.get('/news/:id',newsController.detailNews)
    app.put('/news/:id',hapusNews.delete,uploadNews.news,newsController.editNews)
    app.delete('/news/:id',hapusNews.delete,newsController.hapusNews)
}