<template>
    <div class="fu">
        <div class="fu jx-box">
            <div class="jx-box-left">
                <div class="fu jx-box-column">
                    <div style="padding: 0px 5px 5px 10px;height: 200px">
                        <msg-center></msg-center>
                    </div>
                    <div class="jx-flex1" style="padding: 5px 5px 10px 10px">
                        <cmp-timetable></cmp-timetable>
                    </div>
                </div>
            </div>
            <div class="jx-box-right">
                <div class="fu jx-box-column">
                    <div style="padding: 0px 10px 5px 5px;height: 200px">
                        <cmp-fast></cmp-fast>
                    </div>
                    <div class="jx-flex1" style="padding: 5px 10px 10px 5px">
                        <cmp-d-t>

                        </cmp-d-t>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import MsgCenter from "../../../components/MsgCenter"
    import CmpFast from "../../../components/CmpFast"
    import CmpDT from "../../../components/CmpDT"
    import CmpTimetable from "../../../components/CmpTimetable"
    export default {
        components: {
            MsgCenter,
            CmpFast,
            CmpDT,
            CmpTimetable
        },
        name: "HomeIndex"
    }
</script>

<style scoped>
    .jx-box-left {
        flex: 3;
        overflow: hidden;
        min-width: 0;
    }

    .jx-box-right {
        flex: 2;
        overflow: hidden;
        min-width: 0;
    }
</style>