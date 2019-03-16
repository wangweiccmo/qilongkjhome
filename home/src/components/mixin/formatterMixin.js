

export default {
    data() {
        return {

        }
    },
    methods: {
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
        dateFormat(cellValue){
            let res = cellValue;
            if(cellValue){
                let ls = cellValue.split('T');
                if(ls && ls.length == 2){
                    res = ls[0]
                }
            }
            return res
        },
        dateformatter(row, column, cellValue, index) {
            let res = this.dateFormat(cellValue);
            return res
        }
    }
}
