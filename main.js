/*
	Author: watchman 
	Version: 1.0
*/

function myFunction() {
 
    /* Get the text field */
    var message = document.getElementById("message");
    var languageSelected = document.getElementById("languageInput");
   
    var languages = {"Afrikaans" : "af",
                     "Albanian" : "sq",
                     "Amharic" : "am",
                     "Arabic" : "ar",
                     "Armenian" : "hy",
                     "Azerbaijani" : "az",
                     "Basque" : "eu",
                     "Belarusian" : "be",
                     "Bengali" : "bn",
                     "Bosnian" : "bs",
                     "Bulgarian" : "bg",
                     "Catalan" : "ca",
                     "Cebuano" : "ceb",
                     "Chichewa" : "ny",
                     "Chinese (Simplified)" : "zh-CN",
                     "Chinese (Traditional)" : "zh-TW",
                     "Corsican" : "co",
                     "Croatian" : "hr",
                     "Czech" : "cs",
                     "Danish" : "da",
                     "Dutch" : "nl",
                     "English" : "en",
                     "Esperanto" : "eo",
                     "Estonian" : "et",
                     "Filipino" : "tl",
                     "Finnish" : "fi",
                     "French" : "fr",
                     "Frisian" : "fy",
                     "Galician" : "gl",
                     "Georgian" : "ka",
                     "German" : "de",
                     "Greek" : "el",
                     "Gujarati" : "gu",
                     "Haitian Creole" : "ht",
                     "Hausa" : "ha",
                     "Hawaiian" : "haw",
                     "Hebrew" : "iw",
                     "Hindi" : "hi",
                     "Hmong" : "hmn",
                     "Hungarian" : "hu",
                     "Icelandic" : "is",
                     "Igbo" : "ig",
                     "Indonesian" : "id",
                     "Irish" : "ga",
                     "Italian" : "it",
                     "Japanese" : "ja",
                     "Javanese" : "jw",
                     "Kannada" : "kn",
                     "Kazakh" : "kk",
                     "Khmer" : "km",
                     "Kinyarwanda" : "rw",
                     "Korean" : "ko",
                     "Kurdish (Kurmanji)" : "ku",
                     "Kyrgyz" : "ky",
                     "Lao" : "lo",
                     "Latin" : "la",
                     "Latvian" : "lv",
                     "Lithuanian" : "lt",
                     "Luxembourgish" : "lb",
                     "Macedonian" : "mk",
                     "Malagasy" : "mg",
                     "Malay" : "ms",
                     "Malayalam" : "ml",
                     "Maltese" : "mt",
                     "Maori" : "mi",
                     "Marathi" : "mr",
                     "Mongolian" : "mn",
                     "Myanmar (Burmese)" : "my",
                     "Nepali" : "ne",
                     "Norwegian" : "no",
                     "Odia (Oriya)" : "or",
                     "Pashto" : "ps",
                     "Persian" : "fa",
                     "Polish" : "pl",
                     "Portuguese" : "pt",
                     "Punjabi" : "pa",
                     "Romanian" : "ro",
                     "Russian" : "ru",
                     "Samoan" : "sm",
                     "Scots Gaelic" : "gd",
                     "Serbian" : "sr",
                     "Sesotho" : "st",
                     "Shona" : "sn",
                     "Sindhi" : "sd",
                     "Sinhala" : "si",
                     "Slovak" : "sk",
                     "Slovenian" : "sl",
                     "Somali" : "so",
                     "Spanish" : "es",
                     "Sundanese" : "su",
                     "Swahili" : "sw",
                     "Swedish" : "sv",
                     "Tajik" : "tg",
                     "Tamil" : "ta",
                     "Tatar" : "tt",
                     "Telugu" : "te",
                     "Thai" : "th",
                     "Turkish" : "tr",
                     "Turkmen" : "tk",
                     "Ukrainian" : "uk",
                     "Urdu" : "ur",
                     "Uyghur" : "ug",
                     "Uzbek" : "uz",
                     "Vietnamese" : "vi",
                     "Welsh" : "cy",
                     "Xhosa" : "xh",
                     "Yiddish" : "yi",
                     "Yoruba" : "yo",
                     "Zulu" : "zu"
                    };
    
    var langCode = languages[languageSelected.value];
    
    console.log(langCode);
    
    /* Select the text field */
    message.select();
    message.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
   
    navigator.clipboard.writeText("https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=" + langCode + "&q=" + message.value);
    
    /* Make thumbs up icon appear and disappear */
    $("#thumbs-up").css("display", "none");
    $("#thumbs-up").attr("class","fa-solid fa-bounce fa-thumbs-up fa-5x");
    $('#thumbs-up').fadeIn(2000);
    $("#thumbs-up").fadeOut(3000);
    
    /* Change button to tell user they have successfully copied the text*/
    $("#submit").text("Copied to Clipboard 😎");
    $("#submit").css("background", "#6b5b95");
    
    /* In 5 seconds go back to the defaults */
    setTimeout(function() {
      $("#submit").text("Copy Voice Link");
      $("#submit").css("background", "#009b77");
    }, 5000);
    
    
  }