let number = function(busStops){
    let peopleIn = 0;
    let peopleOut = 0;
      for (let i=0; i<busStops.length; i++) {
        peopleIn += busStops[i][0];
        peopleOut += busStops[i][1];
    }
    return peopleIn - peopleOut;
  }
  console.log(number([[1, 0], [2, 1], [5, 3], [4, 2]]));