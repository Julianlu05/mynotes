import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const NotePageView = () => {
  const {id} = useParams()
  const [note, setNote] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getNote()
  },[id])

  const getNote = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("http://127.0.0.1:8000/api/notes/" + id)
      const data = await response.json()
      setNote(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  console.log(id)

  return (
    <div>
      {isLoading ?
      <p>Is loading...</p> :
      <p>{note?.body}</p>
      }
    </div>
  )
}

export default NotePageView