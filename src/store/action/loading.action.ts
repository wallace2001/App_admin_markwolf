/* eslint-disable prettier/prettier */
export const actionTypes = {
    CHANGE: 'CHANGE_LOADING'
}

export const changeLoading = (payload: any) => ({
    type: actionTypes.CHANGE,
    payload
})
