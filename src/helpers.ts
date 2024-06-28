export default function wordReg(word: string): RegExp {
    if (word.length <= 4) {
        return new RegExp(`.*${word.toLowerCase()}.*`, 'g')    
    }
    return new RegExp(`.*${word.toLowerCase().slice(0, word.length / 2)}.*`, 'g')
}