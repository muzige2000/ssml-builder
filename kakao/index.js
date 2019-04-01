"use strict"

const Speech = require("../index.js")
const _ = require('lodash')
let KakaoSpeech = function () {
  this._elements = []
}

KakaoSpeech.prototype = Object.create(Speech.prototype)


KakaoSpeech.prototype.ssml = function (excludeSpeakTag, options = {}) {
  if (excludeSpeakTag) {
    return this._elements.join(" ")
  }

  let voice = _.get(options, 'voice', 'spring')
  let speed = _.get(options, 'speed', 'medium')
  let volume = _.get(options, 'volume', 'medium')


  return "<speak voice='" + voice + "' speed='" + speed + "' volume='" + volume + "'>" + this._elements.join(" ") + "</speak>"
}

module.exports = KakaoSpeech
