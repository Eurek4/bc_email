import Web3 from "web3"
import {createTransport} from 'nodemailer'
import config from "./config"


const sender = createTransport({
    service: config.email.service,
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
})


const web3 = new Web3(new Web3.providers.WebsocketProvider(config.infura))

web3.eth.subscribe('logs', {address: config.address, topics: config.topics}, (err, log) => {
    if (err) {
        console.log(err)
    }
    let hexstr = log.data.slice(130).match(/.{2}/g)
    let i = hexstr.findIndex(v => v == "00")
    let st = hexstr.slice(0, i).join('')
    console.log(st)
    const decode = web3.utils.hexToAscii("0x" + st)
    console.log(decode)
    sender.sendMail({
        from: config.email.user,
        to: decode,
        subject: "flag",
        text: config.flag
    }, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log(info.response)
        }
    })
})