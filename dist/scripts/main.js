var inputSplit=null,alphabet=" abcdefghijklmnopqrstuvwxyz.',?!;:\"=/123456789".split(""),obfuscation=[],enlightenment=[],codeParser=[],_utility=function(t,n){found=t.indexOf(n),obfuscation.push(found)},_clipBoard=function(t){window.prompt("Copy to clipboard: Ctrl+C, Enter",t)},e=function(t){if("undefined"==typeof t){var n=prompt("Enter a word or string of words for encryption");inputSplit=n.split("")}else inputSplit=t.split("");obfuscation=[];for(var e=0;e<inputSplit.length;e++)_utility(alphabet,inputSplit[e]);console.log(obfuscation),$("#decryptBox").val(obfuscation)},d=function(t){if("undefined"==typeof t){var n=prompt("What would you like decrypted?");codeParser=n.split(",")}else codeParser=t.split(",");parsed=[];for(var e=0;e<codeParser.length;e++)parsed.push(parseInt(codeParser[e]));for(var e=0;e<parsed.length;e++)enlightenment.push(alphabet[parsed[e]]);decryption=enlightenment.join(""),console.log(decryption),$("#encryptBox").val(decryption),inputSplit=null,obfuscation=[],enlightenment=[],codeParser=[]};$("body").on("click",".encryptBtn",function(){e($("#encryptBox").val())}).on("click",".decryptBtn",function(){d($("#decryptBox").val())});