import { useMemo, useState } from "react"
import wordReg from "./helpers"

interface DataList {
    id: number
    title: string
}

type ListAnyProps = {
    word: string
}

const data = [
    {id: 1, title: 'Малина'}, {id: 2, title: 'Яблоко'}, {id: 3, title: 'Груша'}, {id: 4, title: 'Алоя'},
    {id: 5, title: 'Малиновый сироп'}, {id: 6, title: 'Яблочный сок'}, {id: 7, title: 'Джем из груш'}, {id: 8, title: 'Абрикос'},
    {id: 9, title: 'Банан'}, {id: 10, title: 'Клубника'}, {id: 11, title: 'Клубничный сироп'}, {id: 12, title: 'Ананас'},
    {id: 13, title: 'Картошка'}, {id: 14, title: 'Огурец'}, {id: 15, title: 'Ананасовый сок'}, {id: 16, title: 'Вишня'},
    {id: 17, title: 'Черешня'}, {id: 18, title: 'Шампунь с Алоя'}, {id: 19, title: 'Вишнёвый сок'}, {id: 20, title: 'Персик'},
]

export default function ListAny({ word }: ListAnyProps) {
    const [list, setList] = useState<DataList[] | null>(data)
    
    const sortedList = useMemo(() => {
        if (word) {
            return list?.filter(item => {
                return item.title.toLowerCase().match(wordReg(word))
            })
        } else {
            return list
        }
    }, [word, list])

    return (
        <div className="list">
            {sortedList?.map(item => {
                return (
                    <div key={item.id} className="item">
                        <h2>{item.title}</h2>
                    </div>
                )
            })}
        </div>
    )
}