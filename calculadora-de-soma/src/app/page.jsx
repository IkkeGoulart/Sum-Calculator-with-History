'use client'
import React, { useState } from 'react';
import Record from '@/components/Record';

export default function Home() {

  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [result, setResult] = useState('')

  const [recordList, setRecordList] = useState([])

  const handleClickButton = () => {
    let res = parseFloat(firstValue) + parseFloat(secondValue)
    setResult(res)

    let record = {
      firstValue: firstValue,
      secondValue: secondValue,
      result: res
    }

    setRecordList([...recordList, record])
  }

  return (
    <div id='main'>
      <div>
        <input type="number" value={firstValue} onChange={e => { setFirstValue(e.target.value); setResult('') }} />
        <span>+</span>
        <input type="number" value={secondValue} onChange={e => { setSecondValue(e.target.value); setResult('') }} />
        <span>=</span>
        <input type="number" value={result} readOnly="readonly" />
      </div>

      <button onClick={handleClickButton}>Calcular</button>

      <Record recordList={recordList}></Record>
    </div>
  );
}
