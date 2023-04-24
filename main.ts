import { Server } from 'socket.io'
import { DrawEventData } from './types.js'

const CLIENT_ORIGIN = 'https://teambrush.netlify.app/'

const io = new Server({
    cors: {
        origin: CLIENT_ORIGIN
    }
})

io.on('connection', socket => {
    console.log(`${socket.id} connected`)

    socket.on('draw', (eventData : DrawEventData) => {
        socket.broadcast.emit('draw', eventData)
    })
})

io.listen(5000)
