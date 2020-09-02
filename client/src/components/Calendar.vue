<template>
    <div class="flex-column flex-grow px-2">
        <div class="columns is-gapless is-border-bottom py-4">
            <div class="column has-text-centered py-4">
                <i class="fas fa-long-arrow-alt-left" @click="preMonth"></i>
                <span class="title has-text-weight-bold mx-4">
                    {{ state.formattedDayPointer }}
                </span>
                <i class="fas fa-long-arrow-alt-right" @click="nextMonth"></i>
            </div>
        </div>

        <div class="columns is-gapless mx-4 mb-1">
            <div
                class="column mx-2 has-text-weight-semibold"
                v-for="day in state.daysOfTheWeek"
                :key="day"
            >
                {{ day }}
            </div>
        </div>

        <div
            class="columns is-gapless full-height mx-4"
            v-for="row in state.pointedCalendar.rowCount"
            :key="row"
        >
            <div
                class="column is-border-top mx-2"
                v-for="col in 7"
                :key="col"
                :style="
                    colorOfDay(
                        state.pointedCalendar.result[row - 1][col - 1],
                        col
                    )
                "
            >
                {{ state.pointedCalendar.result[row - 1][col - 1] }}
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, computed } from "@vue/composition-api";

export default {
    //     handleMouseEnter: function(event) {
    //         const plus = event.target.querySelector(".date-box-plus");
    //         plus.style.opacity = "1";
    //     },
    //     handleMouseLeave: function(event) {
    //         const plus = event.target.querySelector(".date-box-plus");
    //         plus.style.opacity = "0";
    //     }
    // },
    setup() {
        const date = new Date();

        const state = reactive({
            daysOfTheWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            today: {
                year: date.getFullYear(),
                month: date.getMonth(),
                date: date.getDate()
            },
            dayPointer: date,
            formattedDayPointer: computed(() => {
                return state.dayPointer.getMonth() + 1 > 9
                    ? state.dayPointer.getFullYear() +
                          "." +
                          (state.dayPointer.getMonth() + 1)
                    : state.dayPointer.getFullYear() +
                          ".0" +
                          (state.dayPointer.getMonth() + 1);
            }),
            pointedCalendar: computed(() => {
                const firstDay = new Date(
                    state.dayPointer.getFullYear(),
                    state.dayPointer.getMonth(),
                    1
                );
                const lastDay = new Date(
                    state.dayPointer.getFullYear(),
                    state.dayPointer.getMonth() + 1,
                    0
                );

                const result = [
                    ["", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", ""]
                ];

                let row = 0,
                    col = 0;

                for (let i = 0; i < firstDay.getDay(); i++) {
                    col++;
                }
                for (let i = 1; i <= lastDay.getDate(); i++) {
                    result[row][col] = i;
                    col++;
                    if (col > 6) {
                        row++;
                        col = 0;
                    }
                }

                return { result, rowCount: row + 1 };
            })
        });

        const colorOfDay = (date, col) => {
            if (
                state.today.year === state.dayPointer.getFullYear() &&
                state.today.month === state.dayPointer.getMonth() &&
                state.today.date === date
            )
                return "color: springgreen";

            if (col === 1) return "color: tomato;";
            else if (col === 7) return "color: dodgerblue;";
        };

        const nextMonth = () => {
            state.dayPointer = new Date(
                state.dayPointer.getFullYear(),
                state.dayPointer.getMonth() + 1
            );
        };

        const preMonth = () => {
            state.dayPointer = new Date(
                state.dayPointer.getFullYear(),
                state.dayPointer.getMonth() - 1
            );
        };

        return {
            state,
            colorOfDay,
            nextMonth,
            preMonth
        };
    }
};
</script>

<style>
.is-border-bottom {
    border-bottom: 1px solid #ececec;
}

.is-border-top {
    border-top: 1px solid #ececec;
}
</style>
