const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const cors = require('koa2-cors')
console.log('============*********============')
console.log('============*********============')
console.log('============Koa Start============')
console.log('============*********============')
console.log('============*********============')
app.use(cors({
    origin:function(ctx){
        return 'http://localhost:8080'
    }
}))
app.use(router.routes())
// app.use(async ctx => {
//     ctx.body = 'Hello World1111'
// })

app.listen(3000)
