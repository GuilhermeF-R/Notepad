import logo from './assets/Logo.svg'
import { NewNote } from './components/new-note'
import { NoteCard } from './components/note-card'

export function App() {
  return  ( 
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="Nlw-expert" />

      <form className="w-full">
        <input 
          type="text" 
          placeholder='Busque em suas notas...'
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"

        />
      </form>
      <div className="h-px bg-slate-700"/>

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6 ">
        <NewNote/>
        <NoteCard/>

      </div>
    </div>
  )
}