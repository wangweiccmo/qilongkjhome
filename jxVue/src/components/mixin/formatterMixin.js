export default {
    data() {
        return {}
    },
    methods: {
        isOrNotFormatter(row, column, cellValue, index) {
            if (cellValue == 1) {
                return '是'
            } else {
                return '否'
            }
        },
        optionFormatter(){

        },
        dateTimeFormat(cellValue){
            let res = cellValue;
            if(cellValue){
                let ls = cellValue.split('T');
                if(ls && ls.length == 2){
                    res = ls[0] +' '+ ls[1].split('.')[0]
                }
            }
            return res
        },
        dateformatter(row, column, cellValue, index) {
            let res = cellValue;
            if (cellValue) {
                let ls = cellValue.split('T');
                if (ls && ls.length == 2) {
                    res = ls[0]
                }
            }
            return res
        }
    }
}
