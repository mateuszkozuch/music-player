import Library from "./components/Library";
import Playbar from "./components/Playbar";
import Searchbar from "./components/Searchbar";

export default function App()
{
  return (
    <>
      <Searchbar />
      <div className="h-[84vh] p-2 flex gap-2 pt-0 pb-0">
        <aside className="h-full">
          <Library />
        </aside>
        <main className="w-full">
          <div className="bg-gray-800 rounded-xl h-full">
            <h1 className="text-white">Main Page</h1>
          </div>
        </main>
      </div>
      <Playbar />
    </>
  )
}