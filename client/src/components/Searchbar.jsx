

export default function Searchbar()
{
    return(
        <div className="h-[6vh] flex justify-center items-center bg-black">
            <input  placeholder="Search..."
                    className="h-[2rem] text-white bg-gray-500 rounded-full text-center w-1/3 font-bold"
            />
        </div>
    )
}