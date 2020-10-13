function addPoint(array_val, i) {
    console.log("array_val = " + array_val);
    var length = chart.options.data[0].dataPoints.length;
    chart.options.title.text = "New DataPoint Added at the end";
    chart.options.data[0].dataPoints.push({
        x: array_val * 1,
        y: i
    });
    animationEnabled = true;
    animationDuration = 10000;

    chart.render();

};

