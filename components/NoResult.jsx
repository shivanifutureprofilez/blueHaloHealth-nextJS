export default function NoResultFound({title}) {
    return <div className="p-12 rounded-xl bg-[#F7F4F0] text-black text-lg text-center font-bold">{title || "No Result Found !!"}</div>
}