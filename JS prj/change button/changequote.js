function Generate(){
      var quotes= {
            "Alysha Speer " :  "You never really know what's coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity",
            "Marry Asttell" : " If all men are born free, how is it that all women are born slaves?",
            "John Galsworthy " : "Life calls the tune, we dance."
                  } 
       var authors = Object.keys(quotes) ;
       var author= authors[Math.floor(Math.random()*
        authors.length)] ;
        var quote = quotes[author];
        document.getElementById("quote").innerHTML=quote;
        document.getElementById("author").innerHTML=author ;


            } 
