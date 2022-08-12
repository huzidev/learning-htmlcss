// when data is in the form of OBJECT
let data = {
    huzi : {
        marks : [50, 60, 30],
        subjectA : [50],
        subjectB : [60],
        subjectC : [30]
    },
    suahib : {
        marks : [30, 50, 100],
        subjectA : [30],
        subjectB : [50],
        subjectC : [100]
    },
    bilal : {
        marks : [10, 100, 95],
        subjectA : [10],
        subjectB : [100],
        subjectC : [95]
    }
};

data.forEach((info) => {
    console.log(info);
})