function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Hpp4CQVvKL":
        Script1();
        break;
      case "6HIFmVvxg74":
        Script2();
        break;
      case "6KA2TsEZEwJ":
        Script3();
        break;
      case "6fRBmAX8rl9":
        Script4();
        break;
      case "68bFFHAI06g":
        Script5();
        break;
      case "6UhedT6VixW":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5isngQtongI');
const duration = 500;
const easing = 'ease-out';
const id = '6Oc8ylbC4Iv';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5hjWjHje0An');
const duration = 500;
const easing = 'ease-out';
const id = '5rx0KzReyH1';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
