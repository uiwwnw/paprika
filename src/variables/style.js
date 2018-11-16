import styled from 'styled-components';

const unit = (unit) => {
    return (unit / 16).toFixed(5) + 'rem';
};

const style = {
    zIndex: {
        header: 100
    },
    header: {
        height: unit(48)
    },
    paddingVertical: unit(4), 
    paddingHorizone: unit(8), 
};

const sc = {
    _FullBtn: ['button', `
        display: block;
        width: 100%;
        margin-top: ${unit(4)};
        line-height: ${unit(30)};
        border: 0;
        text-align: center;
        text-decoration: none;
        color: #fff;
        background: #000;
    `]
};

const makeSc = (()=>{
    const length = sc.length;
    for(let i in sc) {
        const name = i.replace('_','');
        sc[name] = styled[sc._FullBtn[0]]`${sc._FullBtn[1]}`;
    }
})();

// sc.FullBtn = styled.button`${sc._FullBtn}`;

export {sc, unit};
export default style;