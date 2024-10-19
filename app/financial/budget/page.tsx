'use client'
import { useState } from 'react';

export default function Home() {
    const [weeklyIncome, setWeeklyIncome] = useState('');
    const [groceries, setGroceries] = useState('');
    const [entertainment, setEntertainment] = useState('');
    const [savings, setSavings] = useState('');
    const [other, setOther] = useState('');

    const totalBudget = Number(groceries) + Number(entertainment) + Number(savings) + Number(other);

    return (
        <div className="flex flex-col p-4">
            <h1 className="text-2xl font-bold mb-4">Your Budget</h1>
            
            <div className="mb-4">
                <label className="block mb-2" htmlFor="weekly-income">How much are you making a week?</label>
                <input
                    type="number"
                    id="weekly-income"
                    value={weeklyIncome}
                    onChange={(e) => setWeeklyIncome(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Enter your weekly income"
                />
            </div>

            <h2 className="text-xl font-semibold mb-2">Budget Categories</h2>

            <div className="mb-4">
                <label className="block mb-2" htmlFor="groceries">Groceries:</label>
                <input
                    type="number"
                    id="groceries"
                    value={groceries}
                    onChange={(e) => setGroceries(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Amount for groceries"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2" htmlFor="entertainment">Entertainment:</label>
                <input
                    type="number"
                    id="entertainment"
                    value={entertainment}
                    onChange={(e) => setEntertainment(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Amount for entertainment"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2" htmlFor="savings">Savings:</label>
                <input
                    type="number"
                    id="savings"
                    value={savings}
                    onChange={(e) => setSavings(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Amount for savings"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2" htmlFor="other">Other:</label>
                <input
                    type="number"
                    id="other"
                    value={other}
                    onChange={(e) => setOther(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Amount for other expenses"
                />
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Total Budget Allocation</h2>
                <p>Total Allocated: ${totalBudget}</p>
                <p>Weekly Income: ${weeklyIncome}</p>
                <p>Remaining: ${Number(weeklyIncome) - totalBudget}</p>
            </div>
        </div>
    );
}
