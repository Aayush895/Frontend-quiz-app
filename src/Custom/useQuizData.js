/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

export const useQuizData = (src) => {
  const [quizData, setquizData] = useState(null)

  const fetchQuizData = async (src) => {
    try {
      const data = await fetch(src)
      const jsonData = await data.json()

      setquizData(jsonData)
    } catch (error) {
      console.log(`Error in fetching the data: ${error}`)
    }
  }

  useEffect(() => {
    fetchQuizData(src)
  }, [])

  return quizData
}
