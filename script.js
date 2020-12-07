

function compareTriplets(a, b) {
    let alicePoints = 0, bobPoints = 0;
    console.log(a);

    if(a[0]>b[0]) alicePoints++;
    if(a[1]>b[1]) alicePoints++;
    if(a[2]>b[2]) alicePoints++;

    if(a[0]<b[0]) bobPoints++;
    if(a[1]<b[1]) bobPoints++;
    if(a[2]<b[2]) bobPoints++;

    console.log(alicePoints, bobPoints);

    return [alicePoints, bobPoints];
}

compareTriplets([95,45,26],[37,85,26]);
