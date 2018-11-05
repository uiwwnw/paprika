import React, { Component } from 'react';
import styled from 'styled-components';
import config from '../../config';
import { positions } from '../../data/index.json';

export default class Maps extends Component {
    constructor(props) {
        super(props);
        this.Map = styled.div`
            display: ${window.daum === undefined?'none':'block'};
            height: ${this.props.height||'40vh'};
        `;
    }
    mapInit(a, b) {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        // var {latitude, longitude} = this.mapFind();
        let { latitude, longitude } = { latitude: a || 33.450701, longitude: b || 126.570667 };
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new daum.maps.LatLng(latitude, longitude), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        const map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 마커 이미지의 이미지 주소입니다
        const imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (let i = 0; i < positions.length; i++) {

            // 마커 이미지의 이미지 크기 입니다
            const imageSize = new daum.maps.Size(24, 35);

            // 마커 이미지를 생성합니다    
            const markerImage = new daum.maps.MarkerImage(imageSrc, imageSize);
            // 마커를 생성합니다
            const marker = new daum.maps.Marker({
                map: map, // 마커를 표시할 지도
                // position: new daum.maps.LatLng(positions[i].latlng), // 마커를 표시할 위치
                position: new daum.maps.LatLng(positions[i].latlng[0], positions[i].latlng[1]), // 마커를 표시할 위치
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage // 마커 이미지 
            });
        }
    }
    mapFind() {
        var _this = this;
        if (navigator.geolocation) { // GPS를 지원하면
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.mapInit(position.coords.latitude, position.coords.longitude);
            }, function (error) {
                console.error(error);
            }, {
                    enableHighAccuracy: false,
                    maximumAge: 0,
                    timeout: Infinity
                });
        } else {
            alert('GPS를 지원하지 않습니다');
        }
    }
    // componentWillMount() {
    //     const scriptjs = require('scriptjs');
    //     const _this = this;
    //     scriptjs('//dapi.kakao.com/v2/maps/sdk.js?appkey=' + config.daumapi, function(e) {
    //         _this.setState({
    //             daum: window.daum
    //         });
    //     });
    // //     // daumMap.setAttribute('type', 'text/javascript');
    // //     // daumMap.setAttribute('src', '//dapi.kakao.com/v2/maps/sdk.js?appkey=' + config.daumapi);
    // //     // document.getElementById('root').prepend(daumMap);
    // }
    componentDidMount() {
        if (window.daum !== undefined) {
            this.mapInit();
            // this.mapFind();
        }
    }

    render() {

        return (
            <this.Map id="map"></this.Map>
        )
    }
}