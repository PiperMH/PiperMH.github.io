var ctx = document.getElementById("myChart");
		var myPieChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
    datasets: [{
        data: [10, 10, 7, 6, 7, 6, 8, 0],
        backgroundColor: [
                'rgb(255, 94, 100)',
                'rgb(94, 161, 255)',
                'rgb(255, 220, 94)',
                'rgb(136, 94, 255)',
                'rgb(255, 155, 94)',
                'rgb(94, 255, 187)',
                'rgb(255, 94, 177)',
                'rgb(255, 159, 64,)'
            ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'html',
        'css',
        'JavaScript',
        'jQuery',
        'Node.Js',
        'MySql',
        'Express.Js',
        'React',
    ]
}
        
});