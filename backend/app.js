const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  pingTimeout: 1000,
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});

// เมื่อเชื่อมต่อกับเซิร์ฟเวอร์ localhost:3000 ให้ส่งข้อความไปยังไคลเอนต์
app.get("/", (req, res) => {
  res.send("Hello");
});

//ตัวจัดการ connection event
io.on("connection", (socket) => {
  // เมื่อได้รับข้อความจาก client
  socket.on("chat", (data) => {
    console.log(`Message from ${data.name}: ${data.msg}`);

    let msg = {
      from: {
        name: data.name,
        avatar: data.avatar,
      },
      msg: data.msg,
    };

    // ส่งข้อความไปยัง clientทั้งหมด ยกเว้น clientที่ส่งข้อความ
    socket.broadcast.emit("chat", msg);
  });

  socket.on("disconnect", () => {
    console.log(`user disconnected: ${socket.name}`);
  });
});

server.listen(3000);
