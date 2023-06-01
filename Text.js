// Laden der verfügbaren Stimmen
function loadVoices() {
    var voices = speechSynthesis.getVoices();
    var voiceSelect = document.getElementById("voice-selection");
    voiceSelect.innerHTML = '';

    for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.value = voices[i].lang;
      option.innerHTML = voices[i].name + ' (' + voices[i].lang + ')';
      voiceSelect.appendChild(option);
    }
  }

  // Konvertierung in Sprache
  function convertToSpeech() {
    var text = document.getElementById("text-to-speech-input").value;
    var selectedVoice = document.getElementById("voice-selection").value;

    if ('speechSynthesis' in window) {
      var synthesis = window.speechSynthesis;
      var utterance = new SpeechSynthesisUtterance(text);

      // Spracheinstellungen
      utterance.lang = selectedVoice;

      synthesis.speak(utterance);
    } else {
      console.log("Die Speech Synthesis API wird von Ihrem Browser nicht unterstützt.");
    }
  }

  // Ereignislistener für das Laden der Stimmen
  window.speechSynthesis.onvoiceschanged = function() {
    loadVoices();
  };