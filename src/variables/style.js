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

export {unit};
export default style;