
const actions = {
    modifyChinaCases: function(china_cases){
        return {
            type: 'MODIFY_CHINA_CASES',
            china_cases,
        }
    },
    modifyTimeLine: function(start,end){
        return {
            type: 'MODIFY_TIME_LINE',
            start,
            end
        }
    },
    modifyCheckTopic: function(check_topic){
        return {
            type: 'MODIFY_CHECK_TOPIC',
            check_topic,
        }
    },
    modifyCheckNew: function(check_new){
        return {
            type: 'MODIFY_CHECK_NEW',
            check_new,
        }
    },
    modifyCheckAuthor: function(check_author){
        return {
            type: 'MODIFY_CHECK_AUTHOR',
            check_author,
        }
    },
    modifyCheckPaper: function(check_paper){
        return {
            type: 'MODIFY_CHECK_PAPER',
            check_paper,
        }
    },
}

export default actions;