// when data is in the form of OBJECT
let dataObject = {
    huzi : {
        subjects : {
            subjectA : 'math',
            subjectB : 'English',
            subjectC: 'Programming'
        },
        marks : [50, 60, 30],
        subjectA : [50],
        subjectB : [60],
        subjectC : [30],
    },
    suahib : {
        subjects : {
            subjectA : 'math',
            subjectB : 'English',
            subjectC: 'Programming'
        },
        marks : [30, 50, 100],
        subjectA : [30],
        subjectB : [50],
        subjectC : [100]
    },
    bilal : {
        subjects : {
            subjectA : 'math',
            subjectB : 'English',
            subjectC: 'Programming'
        },
        marks : [10, 100, 95],
        subjectA : [10],
        subjectB : [100],
        subjectC : [95]
    }
};

// converting data into the form of ARRAY FROM OBJECT form
const convert = Object.keys(dataObject);

// when data is in the form of ARRAY
let dataArray = [
    {
        studentName : 'Huzi',
        marks : [50, 60, 30],
        subjectA : [50],
        subjectB : [60],
        subjectC : [30]
    },
    {
        studentName : 'suahib',
        marks : [30, 50, 100],
        subjectA : [30],
        subjectB : [50],
        subjectC : [100]
    },
    {
        studentName : 'bilal',
        marks : [50, 60, 30],
        subjectA : [50],
        subjectB : [60],
        subjectC : [30]
    }
]

// FOR EACH loop takes total three parameters first one is value and second is INDEX and third is array which will print complete array as it is

// OBJECT form loop result
convert.forEach((info, index) => {
    console.log(index, info, dataObject[info]);
});

// ARRAY form loop result
dataArray.forEach((info, index) => {
    console.log(index, info);
})
