var i = require('./js/appInit')
i.app.post('/doauth',(req,res)=>{
  params = req.body
  i.auth.doLogin({
    i:i,params:params,res:res,req,req,redirpath:'/tickets'
  },result=>{
    if(result.authenticated){
      i.logging.writeLog({
        createuser:result.username,subject:'Login '+result.email,description:'Login '+result.email,i:i
      },logresult=>{


        i.odoo.getOdooSession(session_id=>{
          res.cookie('session_id',mysubstr)
          res.redirect('/tickets')
        })
      })
    }else{
      res.redirect('/login')
    }
  })
})
i.app.get('/index',(req,res)=>{
  i.product.gets({},result=>{
    console.log(result)
    res.render('home/index',{
      obj:result
    });
  })
})
i.app.get('/pembelian',(req,res)=>{
  i.product.gets({},result=>{
    console.log(result)
    res.render('proposal/buy',{
      objs:result
    });
  })
})

i.app.listen(i.setting.port,_=>{
    console.log('Budgeting Sales start at port ::: ',i.setting.port)
})