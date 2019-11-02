'use strict';

import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);
import 'whatwg-fetch';
require('formdata-polyfill');
import 'nodelist-foreach-polyfill';

import popups from './modules/popups';
import forms from './modules/forms';
import accordionTwo from './modules/accordionTwo';
import accordionCalculator from './modules/accordionCalculator';
import button from './modules/button';
import valid from './modules/valid';

//отправка данных с форм с помощью ajax
forms('.capture-form');
forms('.popup-form-call');
forms('.popup-form-discount');
forms('.popup-form-check');
forms('.popup-form-consult');
forms('.director-form');
forms('.main-form');
forms('.form-control');

//слайдер аккордеон
accordionTwo();

//слайдер аккордеон
accordionCalculator();

//кнопка акций
button();

//popupConsult();
popups('.call-btn', '.popup-call');
popups('.discount-btn', '.popup-discount');
popups('.consultation-btn', '.popup-consultation');
popups('.check-btn', '.popup-check');

//валидация всех форм
valid();



