import { Server } from 'socket.io'
import { DrawEventData } from './types.js'

const CLIENT_ORIGIN = 'http://localhost:3000'

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