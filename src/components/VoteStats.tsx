import type { Votes } from '../types/votes'
import styles from './VoteStats.module.css'

interface VoteStatsProps {
  votes: Votes
}

function VoteStats({ votes }: VoteStatsProps) {
  const total = votes.good + votes.neutral + votes.bad
  const positive = total === 0 ? 0 : Math.round((votes.good / total) * 100)

  return (
    <>
 <div className={styles.container}>
  <p className={styles.stat}>Good: <strong>{votes.good}</strong></p>
  <p className={styles.stat}>Neutral: <strong>{votes.neutral}</strong></p>
  <p className={styles.stat}>Bad: <strong>{votes.bad}</strong></p>
  <p className={styles.stat}>Total: <strong>{total}</strong></p>
  <p className={styles.stat}>Positive: <strong>{positive}%</strong></p>
</div>


    </>
  )
}

export default VoteStats