'use strict';

var namesData = [
  'Иван',
  'Хуан Себастьян',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var lastNamesData = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColorData = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColorData = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

document.querySelector('.setup').classList.remove('hidden');

var getRandomValue = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var getSimilarWizards = function () {
  var similarWizards = [];
  for (var i = 0; i <= 4; i++) {
    similarWizards[i] = {
      name: namesData[getRandomValue(0, 7)] + ' ' + lastNamesData[getRandomValue(0, 8)], /* не придумал как тут можно соблюсти 80 символов */
      coatColor: coatColorData[getRandomValue(0, 6)],
      eyesColor: eyesColorData[getRandomValue(0, 5)]
    };
  }
  return similarWizards;
};

var similarWizardsData = getSimilarWizards();

document.querySelector('.setup-similar').classList.remove('hidden');

var renderSimilarWizards = function (similarWizards) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < 4; i++) {
    var similarWizardElement = similarWizardTemplate.cloneNode(true);

    similarWizardElement.querySelector('.setup-similar-label')
      .textContent = similarWizards[i].name;
    similarWizardElement.querySelector('.wizard-coat').style
      .fill = similarWizards[i].coatColor;
    similarWizardElement.querySelector('.wizard-eyes').style
      .fill = similarWizards[i].eyesColor;

    fragment.appendChild(similarWizardElement);
  }

  similarListElement.appendChild(fragment);
};

renderSimilarWizards(similarWizardsData);
