import React, { Component } from 'react';
import styled from 'styled-components';

export default class Maps extends Component {
    constructor(props) {
        super(props);
    }
    mapInit(a, b) {
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        // var {latitude, longitude} = this.mapFind();
        var { latitude, longitude } = { latitude: a || 33.450701, longitude: b||126.570667 };
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new daum.maps.LatLng(latitude, longitude), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        var map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
        
        var positions = [
            {
                title: '카카오', 
                latlng: new daum.maps.LatLng(33.450705, 126.570677)
            },
            {
                title: '생태연못', 
                latlng: new daum.maps.LatLng(33.450936, 126.569477)
            },
            {
                title: '텃밭', 
                latlng: new daum.maps.LatLng(33.450879, 126.569940)
            },
            {
                title: '근린공원',
                latlng: new daum.maps.LatLng(33.451393, 126.570738)
            }
        ];
        
        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
            
        for (var i = 0; i < positions.length; i ++) {
            
            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new daum.maps.Size(24, 35); 
            
            // 마커 이미지를 생성합니다    
            var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize); 
            
            // 마커를 생성합니다
            var marker = new daum.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage // 마커 이미지 
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
    componentDidMount() {
        // this.mapInit();
        this.mapFind();
    }

    render() {
        const Map = styled.div`
            height: 40vh;
            margin: 1rem;
        `;

        return (
            <Map id="map"></Map>
        )
    }
}