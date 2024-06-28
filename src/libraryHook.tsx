import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function LibraryHook() {
    const { 
        listening, 
        browserSupportsSpeechRecognition,
        transcript,
    } = useSpeechRecognition()
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>
    }
    return (
        <div>
          <p>Microphone: {listening ? 'on' : 'off'}</p>
          <button onClick={() => SpeechRecognition.startListening({ language: 'ru-RU'})}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <p>{transcript}</p>
        </div>
      );
}