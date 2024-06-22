import useSpeechRecognition from "./hooks/useSpeechRecognitionHook";

export default function CustomExample(){
    const {
        text, isListening, hasSupport, startListening, stopListening
      } = useSpeechRecognition()
      return (
        <>
          {hasSupport ? 
            <>
              <h1>TEST</h1>
              <button onMouseDown={startListening} onMouseUp={stopListening}>Начать запись</button>
              <h3>{text}</h3>
              {isListening ? <div>Вас слушают</div>: ''}
            </>:
              <h1>Ваш бразуер не поддерживает данную функцию</h1>
          }
        </>
      );
}