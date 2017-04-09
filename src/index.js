import server from './server';

const config = {
  ip: '127.0.0.1',
  port: 8080
};

server.listen(
  config.port,
  config.ip,
  error => {
    if (error) {
      console.log('Unable to listen for connections', error)
      process.exit(0)
    }
    
    console.log(`express is listening on http://${config.ip}':${config.port}`)
  }
)
