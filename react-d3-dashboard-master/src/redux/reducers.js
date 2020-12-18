import state from "./state"

const reducers = (preState=state, action) => {
    switch(action.type){
        case 'GET_NEWS':
            return {
                ...preState,
            }
        case 'MODIFY_NEWS':
            return {
                ...preState,
                news:action.news,
        }
        case 'MODIFY_CHINA_CASES':
            return {
                ...preState,
                china_cases:action.china_cases,
        }
        case 'MODIFY_TIME_LINE':
            return {
                ...preState,
                start:action.start,
                end:action.end,
        }
        case 'MODIFY_CHECK_TOPIC':
            return {
                ...preState,
                check_topic:action.check_topic,
        }
        case 'ADD':
            return {
                ...preState,
                data: preState.data+action.v
        }
        default:
            return {
                ...preState
            }
    }
}

export default reducers;