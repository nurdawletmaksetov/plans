import { Check } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPlan, removePlan, checkPlan } from '../../../slices/planSlice'
import DayCard from '../dayCard/DayCard'

const Content = () => {
    const plans = useSelector((state) => state.plans.plans);
    const [newPlan, setNewPlan] = useState("");
    const dispatch = useDispatch();
    const mondayPlans = plans.filter(p => p.day === "Monday");
    const tuesdayPlans = plans.filter(p => p.day === "Tuesday");
    const wednesdayPlans = plans.filter(p => p.day === "Wednesday");
    const thursdayPlans = plans.filter(p => p.day === "Thursday");
    const fridayPlans = plans.filter(p => p.day === "Friday");
    const saturdayPlans = plans.filter(p => p.day === "Saturday");

    const handleAddPlan = () => {
        if (newPlan) {
            dispatch(addPlan({ text: newPlan, day: "Monday" }));
            setNewPlan("");
        }
    }

    const handleRemovePlan = (id) => {
        dispatch(removePlan(id));
    }

    const handleCompletePlan = (id) => {
        dispatch(checkPlan(id));
    }

    return (
        <main className='bg-blue-dark min-h-screen py-4 text-white'>
            <div className='mx-auto my-0 max-w-[1600px] py-0 px-4'>
                <div className='flex flex-col gap-4'>
                    <p className='font-notch text-[22px] text-alabaster-grey'>Welcome to the Week Planner</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex md:flex-row flex-col gap-2 lg:gap-4'>
                            <DayCard
                                day="Monday"
                                plans={mondayPlans}
                                onAdd={(text) => dispatch(addPlan({ text, day: "Monday" }))}
                                onRemove={(id) => dispatch(handleRemovePlan(id))}
                                onCheck={(id) => dispatch(handleCompletePlan(id))}
                            />
                            <DayCard
                                day="Tuesday"
                                plans={tuesdayPlans}
                                onAdd={(text) => dispatch(addPlan({ text, day: "Tuesday" }))}
                                onRemove={(id) => dispatch(handleRemovePlan(id))}
                                onCheck={(id) => dispatch(handleCompletePlan(id))}
                            />
                            <DayCard
                                day="Wednesday"
                                plans={wednesdayPlans}
                                onAdd={(text) => dispatch(addPlan({ text, day: "Wednesday" }))}
                                onRemove={(id) => dispatch(handleRemovePlan(id))}
                                onCheck={(id) => dispatch(handleCompletePlan(id))}
                            />
                        </div>
                        <div className='flex md:flex-row flex-col gap-2 lg:gap-4'>
                            <DayCard
                                day="Thursday"
                                plans={thursdayPlans}
                                onAdd={(text) => dispatch(addPlan({ text, day: "Thursday" }))}
                                onRemove={(id) => dispatch(handleRemovePlan(id))}
                                onCheck={(id) => dispatch(handleCompletePlan(id))}
                            />
                            <DayCard
                                day="Friday"
                                plans={fridayPlans}
                                onAdd={(text) => dispatch(addPlan({ text, day: "Friday" }))}
                                onRemove={(id) => dispatch(handleRemovePlan(id))}
                                onCheck={(id) => dispatch(handleCompletePlan(id))}
                            />
                            <DayCard
                                day="Saturday"
                                plans={saturdayPlans}
                                onAdd={(text) => dispatch(addPlan({ text, day: "Saturday" }))}
                                onRemove={(id) => dispatch(handleRemovePlan(id))}
                                onCheck={(id) => dispatch(handleCompletePlan(id))}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Content