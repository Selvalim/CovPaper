
const actions = {
    modifyChinaCases: function(china_cases){
        return {
            type: 'MODIFY_CHINA_CASES',
            china_cases,
        }
    },
    modifyTimeLine: function(start,end){
        console.log(start+end)
        return {
            type: 'MODIFY_TIME_LINE',
            start,
            end
        }
    },
    modifyCheckTopic: function(check_topic){
        console.log(check_topic)
        return {
            type: 'MODIFY_CHECK_TOPIC',
            check_topic,
        }
    },
}

export default actions;