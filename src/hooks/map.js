const { kakao } = window;

class CreateMap {
    constructor(el, btns) {
        this.init(el, btns);
        this.bindingEvent();
    }

    init(el, btns) {
        this.section = document.querySelector(el);
        this.btns = document.querySelector(btns);
        this.mapContainer = this.section.querySelector('#map'); // 지도를 표시할 div  

        this.branchBtns = this.btns.querySelectorAll(".branchBtn");
        this.address = document.querySelector(".address");

        this.mapOption = { 
                center: new kakao.maps.LatLng(37.51264336059771, 127.05882782975769), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
        };
        
        
        this.map = new kakao.maps.Map(this.mapContainer, this.mapOption); // 지도를 생성합니다
        
        // 마커를 표시할 위치와 title 객체 배열입니다 
        this.markerOptions = [
            {
                title: 'Head Office', 
                area: 'SAMSUNG',
                address: '513 Yeongdong-daero<br> Samseong-dong<br> Gangnam-gu<br> Seoul',
                bus: '342, 146, 301',
                subway: 'Samsung Station <br> (Exit 6)',
                latlng: new kakao.maps.LatLng(37.51264336059771, 127.05882782975769),
                imageSrc: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                imageSize: new kakao.maps.Size(24, 35),
                imagePos: {offset: new kakao.maps.Point(12, 18)},
                button: this.branchBtns[0]
            },
            {
                title: 'Branch Office 1', 
                area: 'GANGNAM',
                address: '415 Teheran-ro <br>Samseong-dong<br> Gangnam-gu<br>Seoul',
                bus: '333, 146, 341',
                subway: 'Seolleung Station <br> (Exit 3)',
                latlng: new kakao.maps.LatLng(37.50570450054956, 127.05159540879252),
                imageSrc: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                imageSize: new kakao.maps.Size(24, 35),
                imagePos: {offset: new kakao.maps.Point(12, 18)},
                button: this.branchBtns[1]
            },
            {
                title: 'Branch Office 2', 
                area: 'JEJU',
                address: '10 Gwangyang 9(gu)-gil<br> Jeju-si<br> Jeju-do',
                bus: '212, 411, 112',
                subway: null,
                latlng: new kakao.maps.LatLng(33.4996857138773, 126.5311724228745),
                imageSrc: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                imageSize: new kakao.maps.Size(24, 35),
                imagePos: {offset: new kakao.maps.Point(12, 18)},
                button: this.branchBtns[2]
            }
        ];
        
        // 마커 이미지의 이미지 주소입니다
        this.imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        this.address = document.querySelector(".address");
        
        this.createAddress(this.markerOptions[0]);
    }

    bindingEvent() {
        //삼성 코엑스 : 37.51264336059771, 127.05882782975769
        //강남 : 37.50570450054956, 127.05159540879252
        //제주 시청 :  33.4996857138773, 126.5311724228745
        
        for (let i = 0; i < this.markerOptions.length; i ++) {
            
            // 마커 이미지의 이미지 크기 입니다
            const imageSize = new kakao.maps.Size(24, 35); 
            
            // 마커 이미지를 생성합니다    
            const markerImage = new kakao.maps.MarkerImage(this.imageSrc, imageSize); 
            
            // 마커를 생성합니다
            const marker = new kakao.maps.Marker({
                map: this.map, // 마커를 표시할 지도
                position: this.markerOptions[i].latlng, // 마커를 표시할 위치
                title : this.markerOptions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage // 마커 이미지 
            });
        
            this.markerOptions[i].button.addEventListener("click", e=> {
                e.preventDefault();
        
                for(let btn of this.branchBtns) {
                    btn.classList.remove("on");
                }
                e.currentTarget.classList.add("on");
        
                //moveTo(this.markerOptions[i].latlng);
                
                this.map.setCenter(this.markerOptions[i].latlng);
                this.createAddress(this.markerOptions[i]);
        
            });
        }
    }

    createAddress(target) {
        let html = `
            <div class="officeTitle">
                <h2>${target.title}</h2>
                <h3>${target.area}</h3>
            </div>
            <div class="addressDetail">
                <h4>${target.address}</h4>
                <p><span><i class="fas fa-bus"></i></span> ${target.bus}</p>
                ${(target.subway===null) ? "" : (`<p><span><i class="fas fa-subway"></i></span>${target.subway}</p>`)}
            </div>
        `;
    
        this.address.innerHTML = html;
    
    }
}

export default CreateMap;