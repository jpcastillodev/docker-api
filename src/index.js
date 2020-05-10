const {app, port} = require("./app")


const setup = async _ => {
    await app.listen(port)
    console.log(`server on port ${port}`)
}


setup()