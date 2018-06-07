'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var BAR_Y = 245;
var BAR_WIDTH = 40;
var MAX_BAR = 150;
var TITLE_X = 240;
var TITLE_Y = 40;
var FONT_GAP = 16;
var COLOR_WHITE = '#fff';
var COLOR_BLACK = '#000';
var COLOR_GREY = 'rgba(0, 0, 0, 0.7)';
var COLOR_RED = 'rgba(255, 0, 0, 1)';

var getRandomColor = function () {
  return 'rgba(0, 0, 255,' + Math.random() + ')';
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, COLOR_GREY);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, COLOR_WHITE);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = COLOR_BLACK;
  ctx.fillText('Ура вы победили!', TITLE_X, TITLE_Y);
  ctx.fillText('Список результатов:', TITLE_X - FONT_GAP, TITLE_Y + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = COLOR_BLACK;
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, BAR_Y - (MAX_BAR * times[i] / maxTime) - GAP);

    if (names[i] === 'Вы') {
      ctx.fillStyle = COLOR_RED;
    } else {
      ctx.fillStyle = getRandomColor();
    }

    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, -(MAX_BAR * times[i] / maxTime));
  }
};
