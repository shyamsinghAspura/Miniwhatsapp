const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection sucessful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allchats = [
    {
        from: "shyam",
        to: "vikki",
        msg:"send me notes",
        created_at: new Date(),
    },
    {
        from: "shyam",
        to: "Rahul",
        msg:"love you bro",
        created_at: new Date(),
    },
    {
        from: "Ram",
        to: "sita",
        msg:"take care babe",
        created_at: new Date(),
    },
];

Chat.insertMany(allchats);

