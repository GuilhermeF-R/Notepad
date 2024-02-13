export function NoteCard() {
    return (
        <button className="rounded-md text-left bg-slate-800 p-5 overflow-hidden space-y-3 relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-600 outline-none">

            <span 
            className=" text-sm font-medium text-slate-300 ">
            há 2 dias
            </span>

            <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi totam, cumque optio asperiores aperiam accusantium vel ipsum non. Accusamus blanditiis natus facere accusantium excepturi cum minima soluta ipsam voluptate?
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" ></div>

        </button>
    )
}