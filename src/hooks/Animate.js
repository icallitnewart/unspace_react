class Animate {
    constructor(selector, option) {
        this.init(selector, option);
    }

    init(selector, option) {
        this.selector = selector;
        //전개 연산자로 디폴트 객체를 합쳐서 새로운 객체를 반환
        this.option = {duration: 5000, ...option};
        this.startTime = performance.now();
        this.currentValue = null;   //null 안 담으면 리액트에서 오류남
        this.isString = typeof option.value;
        this.animate();
    }

    animate() {

        if(this.option.prop==="scroll") {
            this.currentValue = this.selector.scrollY || this.selector.pageYOffset;
        } else {
            this.currentValue = parseFloat(getComputedStyle(this.selector)[this.option.prop]);
        }

        if(this.option.value===this.currentValue) return;


        if(this.isString==="string") { 

            const parentHeight = parseInt(getComputedStyle(this.selector.parentElement).height);
            const parentWidth = parseInt(getComputedStyle(this.selector.parentElement).width);
            const x = ['margin-left', 'margin-right', 'left', 'right', 'width'];
            const y = ['margin-top', 'margin-bottom', 'top', 'bottom', 'height'];

            for(let prop of x) {
                if(this.option.prop === prop) this.currentValue = this.currentValue / parentWidth * 100;
            }

            for(let prop of y) {
                if(this.option.prop === prop) this.currentValue = this.currentValue / parentHeight * 100;
            }

            this.option.value = parseFloat(this.option.value);
        }

        //if(!option.duration) option.duration = 500;

        //프로토타입 메서드에 인수를 전달할 때에는 익명함수로 감싸고 전달
        requestAnimationFrame(time => this.run(time));
    }
    
    run(time) {
        let timeLast = time - this.startTime;
        let progress = timeLast  / this.option.duration;
    
        //오차범위 보정
        if(progress < 0) progress = 0;
        if(progress > 1) progress = 1;
    
        if(progress < 1) {
            requestAnimationFrame(time => this.run(time));
        } else {    //기존 모션이 끝났을 때
            if(this.option.callback) this.option.callback();
        }
    
        //plus : 현재value + ((타겟value - 현재value)*progress)
        //minus : 현재value - ((현재value - 타겟value)*progress)
        let result = this.currentValue + ((this.option.value - this.currentValue)*progress);

        //만약 isString값이 문자라면 뒤에 퍼센트 적용
        //만약 scroll이라면 실수 적용
        //만약 isString값이 문자가 아니라면 픽셀 적용
        //만약 opacity라면 실수 적용
        if(this.isString==="string") {
            this.selector.style[this.option.prop] = `${result}%`;
        } else if(this.option.prop==="opacity") {
            this.selector.style[this.option.prop] = result; 
        } else if(this.option.prop==="scroll") {
            this.selector.scroll(0, result);
        } else {
            this.selector.style[this.option.prop] = `${result}px`;
        }
    }

}

export default Animate;


/*
window.scrollY : 현재 브라우저에 y축 스크롤 거리값 반환
window.scroll(가로축, 세로축); 
*/
