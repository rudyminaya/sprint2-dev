import { useState } from 'react'
import Body from '../components/body'
import Header from '../components/header'
import { hotelsData } from '../data/data'

export default function Home() {
    const [showCards, setShowCards] = useState(hotelsData)
    const [search, setSearch] = useState(null)
    return (
        <>
            <Header
                filtrar={setShowCards}
                data={hotelsData}
                setSearch={setSearch}
            />
            <Body data={showCards} search={search} />
        </>
    )
}
