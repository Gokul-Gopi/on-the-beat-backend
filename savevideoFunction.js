const Video = require('./Models/video.model')
const Category = require('./Models/category.model')
const saveVideo = async (arr) => {
    const categoryType = await Category.findOne({ name: 'Pro' })
    let video;

    arr.map(async (videos) => {
        video = new Video({
            name: videos.name,
            videoID: videos.videoID,
            category: categoryType._id,
            date: videos.date,
            views: videos.views,
            description: videos.description,
            channelName: videos.channelName,
            channelImage: videos.channelImage
        })
        await video.save();
    })

}

const arrOfVideos = [
    {
        name: 'Beethoven - Moonlight Sonata 3rd Movement Guitar Lesson part.1 With Tab (Slow teampo)',
        videoID: 'tbHFliGGS4M',
        category: '',
        date: 'Sep 17, 2020',
        views: '115,646',
        description: 'Difficulty Level - Hard,Tunning - E A D G B E',
        channelName: 'JW Easy guitar',
        channelImage: 'https://yt3.ggpht.com/ytc/AKedOLR_66ro2T0FNrxJbormy5JvOiS2xA2s6MUnKumx=s88-c-k-c0x00ffffff-no-rj'
    },

    {
        name: 'John Mayer - Neon (Live In LA - 1080p)',
        videoID: '_DfQC5qHhbo',
        category: '',
        date: 'Apr 17, 2012',
        views: '12,331,562',
        description: 'I do not own this song. It is used for entertainment purposes only.',
        channelName: 'Paul Kellerman',
        channelImage: 'https://yt3.ggpht.com/ytc/AKedOLR_66ro2T0FNrxJbormy5JvOiS2xA2s6MUnKumx=s88-c-k-c0x00ffffff-no-rj'
    },

    {
        name: 'Sweet Child O Mine Solo - Guns N Roses - Acoustic Guitar Cover',
        videoID: 'evsh1qa6eoc',
        category: '',
        date: 'Oct 21, 2016',
        views: '18,650,800',
        description: 'This my acoustic version of the Sweet Child O Mine Solo by Guns N Roses.',
        channelName: 'Acoustician',
        channelImage: 'https://yt3.ggpht.com/ytc/AKedOLTmyMwjYL7MVV_XQZZMUTxXh2HfFJsLfdfTFmTdaA=s88-c-k-c0x00ffffff-no-rj-mo'
    },

    {
        name: 'Advanced Chords Practice Routine - Guitar Lesson for Jazz, R&B, and Blues',
        videoID: 'wH63GHXTHgU',
        category: '',
        date: 'May 5, 2020',
        views: '192,603',
        description: 'This my acoustic version of the Sweet Child O Mine Solo by Guns N Roses.',
        channelName: 'swiftlessons',
        channelImage: 'https://yt3.ggpht.com/ytc/AKedOLR6TAH_ntqvySTf2x_k7CWME1T7O1Q-VV7jQ8z8Kw=s88-c-k-c0x00ffffff-no-rj'
    },

]

module.exports = { arrOfVideos, saveVideo }