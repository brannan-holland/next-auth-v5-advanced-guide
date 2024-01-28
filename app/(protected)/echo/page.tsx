
const ParksOverview = () => {
    return (
        <div className=" px-5 w-screen h-screen">
            
           
        {/* NOTE: comment in this code when you get to this point in the course */}
  
        <ParkAttendance title="Typhoon Houston" value="100" />
        <ParkAttendance title="Typhoon Austin" value="100" />
        <ParkAttendance title="Cowabunga Bay" value="100" />
        <ParkAttendance title="Cowabunga Canyon" value="100" />
        <ParkAttendance title="Shipwreck Island" value="100" />
     
      
        
      
        </div>
    );
}

export default ParksOverview;




 function ParkAttendance({
    title,
    value,
}: {
    title: string | null;
    value: number | string | null;
}) {
    return (
    <div className="rounded-xl bg-gray-50 p-1 shadow-sm m-1">
        <div className="flex p-2">
            <h3 className="ml-2 text-sm font-medium">{title}</h3>
        </div>
        <p className="truncated rounded-xl bg-white px-4 py-4 text-center text-2xl">
            {value}
        </p>
    </div>
    )
}




















