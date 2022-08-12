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

// OBJECT form data result
convert.forEach((info) => {
    console.log(dataObject[info]);
});

// ARRAY form data result
dataArray.forEach((info) => {
    console.log(info);
})


console.log('test');