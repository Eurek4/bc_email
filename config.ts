export default {
    // contract address
    address: "0x",
    // keccak256("getFlag(string)")
    topics: ["0x74b3ee18cbf9455935758117afafab902275a4e60e149b3b854408884ba4dd37"],
    flag: "FLAG{}",
    email: {
        // see https://nodemailer.com/smtp/well-known/
        service: "163",
        user: "your emaill here",
        pass: "your pass here"
    },
    // infura web socket endpoint
    infura: "wss://ropsten.infura.io/ws/v3/"
}