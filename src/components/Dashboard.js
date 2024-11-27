import React from 'react'

const Dashboard = () => {
    const cardData = [
        {
          id: 1,
          title: "Total Users",
          amount: "2,883,986.00",
          percentage: "4.87%",
          timeFrame: "This month",
        },
        {
          id: 2,
          title: "Total Users",
          amount: "2,883,986.00",
          percentage: "4.87%",
          timeFrame: "This month",
        },
        {
          id: 3,
          title: "Total Users",
          amount: "2,883,986.00",
          percentage: "4.87%",
          timeFrame: "This month",
        },
        {
          id: 4,
          title: "Total Users",
          amount: "2,883,986.00",
          percentage: "4.87%",
          timeFrame: "This month",
        },
      ];
  return (
<>
<div className='grid grid-cols-2 gap-4 ml-44 mr-24'>
{cardData.map((card)=>{
    return(
    <div  className=" bg-gradient-to-br from-[#028391] to-[#01204E] text-white p-4 rounded-2xl shadow-lg w-full max-w-sm">
        <img src="bac.png" alt="" className='absolute ml-52 mt-28 z-0'/>
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-semibold">{card.title}</h2>
      <span className="bg-orange-500 text-sm py-1 px-3 rounded-full flex items-center justify-between gap-2">{card.timeFrame} <img src="arrow.png" alt="" /></span>
    </div>
    <div className='flex gap-5'><p className="text-3xl font-bold my-3">{card.amount}</p>
    <div className="flex items-center gap-2 text-green-400">
      <span className="text-sm  border border-green-400 rounded-full px-2">{card.percentage} ⬆</span>
      
    </div>
    </div>
    <div className="mt-4 flex justify-between p-4 items-start pt-2 h-44 bg-white bg-opacity-15 rounded-lg border border-white backdrop-blur-sm">
      <span>Users</span>
      <button className="text-sm">View all </button>
    </div>
    
  </div>)
})}
</div>
</>
  )
}

export default Dashboard
