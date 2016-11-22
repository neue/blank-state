var transc;
var recognition = new webkitSpeechRecognition();
var currentPhrase;
var dotSpan;

function setup() {
  transc = select('#transcript');
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = function(event) { 
    var recString = '';
    var first = true;
    for (var i = event.resultIndex; i < event.results.length; ++i) { 
        var identificated = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
              dotSpan = createSpan('&bull;');
              dotSpan.parent(transc);
              current = createSpan('');
              current.parent(transc);
        } else {
            if (first) {
              recString += identificated;              
            } else {
              recString += '<strong>'+identificated+'</strong>';
            }
            first = false;
        }
    current.html(recString);   
   } 
  }
  recognition.onend = function() {
    console.log("END");
  }
  current = createSpan('');
  current.parent(transc);
  recognition.start();
}