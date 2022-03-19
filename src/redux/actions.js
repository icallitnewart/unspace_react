export const setFlickrData = data => {
    return {
        type: 'SET_FLICKR',
        payload: data
    }
}

export const setNoticeData = data => {
    return {
        type: 'SET_NOTICE',
        payload: data
    }
}