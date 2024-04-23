import Badge from "@/components/Badge";
import { ENGLISH_A1_DATA } from "@/data/englishA1";

export default function TestsPage() {
  return (
    <section className="flex w-full flex-col p-4">
      <div className="grid auto-rows-max items-start gap-4 pt-8 md:gap-8 lg:col-span-3">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
          {/*Total Test*/}
          <div className="rounded-xl border border-border/40 bg-card p-4 text-card-foreground shadow hover:bg-amber-500/40  sm:col-span-2">
            <div className="flex flex-col gap-6 space-y-1.5">
              <h3 className="text-left text-sm tracking-tight text-muted-foreground">
                Total Tests Created
              </h3>
              <h2 className="py-3 text-center text-4xl font-semibold tracking-tight">
                35/450
              </h2>
              <p className="text-md w-full text-center leading-relaxed text-slate-400 sm:w-3/4 sm:self-center">
                This metric indicates the total number of tests you've created.
                Click the button for the full report.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-1/2">
                  View Full Report
                </button>
              </div>
            </div>
          </div>
          {/*Week - Month*/}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-border/40 bg-card p-4 text-card-foreground shadow hover:bg-slate-500/40">
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
            <div className="rounded-xl border border-border/40 bg-card p-4 text-card-foreground shadow hover:bg-slate-500/40">
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
          {/* Badges */}
          <div className="rounded-xl border border-border/40 bg-card p-4 text-card-foreground shadow">
            <p className="text-sm text-muted-foreground">Badges</p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
              <Badge title="Tester" />
              <Badge title="Boss" />
              <Badge title="Smarty" />
              <Badge title="Hero" />
              <Badge title="Lv Up" />
              <Badge title="Player" />
            </div>
          </div>
          <div className="rounded-xl border border-border/40 bg-zinc-950 text-card-foreground shadow">
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <p className="text-sm text-muted-foreground">This Month</p>
              <h3 className="text-4xl font-semibold tracking-tight">25</h3>
            </div>
            <div className="p-6 pt-0">
              <div className="text-xs text-muted-foreground">
                +25% from last month
              </div>
            </div>
            <div className="flex items-center p-6 pt-0">
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20">
                <div className="h-full w-1/4 flex-1 bg-primary transition-all"></div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border/40 bg-card text-card-foreground shadow sm:col-span-2">
            <div className="flex flex-col gap-2 space-y-1.5 p-6 pb-3">
              <h3 className="font-semibold leading-none tracking-tight">
                Total Tests Created
              </h3>
              <p className="max-w-lg text-balance text-sm leading-relaxed">
                This metric indicates the total number of tests you've created.
                Click the button for the full report.
              </p>
            </div>
            <div className="flex items-center p-6 pt-0">
              <button className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                View Full Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button>Start Test</button>
        <button>Create Test</button>
      </div>
    </section>
  );
}
