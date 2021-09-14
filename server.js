const express = require('express');
const app = express();
const dotenv = require('dotenv')
const connectToMongo = require('./connentToDB')
const { routeNotFound, handleError } = require('./errorMiddlewares')
const bodyParser = require('body-parser')
const cors = require('cors')
const Video = require('./Models/video.model')
const Category = require('./Models/category.model')
const { saveVideo } = require('./savevideoFunction')
const { arrOfVideos } = require('./savevideoFunction');
const categoryRoutes = require('./Routes/category.routes')
const userRoutes = require('./Routes/user.routes')
const videoRoutes = require('./Routes/video.routes')
const notesRoutes = require('./Routes/notes.routes')
const playlistRoutes = require('./Routes/playlist.routes')

dotenv.config()
connectToMongo()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())





saveVideo(arrOfVideos)

app.use('/playlist', playlistRoutes)
app.use('/notes', notesRoutes)
app.use('/video', videoRoutes)
app.use('/category', categoryRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use(routeNotFound)
app.use(handleError)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${5000}...`))