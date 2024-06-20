import { useEffect, useState } from "react"

let rec: any = null
if ('webkitSpeechRecognition' in window) {
    rec = new webkitSpeechRecognition()
    rec.continuous = true
    rec.lang = 'ru-RU'
}

type useReturnTypeSpeechRecognition = {
    text: string,
    isListening: boolean,
    hasSupport: boolean,
    startListening: () => void,
    stopListening: () => void
}

function useSpeechRecognition(): useReturnTypeSpeechRecognition {
    const [text, setText] = useState<string>('')
    const [isListening, setIsListening] = useState<boolean>(false)
    useEffect(() => {
        if (!rec) return
        rec.onresult = (event: SpeechRecognitionEvent) => {
            setText(event.results[0][0].transcript)
            console.log(event)
            rec.stop()
            setIsListening(false)
        }
    }, [])
    const startListening = () => {
        setText('')
        setIsListening(true)
        rec.start()
    }
    const stopListening = () => {
        setIsListening(false)
        rec.stop()
    }
    return {
        text, 
        isListening,
        hasSupport: !!rec,
        startListening, 
        stopListening
    }
}

export default useSpeechRecognition