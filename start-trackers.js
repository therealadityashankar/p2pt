const { spawn } = require('child_process')

const log = data => {
  console.log(`stdout: ${data}`)
}

const server1 = spawn('node', ['startTracker.js'])
const server2 = spawn('node', ['startTracker.js'], { env: { PORT: 5001 } })

server1.stdout.on('data', log)
server1.stderr.on('data', log)
server1.on('error', log)
server1.on('close', log)

server2.stdout.on('data', log)
server2.stderr.on('data', log)
server2.on('error', log)
server2.on('close', log)
