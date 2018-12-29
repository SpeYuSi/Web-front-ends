var express= require('express')
var cheerio= require('cheerio')
var superagent= require('superagent')

var app= express()

app.get('/',function (req,res,next) {
  superagent.get('http://news.baidu.com/tech')
  .end(function (err,result) {
    if(err){
      return next(err)
    }

      
      var $= cheerio.load(result.text)
      var arr= []
     $('.ulist').find('li').each(function(index,item){
                var news = $(this)
                var title= news.find('a').text()
                var details= news.find('a').attr('href')
             
                arr.push(
                    {
                        title: title,
                        details: details,
                        
                    }
                );
            });
        res.send(arr);

  })
})
app.listen(8081,function () {
  console.log('sucess!')
})