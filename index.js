var musicians = ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"]
var instruments = ["rhythm guitar", "bass", "drums", "lead guitar"]

function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlayArray = []

  for(let i = 0; i < musicians.length; i++) {
    theBeatlesPlayArray[i]= musicians[i] + " plays " + instruments[i]
  }
  return theBeatlesPlayArray
}

function johnLennonFacts() {

}

1) Beatles Loops returns an array of strings containing what instruments each musician plays:
2) Beatles Loops johnLennonFacts returns an array of strings with exclamation points:
3) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :
4) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once when passed the parameter 17:

var musicians = ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"]
var instruments = ["rhythm guitar", "bass", "drums", "lead guitar"]
var theBeatlesPlayArray = []

  for(let i = 0; i < theBeatlesPlayArray.length; i++) {
    theBeatlesPlayArray[i]= musicians[i] + " plays " + instruments[i]
  }