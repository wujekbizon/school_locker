import Badge from "@/components/Badge";
import CustomButton from "@/components/CustomButton";
import Logo from "@/components/Logo";
import { ENGLISH_A1_DATA } from "@/data/englishA1";

export default function TestsPage() {
  return (
    <section className="flex min-h-[calc(100%_-_64px)] w-full flex-col justify-center p-6">
      <div className="grid auto-rows-max gap-4 md:gap-8 lg:col-span-3">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
          {/*Total Test*/}
          <div className="rounded-xl border border-border/40 bg-card p-4 text-card-foreground shadow transition-colors sm:col-span-2">
            <div className="flex flex-col gap-6 space-y-2.5">
              <h3 className="text-left text-sm tracking-tight text-muted-foreground">
                Total Tests Created
              </h3>
              <h2 className="text-center text-4xl font-semibold tracking-tight">
                35/90
              </h2>
              <p className="text-md w-full text-center leading-relaxed text-slate-400 sm:w-3/4 sm:self-center">
                This metric indicates the total number of tests you've created.
                Click the button for the full report.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-1/2">
                  View Chart
                </button>
              </div>
            </div>
          </div>
          {/*Week - Month*/}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border/40 bg-card p-4 text-card-foreground shadow transition-colors">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">This Week</p>
                <h3 className="py-2 text-center text-4xl font-semibold tracking-tight">
                  10 Tests
                </h3>
                <p className="text-center text-xs text-muted-foreground">
                  +5% from last week
                </p>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20">
                  <div className="h-full w-1/2 flex-1 bg-primary transition-all"></div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border/40 bg-card p-4 text-card-foreground shadow transition-colors ">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">This Month</p>
                <h3 className="py-2 text-center text-4xl font-semibold tracking-tight">
                  25 Tests
                </h3>
                <p className="text-center text-xs text-muted-foreground">
                  +15% from last month
                </p>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20">
                  <div className="h-full w-1/4 flex-1 bg-primary transition-all"></div>
                </div>
              </div>
            </div>
          </div>
          {/*Exp*/}
          <div className="rounded-xl border border-border/40 bg-zinc-950 p-4 text-card-foreground shadow">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Current level</p>
              </div>

              <div>
                <h3 className="text-center text-4xl font-semibold tracking-tight">
                  7 lv
                </h3>
                <p className="text-center text-xs text-muted-foreground">
                  (130 exp/450 exp)
                </p>
              </div>
              <div className="flex flex-col items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">
                    Exp needed to next lv:
                  </p>
                  <p className="text-md mr-12 text-muted-foreground">320</p>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20">
                  <div className="h-full w-1/3 flex-1 bg-primary transition-all"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Badges */}
          <div className="rounded-xl border border-border/40 bg-card p-4 text-card-foreground shadow ">
            <p className="text-sm text-muted-foreground">Badges</p>
            <div className="flex flex-wrap items-center  gap-2 pt-8">
              <Badge title="Tester" />
            </div>
          </div>
          {/*Experience Tree*/}
          <div className="rounded-xl border border-border/40 bg-card p-4 text-card-foreground shadow sm:col-span-2">
            <div className="flex flex-col items-center gap-4 space-y-1.5 pb-2">
              <h3 className="text-sm text-muted-foreground">Experience Tree</h3>
              <p className="text-balance text-center text-sm leading-relaxed">
                Track your Experience Tree, and check how your user growth
                progresses. This feature is still under development. Please
                check back later.
              </p>
              <button className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                View Experience Tree
              </button>
            </div>
          </div>
          <div className="rounded-xl border border-border/40 bg-zinc-950 p-4 text-card-foreground shadow">
            <div className="flex h-full flex-col justify-around gap-4">
              <button className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-amber-500/80 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ">
                Start Test
              </button>
              <button className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ">
                Create Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
