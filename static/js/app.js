
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


d3.json(url).then(function(data) {
    // console.log(data);
    // console.log(data.samples);
    // let sampleData = []
    // for (let i = 0; i < data.samples.length; i++) {
    //     sampleData.push(data.samples[i]);
    console.log(data);
});
