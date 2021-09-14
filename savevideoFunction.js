const Video = require('./Models/video.model')
const Category = require('./Models/category.model')
const saveVideo = async (arr) => {
    const categoryType = await Category.findOne({ name: 'Intermediate' })
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
        name: 'Top 5 Things Every Intermediate Guitar Player Should Know',
        videoID: 'yW1j4Bi1e0M',
        category: '',
        date: 'Aug 18, 2015',
        views: '1,602,316',
        description: 'In this lesson you will learn all about my top 5 things every intermediate guitar player should know.',
        channelName: 'YourGuitarSage',
        channelImage: 'https://yt3.ggpht.com/ytc/AKedOLTobLICedS6R1WpxKPZjofuz4sBnKNd_z7CPdoe9A=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        name: 'Are you an intermediate guitar player? Here’s how to know.',
        videoID: 'wAlB-71Jq4A',
        category: '',
        date: 'Jun 26, 2019',
        views: '1,579,636',
        description: 'Many guitar players have no idea how to know once they’ve successfully completed the “beginner” stage of playing guitar. When do you officially become an intermediate guitar player? In this guitar lesson, Nate Savage will answer that but going through a list of things you need to do successfully to call yourself a certified intermediate guitarist.',
        channelName: 'Guitareo',
        channelImage: 'https://yt3.ggpht.com/FDkZe_RckADi6N3t_P7lSWu5BWODi7qWuiczc7GCkb9mMO2Q3ByODIhIPUGR9s33JQdIi7Ut=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        name: 'Wake Me Up Guitar Tutorial - Avicii Guitar Lesson 🎸|100% Accurate Chords + Lead + No Capo + Cover|',
        videoID: '_u4wlBmXGmw',
        category: '',
        date: 'May 19, 2018',
        views: '1,048,449',
        description: 'Welcome to this Wake Me Up Guitar Tutorial by Avicii! After the sad and unfortunate passing of Tim Bergling I thought Id pay tribute with a lesson of perhaps his most popular song.',
        channelName: 'GuitarZero2Hero',
        channelImage: 'https://yt3.ggpht.com/ytc/AKedOLR-T2izPEQL_n3ox_5IciRHBV7ZS2_EorhQSQyAnw=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        name: 'Maroon 5 - Payphone | Fingerstyle Guitar Lesson (Tutorial) How to Play Fingerstyle',
        videoID: '8WKTDgrdwUU&t=13s',
        category: '',
        date: 'Oct 20, 2020',
        views: '464,473',
        description: 'Maroon 5 - Payphone. Easy step by step Fingerstyle Guitar Lesson.',
        channelName: 'Fingerstyle Club',
        channelImage: 'https://yt3.ggpht.com/ytc/AKedOLRcs84QJnDHgry-hKQ2EdklsSph23R9CoJYtE8=s88-c-k-c0x00ffffff-no-rj'
    },

]

// arrOfCategories.map(item => {
//         const category = new Category({
//             name: item.name,
//             image: item.img
//         })

//         category.save()

//     })
module.exports = { arrOfVideos, saveVideo }