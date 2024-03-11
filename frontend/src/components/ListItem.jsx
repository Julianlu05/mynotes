/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

let getTime = (note) => {
  return new Date(note.updated).toLocaleDateString()
}

let getTitle = (note) => {
  let title = note.body.split('\n')[0]
  if(title.length > 45){
    return title.slice(0,45)
  }
  return title
}

let getContent = (note) => {
  let title = getTitle(note)
  let content = note.body.replace('\n', ' ')
  content = content.replaceAll(title,'')

  if(content.length > 45) return content.slice(0,45) + '...'
  else return content
}

const ListItem = ({note}) => {
  return (
    <Link to={`/note/${note.id}`} >
      <div className="border-b-2 border-border mb-3 py-2 px-4 transition-colors hover:bg-bg">

      <h3 className="font-bold">{getTitle(note)}</h3>
      <p><span>{getTime(note)}</span>{getContent(note)}</p>
      </div>
    </Link>
  )
}

export default ListItem