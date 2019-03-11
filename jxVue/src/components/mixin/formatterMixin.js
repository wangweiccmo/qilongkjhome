

export default {
    data() {
        return {

        }
    },
    methods: {
        dateformatter(row, column, cellValue, index) {
            let res = cellValue;
            if(cellValue){
                let ls = cellValue.split('T');
                if(ls && ls.length == 2){
                    res = ls[0]
                }
            }
            return res
        }
    }
}
