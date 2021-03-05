var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Parody info",
assets : {
large_image : "Image",
large_text : "Your Status" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Subscribe" , url : "https://www.youtube.com/channel/UCu748qFLwiGElY_n34ec10Q"},{label : "Join Discord Server",url : "https://discord.gg/vRAHfcq"}]
}
})
})
client.login({ clientId : "817382831893774347" }).catch(console.error);