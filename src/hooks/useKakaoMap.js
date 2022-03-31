import { useEffect, useState } from "react";

const useKakaoMap = (mapContainer, btns)=> {
    const { kakao } = window;
    //버튼 클릭시 지점 활성화하는 함수 저장
    const [ changeMap, setChangeMap ] = useState(null);
    //활성화된 지점의 index값 저장
    const [ activeIndex, setActiveIndex ] = useState(0);
    //각 지점 정보 저장
    const [ options, setOptions ] = useState({});

    useEffect(()=> {
        const branchBtns = btns.current.children;
        const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        //지도 생성
        const mapOption = {
            center: new kakao.maps.LatLng(37.51264336059771, 127.05882782975769),
            level: 3 
        };
        const map = new kakao.maps.Map(mapContainer.current, mapOption);

        //마커 옵션 (지점 정보) 설정
        const markerOptions = [
            {
                title: 'Head Office', 
                area: 'SAMSUNG',
                address: ['513 Yeongdong-daero', 'Samseong-dong', 'Gangnam-gu', 'Seoul'],
                bus: '342, 146, 301',
                subway: ['Samsung Station', '(Exit 6)'],
                latlng: new kakao.maps.LatLng(37.51264336059771, 127.05882782975769),
                imageSrc: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                imageSize: new kakao.maps.Size(24, 35),
                imagePos: {offset: new kakao.maps.Point(12, 18)},
                button: branchBtns[0]
            },
            {
                title: 'Branch Office 1', 
                area: 'GANGNAM', 
                address: ['415 Teheran-ro', 'Samseong-dong', 'Gangnam-gu', 'Seoul'],
                bus: '333, 146, 341',
                subway: ['Seolleung Station', '(Exit 3)'],
                latlng: new kakao.maps.LatLng(37.50570450054956, 127.05159540879252),
                imageSrc: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                imageSize: new kakao.maps.Size(24, 35),
                imagePos: {offset: new kakao.maps.Point(12, 18)},
                button: branchBtns[1]
            },
            {
                title: 'Branch Office 2', 
                area: 'JEJU',
                address: ['10 Gwangyang 9(gu)-gil'
                , 'Jeju-si', 'Jeju-do'],
                bus: '212, 411, 112',
                subway: null,
                latlng: new kakao.maps.LatLng(33.4996857138773, 126.5311724228745),
                imageSrc: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                imageSize: new kakao.maps.Size(24, 35),
                imagePos: {offset: new kakao.maps.Point(12, 18)},
                button: branchBtns[2]
            }
        ];
        setOptions(markerOptions);


        for (let i = 0; i < markerOptions.length; i ++) {
            //마커 생성
            const imageSize = new kakao.maps.Size(24, 35);   
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
            const marker = new kakao.maps.Marker({
                map: map,
                position: markerOptions[i].latlng, 
                title : markerOptions[i].title, 
                image : markerImage 
            });

            //클릭한 지점 활성화 함수
            const activateBranch = (index)=> {
                setActiveIndex(index);
                map.setCenter(markerOptions[index].latlng);
            };
            setChangeMap(()=> activateBranch);
        }

        //화면 리사이즈시 지도 중심점 잡기
        const setCenter = ()=> map.setCenter(markerOptions[activeIndex].latlng);
        window.addEventListener("resize", setCenter);
        return ()=> window.removeEventListener("resize", setCenter);
    }, []);

    return [ changeMap, options, activeIndex ];
}

export { useKakaoMap };