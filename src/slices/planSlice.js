import { createSlice } from "@reduxjs/toolkit";

const savedPlans = JSON.parse(localStorage.getItem("plans"));

const initialState = {
    plans: savedPlans || [
        {
            id: 1,
            text: "Get Started",
            day: "Monday",
            completed: false,
        },
        {
            id: 2,
            text: "Get Started",
            day: "Tuesday",
            completed: false,
        },
        {
            id: 3,
            text: "Get Started",
            day: "Wednesday",
            completed: false,
        },
        {
            id: 4,
            text: "Get Started",
            day: "Thursday",
            completed: false,
        },
        {
            id: 5,
            text: "Get Started",
            day: "Friday",
            completed: false,
        },
        {
            id: 6,
            text: "Get Started",
            day: "Saturday",
            completed: false,
        }
    ]
}

const saveToLocalStorage = (state) => {
    localStorage.setItem("plans", JSON.stringify(state.plans));
};

const planSlice = createSlice({
    name: "plans",
    initialState,
    reducers: {
        addPlan: (state, action) => {
            const { text, day } = action.payload;

            const newPlan = {
                id: state.plans.length
                    ? state.plans[state.plans.length - 1].id + 1
                    : 1,
                text,
                day,
                completed: false,
            };

            state.plans.push(newPlan);
            saveToLocalStorage(state);
        },
        removePlan: (state, action) => {
            state.plans = state.plans.filter(
                (plan) => plan.id !== action.payload
            );
            saveToLocalStorage(state);
        },
        checkPlan: (state, action) => {
            const plan = state.plans.find(item => item.id === action.payload);
            if (plan) {
                plan.completed = !plan.completed;
                saveToLocalStorage(state);
            }
        }
    }
})

export const { addPlan, removePlan, checkPlan } = planSlice.actions;
export default planSlice.reducer;