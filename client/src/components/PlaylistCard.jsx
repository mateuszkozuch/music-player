

export default function PlaylistCard(property)
{
    return(
        <div className={`rounded-xl flex h-[4rem] w-max cursor-pointer ${property.title && property.creator && 'gap-3'}`}>
            <img src={property.image_source}
                className="rounded-xl h-[4rem]"
            />
            <div className="flex flex-col justify-center">
                <b className="text-white">{property.title}</b>
                <i className="text-gray-300">{property.creator}</i>
            </div>
        </div>
    )
}