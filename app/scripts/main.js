var _settings = {
    alphabet: ' abcdefghijklmnopqrstuvwxyz.\'\,\?\!\;\:\"\=\™\-\_/1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    inputSplit: null,
    decryption: null,
    obfuscation: [],
    enlightenment: [],
    codeParser: [],
    numberKey: 123
};

var _clear = function(){
    'use strict';
    _settings.inputSplit = null;
    _settings.decryption = null;
    _settings.obfuscation = [];
    _settings.enlightenment = [];
    _settings.codeParser = [];
};

var ArrayPos = {

    _init: function(input, find) {
        'use strict';

        var found = input.indexOf(find);
        _settings.obfuscation.push(found);
    },

    _clipBoard: function(text) {
        'use strict';
        window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
    },

    ae: function(optional) {
        'use strict';

        if (typeof optional === 'undefined') {
            var message = window.prompt('Enter a word or string of words for encryption');
            _settings.inputSplit = message.split('');
        } else {
            _settings.inputSplit = optional.split('');
        }

        for (var i = 0; i < _settings.inputSplit.length; i++) {
            this._init(_settings.alphabet, _settings.inputSplit[i]);
        }

        window.console.log(_settings.obfuscation);

        $('#arrayDecryptBox').val(_settings.obfuscation);
        $('#arrayEncryptBox').val('');

        _clear();
    },

    ad: function(optional) {
        'use strict';

        if (typeof optional === 'undefined') {
            var message = window.prompt('What would you like decrypted?');
            _settings.codeParser = message.split(',');
        } else {
            _settings.codeParser = optional.split(',');
        }

        var parsed = [];
        for (var i = 0; i < _settings.codeParser.length; i++) {
            parsed.push(parseInt(_settings.codeParser[i]));
        }

        for (var j = 0; j < parsed.length; j++) {
            _settings.enlightenment.push(_settings.alphabet[parsed[j]]);
        }

        _settings.decryption = _settings.enlightenment.join('');
        window.console.log(_settings.decryption);


        $('#arrayEncryptBox').val(_settings.decryption);
        $('#arrayDecryptBox').val('');

        _clear();
    }
};


var CharCode = {
    _init: function(input, find){
        'use strict';

        var found = find.charCodeAt();
        _settings.obfuscation.push(found);
    },

    cce: function(optional, maths){
        'use strict';
        var $encrypt;
        var $decrypt;

        _settings.inputSplit = optional.split('');

        // if (maths === true){
        //     $encrypt = $('#charMathsEncryptBox');
        //     $decrypt = $('#charMathsDecryptBox');
        // } else {
        //     $encrypt = $('#charEncryptBox');
        //     $decrypt = $('#charDecryptBox');
        // }

        for (var i = 0; i < _settings.inputSplit.length; i++) {
            if (maths === true){
                var base = _settings.inputSplit[i];
                var found = base.charCodeAt();

                _settings.obfuscation.push(found * _settings.numberKey);

                $encrypt = $('#charMathsEncryptBox');
                $decrypt = $('#charMathsDecryptBox');
            } else {
                this._init(null, _settings.inputSplit[i]);

                $encrypt = $('#charEncryptBox');
                $decrypt = $('#charDecryptBox');
            }
        }

        window.console.log(_settings.obfuscation);

        $decrypt.val(_settings.obfuscation);
        $encrypt.val('');

        _clear();
    },

    ccd: function(optional, maths){
        'use strict';

        var $encrypt;
        var $decrypt;

        _settings.codeParser = optional.split(',');

        var parsed = [];
        for (var i = 0; i < _settings.codeParser.length; i++) {
            if (maths === true){
                parsed.push(parseInt(_settings.codeParser[i]) / _settings.numberKey);

                $encrypt = $('#charMathsEncryptBox');
                $decrypt = $('#charMathsDecryptBox');
            } else {
                parsed.push(parseInt(_settings.codeParser[i]));

                $encrypt = $('#charEncryptBox');
                $decrypt = $('#charDecryptBox');
            }
        }

        for (var j = 0; j < parsed.length; j++) {
            _settings.enlightenment.push(String.fromCharCode(parsed[j]));
        }

        _settings.decryption = _settings.enlightenment.join('');
        window.console.log(_settings.decryption);


        $encrypt.val(_settings.decryption);
        $decrypt.val('');
        _clear();
    }
};

$('body')
    .on('click', '.arrayEncryptBtn', function(){
        'use strict';
        ArrayPos.ae($('#arrayEncryptBox').val());
    })
    .on('click', '.arrayDecryptBtn', function(){
        'use strict';
        ArrayPos.ad($('#arrayDecryptBox').val());
    })

    .on('click', '.charEncryptBtn', function(){
        'use strict';
        CharCode.cce($('#charEncryptBox').val());
    })
    .on('click', '.charDecryptBtn', function(){
        'use strict';
        CharCode.ccd($('#charDecryptBox').val());
    })

    .on('click', '.charMathsEncryptBtn', function(){
        'use strict';
        CharCode.cce($('#charMathsEncryptBox').val(), true);
    })
    .on('click', '.charMathsDecryptBtn', function(){
        'use strict';
        CharCode.ccd($('#charMathsDecryptBox').val(), true);
    })
;
