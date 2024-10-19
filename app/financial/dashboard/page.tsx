import InfoCard from "@/components/info-card";
import Graph from "@/components/graph";
export default function Home() {
    return (
        <div className="flex flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="flex place-content-between">
                    <h1 className="text-2xl font-bold">Kevin's Dashboard</h1>
                    <button className="bg-white text-black rounded-md px-2 font-bold">Upload File</button>
                </div>
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <InfoCard
                        title="Total Income"
                        amount={3000.45}
                        footer="+21% from last month"
                    />
                    <InfoCard
                        title="Total Expenses"
                        amount={12304.1}
                        footer="-31% from last month"
                    />
                    <InfoCard
                        title="Total Savings"
                        amount={2304.}
                        footer="+51% from last month"
                    />
                    <InfoCard
                        title="Total Investments"
                        amount={13}
                        footer="-1% from last month"
                    />
                </div>
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                    <Graph />
                    <Graph />
                </div>
            </main>
        </div>
    );
}
