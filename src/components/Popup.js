import React, { Component } from 'react';
import styled from 'styled-components';
const makeClassName = (n) => {
    return btoa(Math.random()).substring(0, n);
};
const makeNew = function (a) {
    const popupOn = makeClassName(7);
    const popupOff = makeClassName(7);
    const hasScroll = makeClassName(7);
    const hasHeader = makeClassName(7);
    const hasFooter = makeClassName(7);
    const positiveBtn = makeClassName(7);
    const negativeBtn = makeClassName(7);
    const normalBtn = makeClassName(7);

    const Contents = styled.div`
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        max-width: 100%;
        // width: ${(props) => props.popupWidth};
        // height: ${(props) => props.popupHeight};
        max-height: 100%;
        padding: ${(props) => props.popupInnerPadding + 'px'};
        box-sizing: border-box;

        // @if ($min-width !=auto) {
        //   min-width: $min-width;
        // }
        // @if ($max-width !=auto) {
        //   max-width: $max-width;
        // }
        // height: $height;
        // @if ($min-height !=auto) {
        //   min-height: $min-height;
        // }
        // @if ($max-height !=auto) {
        //   max-height: $max-height;
        // }
        // @if ($contentsBottomPadding !=0) {
        //   &:after {
        //     display: block;
        //     padding-bottom: $contentsBottomPadding;
        //     content: "";
        //   }
        // }
    `;
    const Header = styled.div`
        position: absolute;
        top: -${(props) => props.headerHeight - props.popupBorderThick + 'px'};
        width: 100%;
        height: ${(props) => props.headerHeight + 'px'};
        border-bottom: ${(props) => props.popupBorderThick + 'px'} solid ${(props) => props.popupDivideBorderColor};
        background: #fff;

        h2 {
            margin: 0;
            padding: 0 ${(props) => props.headerHeight + 'px'} 0 ${(props) => props.popupInnerPadding + 'px'};
            font-size: 16px;
            font-weight: 500;
            line-height: ${(props) => props.headerHeight + 'px'};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        button {
            position: absolute;
            right: 0;
            top: 0;
            width: ${(props) => props.headerHeight + 'px'};
            height: ${(props) => props.headerHeight + 'px'};
            margin: 0;
            text-indent: -9999px;
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5MDI3OTk0Yi0yYjI1LTJlNGMtYTQ4YS1iYzA2NDRkMGIzMzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzM1QTQyNDQ4NjUzMTFFOEI5NjNFOUIwNEYxNTk1NTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzM1QTQyNDM4NjUzMTFFOEI5NjNFOUIwNEYxNTk1NTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTY5MUEwNTc4MzRDMTFFOEJCQkVFNDlFQTgyRDk0RkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTY5MUEwNTg4MzRDMTFFOEJCQkVFNDlFQTgyRDk0RkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6WSLqQAAABB0lEQVR42pySaaqFMAyFmzrgNgWnDSnOrlNE8zhCoLe1vdfXP9WkOfky0DAMTESqLEtS/ziIx03MrKZpYtxVVb0Sm+f5jgOEhgEfMMDxhkRE8K/FUdc1neepxnHkX0gEQGw3iXlQpv3I9iNh0zQffm0/lDKXZXHIQHtdlyPySGQGwYeSpSdRFKmiKB5JvUISrLVWoMCKhKaqQ00FDRL9shpBIWl8lmWqbdvgNL2l2Uu6bRvv+/7YaC9R3/f3dMxy8jwn9Mm3Zw6RLJtvOvDbSRwiTAmPfCKSAGTSP0cImb6N2Fza4zjUuq78URp6EsdxkOTpdF3HSZLcwoSxpmn6WsQUQ/yfAAMAl6XEeJIUMXAAAAAASUVORK5CYII=") no-repeat center;

            &[aria-hidden="true"] {
                display: none;
            }

            &:active {
                background-color: color-shade(#fff);
            }
        }
    `;
    const Footer = styled.div`
        position: absolute;
        top: 100%;
        display: flex;
        width: 100%;
        height: ${(props) => props.footerHeight + 'px'};
        margin-top: -${(props) => props.popupBorderThick * 2 + 'px'};
        align-items: center;
        text-align: center;
        font-size: 0;
        border-top: ${(props) => props.popupBorderThick + 'px'} solid ${(props) => props.popupDivideBorderColor};
        background: #fff;
        
        &:before ,
        &:after {
            flex-basis: ${(props) => props.popupInnerPadding + 'px'};
            content: "";
        }

        > * {
            flex: 1;

             & + * {
                padding-left: 5px;
            }
        }

        .${normalBtn} {
            > a,
            > button  {
                color: #000;
                background: #eee;
                &:active {
                    background: #333;
                }
            }
        }
        .${negativeBtn} {
            > a,
            > button  {
                color: #fff;
                background: #323232;
                &:active {
                    background: #000;
                }
            }
        }
        .${positiveBtn} {
            > a,
            > button  {
                color: #000;
                border: 1px solid #000;
                &:active {
                    background: #efefef;
                }
            }
        }

        a,
        button {
            display: block;
            width: 100%;
            height: ${(props) => props.footerHeight - 20 + 'px'};
            margin: 0;
            padding: 0 4px;
            box-sizing: border-box;
            white-space: nowrap;
            text-decoration: none;
            font-size: 16px;
            line-height: ${(props) => props.footerHeight - 20 + 'px'};
            border: 0;
            border-radius: 2px;
            background: 0;
        }
    `;
    const Dim = styled.i`
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZERDY1MjUzODY1MzExRThCRDY3RjRDQkUyNjVEMzc3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZERDY1MjU0ODY1MzExRThCRDY3RjRDQkUyNjVEMzc3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkRENjUyNTE4NjUzMTFFOEJENjdGNENCRTI2NUQzNzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkRENjUyNTI4NjUzMTFFOEJENjdGNENCRTI2NUQzNzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5OnGDiAAAAD0lEQVR42mJgYGDwBQgwAABSAE5RZV5PAAAAAElFTkSuQmCC");
    `;

    const Position = styled.div`
        z-index: 2;
        position: relative;
        display: inline-block;
        max-width: 100%;
        width: ${(props) => props.popupWidth};
        max-height: 100%;
        height: ${(props) => props.popupHeight};
        animation: open .6s;
        text-align: left;
        // border: 1px solid ${(props) => props.popupBorderColor};
        // border-top: 0;
        // border-bottom: 0;
        font-size: 15px;
        white-space: normal;
        vertical-align: middle;
        background: #fff;
        &:before {
            z-index: 1;
            position: absolute;
            top: -${(props) => props.popupBorderThick + 'px'};
            right: -${(props) => props.popupBorderThick + 'px'};
            bottom: -${(props) => props.popupBorderThick + 'px'};
            left: -${(props) => props.popupBorderThick + 'px'};
            border: ${(props) => props.popupBorderThick + 'px'} solid ${(props) => props.popupBorderColor};
            box-shadow: 0 2px 20px rgba(0, 0, 0, .4);
            pointer-events: none;
            content: "";
        }
        .${hasHeader} & {
            &:before {
                top: -${(props) => props.headerHeight + 1 + 'px'};
            }
        }
        .${hasFooter} & {
            &:before {
                bottom: -${(props) => props.footerHeight + 'px'};
            }
        }
        .${hasScroll} & {
            height: 100%;
        }

        @keyframes open {
            0%{
                display: block;
                transform: scale(.7);
                opacity: 0;
            }
            50%{
                transform: scale(1.03);
                opacity: 1;
            }
            100% {
                display: block;
                transform: scale(1);
            }
        }
    `;
    const Popup = styled.div`
        z-index: 1000;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: none;
        padding: ${(props) => props.popupOuterPadding + 'px'};
        
        color: #000;
        font-size: 0;
        white-space: nowrap;
        text-align: center;
        &.${popupOn} {
            display: block;
            /* animation: none; */
        }
        &.${popupOff} {
            display: block;
            /* animation: close .6s; */
        }
        &.${hasHeader} {
            padding-top: ${(props) => props.headerHeight + props.popupOuterPadding + 'px'};
        }
        &.${hasFooter} {
            padding-bottom: ${(props) => props.footerHeight + props.popupOuterPadding + 'px'};
        }
        
        &:before {
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            content: "";
        }
        &::selection {
            background: 0;
        }

        /* @keyframes close {
            0%{
                display: block;
                transform: scale(1);
                opacity: 1;
            }
            50%{
                transform: scale(1.03);
            }
            100% {
                display: block;
                transform: scale(.7);
                opacity: 0;
            }
        } */
    `;
    return {
        popupOn: popupOn,
        hasScroll: hasScroll,
        hasHeader: hasHeader,
        hasFooter: hasFooter,
        positiveBtn: positiveBtn,
        negativeBtn: negativeBtn,
        normalBtn: normalBtn,
        Contents: Contents,
        Header: Header,
        Footer: Footer,
        Dim: Dim,
        Position: Position,
        Popup: Popup
    };
}

