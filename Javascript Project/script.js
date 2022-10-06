let btn=document.getElementById('btn');
let output=document.getElementById('output');

let quotes=[
    'You know, Hobbes, some days even my lucky rocketship underpants dont help. ― Bill Watterson',
 
 'Even if we dont have the power to choose where we come from, we can still choose where we go from there. —Stephen Chbosky',
 
'And now that you dont have to be perfect, you can be good. —John Steinbeck',
 
 'Outside the windows the day was bright: golden sunshine, blue sky, pleasant wind... I wanted to punch the happy day in the face, grab it by the hair, and beat it until it told me what the hell it was so happy about. ―Ilona Andrews',
 
 'I havent had a very good day. I think I might still be hungover and everyones dead and my root beers gone. ―Holly Black',
 
 'It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default. —J.K. Rowling',
 
 'But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders. ―Charles Darwin',
 
 'We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out. —Ray Bradbury',
 
 'You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it —Maya Angelou',

 'Life is never fair, and perhaps it is a good thing for most of us that it is not. —Oscar Wilde',
];


btn.addEventListener('click',function(){
    var randomquote=quotes[Math.floor(Math.random()*quotes.length)]
   output.innerHTML=randomquote;
})