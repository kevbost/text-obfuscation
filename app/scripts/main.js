var inputSplit = null,
    alphabet = ' abcdefghijklmnopqrstuvwxyz.\'\,\?\!\;\:\"/123456789'.split(''),
    obfuscation = [],
    enlightenment = [],
    codeParser = [],

    // http://facebook.com

    _utility = function(allLetters, find) {
        found = allLetters.indexOf(find);
        obfuscation.push(found);
    },

    _clipBoard = function(text) {
        window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
    },

    e = function(optional) {

        if (typeof optional === 'undefined') {
            var message = prompt('Enter a word or string of words for encryption');
            inputSplit = message.split('');
        } else {
            inputSplit = optional.split('');
        }

        obfuscation = [];
        for (var i = 0; i < inputSplit.length; i++) {
            _utility(alphabet, inputSplit[i]);
        }
        console.log(obfuscation)
        // return _clipBoard(obfuscation)
        $('#decryptBox').val(obfuscation)
    },

    d = function(optional) {
        if (typeof optional === 'undefined') {
            var message = prompt('What would you like decrypted?')
            codeParser = message.split(',');
        } else {
            codeParser = optional.split(',');
        }
        parsed = [];
        for (var i = 0; i < codeParser.length; i++) {
            parsed.push(parseInt(codeParser[i]));
        }
        for (var i = 0; i < parsed.length; i++) {
            enlightenment.push(alphabet[parsed[i]]);
        }
        decryption = enlightenment.join('');
        console.log(decryption)
        $('#encryptBox').val(decryption);

        inputSplit = null;
        obfuscation = [];
        enlightenment = [];
        codeParser = [];
    };

$('body')
    .on('click', '.encryptBtn', function(){
        e($('#encryptBox').val())
    })
    .on('click', '.decryptBtn', function(){
        d($('#decryptBox').val())
    })
