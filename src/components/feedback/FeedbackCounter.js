import { useState } from 'react';
import FeedbackButtons from './FeedbackButtons';
import FeedbackStatistic from './FeedbackStatistic';


export default function Counter () {
  const [countGood, setCountGood] = useState(0);
  const [countNeutral, setCountNeutral] = useState(0);
  const [countBad, setCountBad] = useState(0);
 const total = countGood + countNeutral + countBad;
  const percentageGoodFeedback = () => {
   const sum = countGood + countNeutral + countBad;
   const result = (100 * countGood) / sum;
  return result ? Math.floor(result) : null;
 };
  return (
    <div className="Counter">
    <FeedbackButtons onClickGood={()=> {
      setCountGood(state => state +1)}}
      onClickNeutral={()=> {
        setCountNeutral(state => state +1)}}
        onClickBad={()=> {
          setCountBad(state => state +1)}}/>
    <FeedbackStatistic
      good={countGood}
      neutral={countNeutral}
      bad={countBad}
      total={total}
      percentage={percentageGoodFeedback}
    />
  </div>

  )

}

