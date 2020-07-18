<template>
    <div class="calendar flex-column flex-grow">
        <div class="calendar-controler flex-row">
            <button @click="preMonth">&#8592;</button>
            <span class="current-month">{{ currentMonth }}</span>
            <button @click="nextMonth">&#8594;</button>
        </div>
        <div
            class="week-box flex-row full-height"
            v-for="i in 6"
            :key="i"
            v-show="i !== 6 || expend"
        >
            <div
                class="date-box full-height full-width"
                v-for="j in 7"
                :key="j"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
            >
                <div class="flex-row date-box-header">
                    <div
                        class="date-box-num"
                        :style="color(j, calendar[i - 1][j - 1])"
                    >
                        {{
                            calendar[i - 1][j - 1] !== 0
                                ? calendar[i - 1][j - 1]
                                : ""
                        }}
                    </div>
                    <div
                        class="date-box-plus"
                        style="opacity: 0; transition: opacity 0.3s;"
                    >
                        {{ calendar[i - 1][j - 1] !== 0 ? "+" : "" }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const date = new Date();

export default {
    data: () => ({
        today: date,
        current: new Date(date.getFullYear(), date.getMonth()),
        expend: false
    }),
    methods: {
        color: function(col, day) {
            if (
                this.today.getFullYear() === this.current.getFullYear() &&
                this.today.getMonth() === this.current.getMonth() &&
                this.today.getDate() === day
            )
                return "color: springgreen";

            if (col === 1) return "color: tomato;";
            else if (col === 7) return "color: dodgerblue;";
        },
        nextMonth: function() {
            this.current = new Date(
                this.current.getFullYear(),
                this.current.getMonth() + 1
            );
        },
        preMonth: function() {
            this.current = new Date(
                this.current.getFullYear(),
                this.current.getMonth() - 1
            );
        },
        handleMouseEnter: function(event) {
            const plus = event.target.querySelector(".date-box-plus");
            plus.style.opacity = "1";
        },
        handleMouseLeave: function(event) {
            const plus = event.target.querySelector(".date-box-plus");
            plus.style.opacity = "0";
        }
    },
    computed: {
        calendar: function() {
            const firstDay = new Date(
                this.current.getFullYear(),
                this.current.getMonth(),
                1
            );
            const lastDay = new Date(
                this.current.getFullYear(),
                this.current.getMonth() + 1,
                0
            );
            const result = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
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
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            if (row > 4) this.expend = true;
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            else this.expend = false;

            return result;
        },
        currentMonth: function() {
            return this.current.getMonth() + 1 > 9
                ? this.current.getFullYear() +
                      "." +
                      (this.current.getMonth() + 1)
                : this.current.getFullYear() +
                      ".0" +
                      (this.current.getMonth() + 1);
        }
    }
};
</script>

<style>
.calendar {
    padding: 10px;
}
.calendar-controler {
    margin-bottom: 20px;
    justify-content: center;
}
.calendar-controler span {
    font-size: 2rem;
    font-weight: bold;
    margin: 0 15px;
}
.date-box {
    margin: 5px;
    border-top: 1px solid #ececec;
}
.date-box-header {
    margin-top: 5px;
    font-size: 1rem;
    justify-content: space-between;
}
</style>
