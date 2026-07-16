import { motion } from "framer-motion";
import RevenueChart from "./RevenueChart";

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative mt-14 flex w-full justify-center lg:mt-0"
    >
      {/* Glow */}
      <div className="absolute -inset-10 rounded-full bg-blue-600/20 blur-[100px]" />

      {/* Floating Revenue */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute -left-2 top-6 z-20 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl shadow-2xl md:block lg:-left-10 lg:top-20"
      >
        <p className="text-xs text-gray-400">Revenue</p>

        <h3 className="text-xl font-bold text-green-400">
          +18%
        </h3>
      </motion.div>

      {/* Floating Users */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -right-2 bottom-6 z-20 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl shadow-2xl md:block lg:-right-10 lg:bottom-20"
      >
        <p className="text-xs text-gray-400">
          New Users
        </p>

        <h3 className="text-xl font-bold text-blue-400">
          +245
        </h3>
      </motion.div>

      {/* Dashboard */}

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="relative w-full max-w-[560px] rounded-3xl border border-white/10 bg-[#1d1d20] p-4 shadow-[0_30px_80px_rgba(59,130,246,0.15)] sm:p-6"
      >
        {/* Window Dots */}

        <div className="mb-6 flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        {/* Revenue */}

        <div className="rounded-2xl bg-[#2a2a2e] p-4 sm:p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-400">
                Monthly Revenue
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-4xl">
                $48,920
              </h2>

            </div>

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400 sm:text-sm">
              +18%
            </span>

          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-700">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "82%" }}
              transition={{ duration: 1.8 }}
              className="h-full rounded-full bg-blue-500"
            />

          </div>

          <div className="mt-5 flex items-center justify-between">

            <div className="flex -space-x-3">

              {["A", "S", "J", "M"].map((letter) => (

                <div
                  key={letter}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#1d1d20] bg-blue-600 text-xs font-bold sm:h-10 sm:w-10 sm:text-base"
                >
                  {letter}
                </div>

              ))}

            </div>

            <span className="text-xs text-gray-400 sm:text-sm">
              +28 Team
            </span>

          </div>

        </div>

        {/* KPI */}

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

          {[
            {
              title: "Active Users",
              value: "12.4K",
              color: "bg-green-400",
              percent: "72%",
              change: "▲18%",
            },
            {
              title: "Conversion",
              value: "68%",
              color: "bg-blue-500",
              percent: "68%",
              change: "▲9%",
            },
          ].map((card) => (

            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-[#2a2a2e] p-5"
            >

              <div className="flex justify-between">

                <p className="text-sm text-gray-400">
                  {card.title}
                </p>

                <span className="text-xs text-green-400">
                  {card.change}
                </span>

              </div>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                {card.value}
              </h3>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-700">

                <div
                  style={{ width: card.percent }}
                  className={`h-full rounded-full ${card.color}`}
                />

              </div>

            </div>

          ))}

        </div>

        {/* Chart */}

        <div className="mt-5 rounded-2xl bg-[#2a2a2e] p-4 sm:p-5">

          <div className="mb-5 flex items-center justify-between">

            <h3 className="font-semibold">
              Revenue Analytics
            </h3>

            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
              LIVE
            </span>

          </div>

          <RevenueChart />

        </div>

      </motion.div>

    </motion.div>
  );
}

export default DashboardMockup;