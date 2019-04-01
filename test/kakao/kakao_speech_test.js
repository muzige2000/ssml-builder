"use strict"
//
var assert = require('chai').assert
var KakaoSpeech = require("../../kakao")
//
describe('KakaoSpeech', function () {
  var speech = null

  beforeEach(function () {
    speech = new KakaoSpeech()
  })

  describe('ssml', function () {

    it('ssml has speak tag', function () {
      speech.say("Hello")
      assert.equal(speech.ssml(true), "Hello")
    })

    it('ssml has no speak tag', function () {
      speech.say("Hello")
      assert.equal(speech.ssml(false), "<speak voice='spring' speed='medium' volume='medium'>Hello</speak>")
    })

    it('should escape all 5 characters', function () {
      speech.say("<Cat's> & <Dog's>")
      assert.equal(speech.ssml(false), "<speak voice='spring' speed='medium' volume='medium'>&lt;Cat&apos;s&gt; &amp; &lt;Dog&apos;s&gt;</speak>")
    })
  })

  describe('volume', function () {

    describe('positive', function () {

      it('should generate a prosody tag with the volume attribute and word', function () {
        var validVolumes = ['silent', 'x-soft', 'soft', 'medium', 'loud', 'x-loud']
        for (var i = 0; i < validVolumes.length; i++) {
          speech.say('really like')
          assert.equal(speech.ssml(false, {volume: 'loud'}), "<speak voice='spring' speed='medium' volume='loud'>really like</speak>")
          speech = new KakaoSpeech()
        }
      })

    })
  })
})
//
//
// // var speech = new KakaoSpeech();
// // speech.whisper("good night and sweet dreams").pause("1ms");
// // console.log(speech.ssml());
