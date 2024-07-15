const app=require('./app')

const PORT = process.env.PORT ||5030;

app.listen(PORT,function(){
  console.log("Running...@5030");
})