import { Check } from 'lucide-react'
import { useState } from 'react'

const DayCard = ({ plans, onAdd, onRemove, onCheck, text, day }) => {
    const [newPlan, setNewPlan] = useState("");
    return (
        <>
            <div className='w-full md:w-[500px] h-[400px] rounded-[10px] bg-dusk-blue'>
                <div className='flex justify-center items-center w-full h-[54px] bg-prussian-blue rounded-t-[10px]'>
                    <p className='text-[22px] text-alabaster-grey'>{day}</p>
                </div>
                <div className='flex flex-col gap-3 p-3 justify-between h-[346px]'>
                    {plans.length === 0 ? (
                        <p className='text-alabaster-grey text-[18px]'>You Have No Plans</p>
                    ) : (
                        <div className="overflow-y-auto h-[290px] pr-2 no-scrollbar">
                            {plans.map((plan) => (
                                <div key={plan.id} className='flex items-center justify-between border-b border-lavender-grey'>
                                    <p className={`text-alabaster-grey text-[20px] ${plan.completed ? 'line-through opacity-60' : ''}`}>
                                        {plan.text}
                                    </p>
                                    <div className='flex items-center gap-2'>
                                        <button
                                            onClick={() => onRemove(plan.id)}
                                            className='w-[60px] h-5 bg-delete rounded-[10px] text-[12px] flex items-center justify-center'
                                        >
                                            Delete
                                        </button>
                                        <button onClick={() => onCheck(plan.id)} className={`w-5 h-5 ${plan.completed ? 'bg-green-600' : 'bg-lavender-grey'} rounded-[10px] flex items-center justify-center`}>
                                            <Check size={12} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className='w-full h-8 bg-alabaster-grey flex items-center rounded-[10px]'>
                        <input
                            onChange={(e) => setNewPlan(e.target.value)}
                            value={newPlan}
                            placeholder='Add a plan...'
                            className='w-[82%] h-full outline-none p-2 text-[15px] text-prussian-blue'
                            type="text"
                        />
                        <button onClick={() => {
                            if (!newPlan.trim()) return;
                            onAdd(newPlan, text);
                            setNewPlan("");
                        }}
                            className='h-full bg-lavender-grey rounded-r-[10px] w-[18%] flex items-center justify-center'
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DayCard