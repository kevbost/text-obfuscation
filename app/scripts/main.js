var _library = {
    alphabet: ' abcdefghijklmnopqrstuvwxyz.\'\,\?\!\;\:\"\=\™\-\_/1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    inputSplit: null,
    decryption: null,
    obfuscation: [],
    enlightenment: [],
    codeParser: []
};

var _clear = function(){
    'use strict';
    _library.inputSplit = null;
    _library.decryption = null;
    _library.obfuscation = [];
    _library.enlightenment = [];
    _library.codeParser = [];
};

var ArrayPos = {

        _init: function(input, find) {
            'use strict';

            var found = input.indexOf(find);
            _library.obfuscation.push(found);
        },

        _clipBoard: function(text) {
            'use strict';

            window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
        },

        ae: function(optional) {
            'use strict';

            if (typeof optional === 'undefined') {
                var message = window.prompt('Enter a word or string of words for encryption');
                _library.inputSplit = message.split('');
            } else {
                _library.inputSplit = optional.split('');
            }

            for (var i = 0; i < _library.inputSplit.length; i++) {
                this._init(_library.alphabet, _library.inputSplit[i]);
            }

            window.console.log(_library.obfuscation);

            $('#arrayDecryptBox').val(_library.obfuscation);

            _clear();
        },

        ad: function(optional) {
            'use strict';

            if (typeof optional === 'undefined') {
                var message = window.prompt('What would you like decrypted?');
                _library.codeParser = message.split(',');
            } else {
                _library.codeParser = optional.split(',');
            }

            var parsed = [];
            for (var i = 0; i < _library.codeParser.length; i++) {
                parsed.push(parseInt(_library.codeParser[i]));
            }

            for (var j = 0; j < parsed.length; j++) {
                _library.enlightenment.push(_library.alphabet[parsed[j]]);
            }

            _library.decryption = _library.enlightenment.join('');
            window.console.log(_library.decryption);


            $('#arrayEncryptBox').val(_library.decryption);

            _clear();
        }
};


var CharCode = {

};


$('body')
    .on('click', '.encryptBtn', function(){
        'use strict';
        ArrayPos.ae($('#arrayEncryptBox').val());
    })
    .on('click', '.decryptBtn', function(){
        'use strict';
        ArrayPos.ad($('#arrayDecryptBox').val());
    })
;