export default class ClassPopup extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            bool: this.props.bool,
            resize: null,

            ctr: makeNew('active'),

            active: 'active',
            width: 'auto',
            height: 'auto',

            headerHeight: 40,
            footerHeight: 60,
            popupOuterPadding: 20,
            popupInnerPadding: 20,
            popupBorderThick: 1,
            popupBorderColor: '#333',
            popupDivideBorderColor: '#eee'
        }
    }
    componentDidMount() {
        if (this.props.className !== undefined) {
            const PopupElem = document.querySelector('.' + this.state.ctr.Popup.styledComponentId);
            PopupElem.classList.add(this.props.className);
        };
    }
    componentWillReceiveProps(e) {
        if (e.bool === null) {
            return false;
        };
        // console.log(e.bool !== this.state.bool);
        if (e.bool !== this.state.bool) {
            this.setState({
                bool: e.bool
            });
            this.toggle();
        }
    }
    popupClass(e, b) {
        const PopupElem = document.querySelector('.' + this.state.ctr.Popup.styledComponentId);
        b ? PopupElem.classList.add(e) : PopupElem.classList.remove(e);
    }

    toggle(e) {
        if (!this.state.open) {
            const PopupElem = document.querySelector('.' + this.state.ctr.Popup.styledComponentId);
            const activeElem = document.querySelector('.' + this.state.active);
            (activeElem !== null) && (activeElem.classList.remove(this.state.active));
            PopupElem.classList.add(this.state.ctr.popupOn, this.state.active);
            let windowHeight = window.innerHeight;
            const HeaderElem = document.querySelector('.' + this.state.ctr.Header.styledComponentId);
            const FooterElem = document.querySelector('.' + this.state.ctr.Footer.styledComponentId);
            const PositionElem = document.querySelector('.' + this.state.ctr.Position.styledComponentId);
            const contentsElem = document.querySelector('.' + this.state.ctr.Contents.styledComponentId);
            let contentsHeight = this.props.height ? this.props.height : Math.ceil(contentsElem.scrollHeight);
            const margin = (this.state.popupOuterPadding * 2) + (HeaderElem ? this.state.headerHeight : 0) + (FooterElem ? this.state.footerHeight : 0);
            let height = windowHeight - margin;
            const resize = () => {
                contentsHeight = this.props.height ? this.props.height : Math.ceil(contentsElem.scrollHeight);
                if (PositionElem.style.height === contentsHeight) {
                    return false;
                };
                PopupElem.classList.remove(this.state.ctr.hasScroll);
                windowHeight = window.innerHeight;
                height = windowHeight - margin;
                PositionElem.style.height = contentsHeight + 'px';
            };
            this.setState({ resize: resize });
            (height < contentsHeight) && (PopupElem.classList.add(this.state.ctr.hasScroll));
            (HeaderElem !== null) && (PopupElem.classList.add(this.state.ctr.hasHeader));
            (FooterElem !== null) && (PopupElem.classList.add(this.state.ctr.hasFooter));
            window.addEventListener('resize', resize, true);
            this.setState({
                open: true
            });
        } else {
            const activeElem = document.querySelector('.' + this.state.active);
            (activeElem !== null) && (activeElem.classList.remove(this.state.active));
            const PopupElem = document.querySelector('.' + this.state.ctr.Popup.styledComponentId);
            PopupElem.classList.add(this.state.ctr.popupOn);
            const PositionElem = document.querySelector('.' + this.state.ctr.Position.styledComponentId);
            PositionElem.removeAttribute('style');
            PopupElem.classList.remove(this.state.ctr.popupOn, this.state.ctr.hasScroll, this.state.ctr.hasHeader, this.state.ctr.hasFooter);
            window.removeEventListener('resize', this.state.resize, true);
            this.setState({
                open: false
            });
        };
        if (typeof e === 'function') {
            e();
        };
    }

    render() {
        // let ctr = new makeNew();
        let header;
        let footer;
        if (this.props.title) {
            header = <this.state.ctr.Header
                headerHeight={this.state.headerHeight}
                popupInnerPadding={this.state.popupInnerPadding}
                popupBorderThick={this.state.popupBorderThick}
                popupDivideBorderColor={this.state.popupDivideBorderColor}
            >
                <h2>{this.props.title}</h2>
                <button aria-hidden={!this.props.close} onClick={this.toggle.bind(this)}>팝업창 닫기</button>
            </this.state.ctr.Header>;
        }
        if (this.props.positiveBtn || this.props.negativeBtn) {
            footer = <this.state.ctr.Footer
                footerHeight={this.state.footerHeight}
                popupInnerPadding={this.state.popupInnerPadding}
                popupBorderThick={this.state.popupBorderThick}
                popupDivideBorderColor={this.state.popupDivideBorderColor}
            >
                <div className={this.state.ctr.positiveBtn}>
                    {this.props.positiveBtn}
                </div>
                <div className={this.state.ctr.negativeBtn}>
                    {this.props.negativeBtn}
                </div>
            </this.state.ctr.Footer>;
        }

        return (
            <this.state.ctr.Popup
                popupOuterPadding={this.state.popupOuterPadding}
                headerHeight={this.state.headerHeight}
                footerHeight={this.state.footerHeight}
            >
                <this.state.ctr.Position
                    popupWidth={this.props.width ? this.props.width + 'px' : this.state.width}
                    popupHeight={this.props.height ? this.props.height + 'px' : this.state.height}
                    headerHeight={this.state.headerHeight}
                    footerHeight={this.state.footerHeight}
                    popupBorderThick={this.state.popupBorderThick}
                    popupBorderColor={this.state.popupBorderColor}
                >
                    {header}
                    <this.state.ctr.Contents
                        popupInnerPadding={this.state.popupInnerPadding}
                    >
                        {this.props.children}
                    </this.state.ctr.Contents>
                    {footer}
                </this.state.ctr.Position>
                {this.props.close ? <this.state.ctr.Dim onClick={this.toggle.bind(this)}></this.state.ctr.Dim> : <this.state.ctr.Dim></this.state.ctr.Dim>}

            </this.state.ctr.Popup>
        );
    }
}