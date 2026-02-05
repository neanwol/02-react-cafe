
import { useState } from 'react'
import css from './App.module.css'
import CafeInfo from './CafeInfo'
import VoteOptions from './VoteOptions'
import VoteStats from './VoteStats'
import type { Votes, VoteType } from '../types/votes'
import Notification from './Notification'

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1
    }))
  }

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  const total = votes.good + votes.neutral + votes.bad

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={total > 0} />
        {total > 0 ? <VoteStats votes={votes} /> : <Notification />}
      </div>

    </>
  )
}

export default App