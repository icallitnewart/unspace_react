import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const useFetchFlickrData = (type)=> {
    const [ isLoaded, setIsLoaded ] = useState(null);
    const [ flickrData, setFlickrData ] = useState([]);
    const dispatch = useDispatch();
    const reduxData = useSelector(state=> state.flickrReducer.flickr);

    //console.log(reduxData);

    useEffect(()=> {
        callData(type);
    }, []);

    useEffect(()=> {
        setIsLoaded(true);
    }, [flickrData]);

    useEffect(()=> {
        reduxData.map((item)=> {
            if(item.type === type) {
                setIsLoaded(false);

                //리덕스에 저장된 데이터가 있지 않을 때에만 flickr API에서 데이터 호출
                if (item.data.length === 0) {
                    callData(type);
                } else {
                    setFlickrData(item.data);
                }
            }
        });
    }, [type]);

    useEffect(()=> {
        //flickr 데이터 상태 변화시 리덕스에 저장
        const newArr = [...reduxData];
        const repeatedIndex = reduxData.findIndex((item)=> item.type === type);
        newArr[repeatedIndex] = {type: type, data: flickrData};

        dispatch({ type: 'SET_FLICKR', payload: newArr });
    }, [flickrData]);


    //Flickr API를 통한 데이터 호출
    const callData = async (type)=> {
        const baseURL = "https://www.flickr.com/services/rest/?";
        const method = "flickr.galleries.getPhotos";
        const flickrKey = process.env.REACT_APP_FLICKR_API_KEY;
        const per_page = 10;
        const format = "json";
        let galleryId = "";
        
        switch (type) {
            case "popular" :
                galleryId = process.env.REACT_APP_FLICKR_GALLERY_ID1;
                break;
            case "modern" :
                galleryId = process.env.REACT_APP_FLICKR_GALLERY_ID2;
                break;
            case "contemporary" :
                galleryId = process.env.REACT_APP_FLICKR_GALLERY_ID3;
                break;
            case "minimalist" :
                galleryId = process.env.REACT_APP_FLICKR_GALLERY_ID4;
                break;
            case "mid-century" :
                galleryId = process.env.REACT_APP_FLICKR_GALLERY_ID5;
                break;
            default :
                galleryId = process.env.REACT_APP_FLICKR_GALLERY_ID1;
        }

        const url = `${baseURL}method=${method}&api_key=${flickrKey}&per_page=${per_page}&format=${format}&nojsoncallback=1&privacy_filter=1&gallery_id=${galleryId}`;
        
        const response = await axios
        .get(url)
        .catch((error)=> console.error(error));

        const items = response.data.photos.photo;
        setFlickrData(items);
    };

    //console.log(flickrData);
    return [ flickrData, isLoaded ];
}


export { useFetchFlickrData };