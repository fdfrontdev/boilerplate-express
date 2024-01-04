let express = require('express');
let app = express();

// return html to root path
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/views/index.html')
})

// mount the public folder
app.use("/public", express.static(__dirname + '/public'));


app.get('/authentication', (req, res) => {

    res.json({
        "status": true,
        "details": {}
    })

})


app.get('/users', (req, res) => {

    const status = undefined
    const details = undefined
    const allUsers = undefined

    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()

    async function main() {
        allUsers = await prisma.user.findMany()
        console.log(allUsers)
    }

    main()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

    res.json({
        "status": status,
        "details": allUsers
    })

})


app.post('/adduser', (req, res) => {

    const status = undefined
    const details = undefined
    const allUsers = undefined

    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()

    async function main() {
        await prisma.user.create({
            data: {
              name: 'Alice',
              email: 'alice@prisma.io',
              posts: {
                create: { title: 'Hello World' },
              },
              profile: {
                create: { bio: 'I like turtles' },
              },
            },
          })

        const allUsers = await prisma.user.findMany({
            include: {
              posts: true,
              profile: true,
            },
          })
          console.dir(allUsers, { depth: null })
       
    }

    main()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

    res.json({
        "status": status,
        "details": allUsers
    })

})



































module.exports = app;
