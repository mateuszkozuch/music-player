import Library from "./components/Library";
import Searchbar from "./components/Searchbar";

export default function App()
{
  return (
    <>
      <div className="h-[8vh] p-2 pb-0">
        <Searchbar />
      </div>
      <div className="h-[84vh] p-2">
        <aside className="w-fit h-full overflow-auto">
          <Library />
        </aside>
        <main>

        </main>
      </div>
    </>
  )
}