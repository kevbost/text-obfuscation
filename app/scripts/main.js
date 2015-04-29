    var alphabet = ' abcdefghijklmnopqrstuvwxyz.\'\,\?\!\;\:\"\=\™/1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var inputSplit = null;
    var obfuscation = [];
    var enlightenment = [];
    var codeParser = [];

var ArrayPos = (function(){
    // 'use strict';

        this._utility = function(allLetters, find) {
            var found = allLetters.indexOf(find);
            obfuscation.push(found);
        };

        this._clipBoard = function(text) {
            window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
        };

        this.ae = function(optional) {
            var that = this;
            if (typeof optional === 'undefined') {
                var message = window.prompt('Enter a word or string of words for encryption');
                inputSplit = message.split('');
            } else {
                inputSplit = optional.split('');
            }

            obfuscation = [];
            for (var i = 0; i < inputSplit.length; i++) {
                this._utility(alphabet, inputSplit[i]);
            }
            window.console.log(obfuscation);
            // return _clipBoard(obfuscation)
            $('#arrayDecryptBox').val(obfuscation);
        };

        this.ad = function(optional) {

            if (typeof optional === 'undefined') {
                var message = window.prompt('What would you like decrypted?');
                codeParser = message.split(',');
            } else {
                codeParser = optional.split(',');
            }

            var parsed = [];
            for (var i = 0; i < codeParser.length; i++) {
                parsed.push(parseInt(codeParser[i]));
            }

            for (var i = 0; i < parsed.length; i++) {
                enlightenment.push(alphabet[parsed[i]]);
            }

            var decryption = enlightenment.join('');
            window.console.log(decryption);
            $('#arrayEncryptBox').val(decryption);

            inputSplit = null;
            obfuscation = [];
            enlightenment = [];
            codeParser = [];
        };

    return this;
})();


$('body')
    .on('click', '.encryptBtn', function(){
        'use strict';
        ArrayPos.ae($('#arrayEncryptBox').val());
    })
    .on('click', '.decryptBtn', function(){
        'use strict';
        ArrayPos.ad($('#arrayDecryptBox').val());
    });
